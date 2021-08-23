<template>
  <div class="datav-wrapper" :style="wrapperStyle">
    <div :id="cesiumId" class="CesiumContent"></div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  PropType,
  computed,
  toRef,
  onMounted,
  watch,
} from 'vue'
import { useDataCenter, getFieldMap } from '@/mixins/data-center'
import { ApiModule } from '@/store/modules/api'
import { CesiumBox } from './cesium-box'
import { generateId } from '@/utils/util'
import { createTDTImagery } from '@/utils/cesium-utils'
import {
  Color,
  ImageryLayer,
  Viewer,
} from 'cesium'

export default defineComponent({
  name: 'VCesiumBox',
  props: {
    com: {
      type: Object as PropType<CesiumBox>,
      required: true,
    },
  },
  setup(props) {
    useDataCenter(props.com)

    const dv_data = computed(() => {
      return ApiModule.dataMap[props.com.id]?.source ?? {}
    })

    const dv_field = computed(() => {
      return getFieldMap(props.com.apis.source.fields)
    })

    const config = toRef(props.com, 'config')
    const attr = toRef(props.com, 'attr')

    const wrapperStyle = computed(() => {
      return {
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`,
      }
    })

    const cesiumId = computed(() => {
      return `datav-cesium-${generateId()}`
    })

    var viewer: Viewer = null
    var tiandituImagery: ImageryLayer = null

    onMounted(async () => {
      // 创建天地图
      let layer = createTDTImagery(config.value.viewerOptions.tiandituKey)

      viewer = new Viewer(cesiumId.value, {
        animation: false, //Whether to create animated widgets, lower left corner of the meter
        baseLayerPicker: false, //Whether to display the layer selector
        fullscreenButton: false, //Whether to display the full-screen button
        geocoder: false, //To display the geocoder widget, query the button in the upper right corner
        homeButton: false, //Whether to display the Home button
        infoBox: false, //Whether to display the information box
        sceneModePicker: false, //Whether to display 3D/2D selector
        selectionIndicator: false, //Whether to display the selection indicator component
        timeline: false, //Whether to display the timeline
        navigationHelpButton: false, //Whether to display the help button in the upper right corner
        navigationInstructionsInitiallyVisible: false,
        creditContainer: undefined,
        shouldAnimate: true,
        contextOptions: {
          //截屏设置
          webgl: {
            alpha: true,
            depth: false,
            stencil: true,
            antialias: true,
            premultipliedAlpha: true,
            preserveDrawingBuffer: true, //通过canvas.toDataURL()实现截图需要将该项设置为true
            failIfMajorPerformanceCaveat: true,
          },
          allowTextureFilterAnisotropic: true,
        },
        imageryProvider: layer,
      })

      tiandituImagery = viewer.imageryLayers.get(0)

      if (!config.value.viewerOptions.transparent) {
        viewer.scene.skyBox.show = true
      } else {
        viewer.scene.skyBox.show = false
        viewer.scene.backgroundColor = new Color(0, 0, 0, 0)
      }
    })

    watch(
      () => config.value.viewerOptions.tiandituKey,
      (nv: string) => {
        if (viewer) {
          viewer.imageryLayers.remove(tiandituImagery)
          tiandituImagery = viewer.imageryLayers.addImageryProvider(
            createTDTImagery(nv),
          )
        }
      },
    )

    watch(
      () => config.value.viewerOptions.transparent,
      (nv: boolean) => {
        if (viewer) {
          if (!nv) {
            viewer.scene.skyBox.show = true
          } else {
            viewer.scene.skyBox.show = false
            viewer.scene.backgroundColor = new Color(0, 0, 0, 0)
          }
        }
      },
    )

    return {
      cesiumId,
      wrapperStyle,
    }
  },
})
</script>

<style lang="scss" scoped>
.CesiumContent {
  width: 100%;
  height: 100%;
}
</style>
