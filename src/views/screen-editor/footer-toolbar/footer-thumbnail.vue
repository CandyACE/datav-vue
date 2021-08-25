<template>
  <div>
    <div class="thum-div-button">
      <i class="open-icon" @click="setThumbnailVisible">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 14 14"
        >
          <polyline
            points="14,0 14,14 0,14 0,0 14,0 14,7 7,7 7,14"
            style="fill: none; stroke: #bcc9d4; stroke-width: 2"
          />
        </svg>
      </i>
    </div>
    <div class="thumbnail" :class="{ 'thumbnail-show': thumbnailVisible }">
      <div class="datav-thumbnail">
        <canvas
          class="canvas-thumbnail"
          width="190"
          height="110"
          style="width: 190px; height: 110px"
        ></canvas>
        <span
          v-if="selectedCom"
          class="highlight"
          :style="{
            transform: `translate(${
              selectedCom?.attr.x * proportion + offset
            }px,${selectedCom?.attr.y * proportion + offset}px)`,
            width: `${selectedCom?.attr.w * proportion}px`,
            height: `${selectedCom?.attr.h * proportion}px`,
          }"
        ></span>
        <span
          class="select-span"
          :style="{
            transform: `translate(${selectSpanConfig.x}px,${selectSpanConfig.y}px)`,
            width: `${selectSpanConfig.width}px`,
            height: `${selectSpanConfig.height}px`,
          }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ComponentAttr, DatavComponent } from '@/components/datav-component'
import { EditorModule } from '@/store/modules/editor'
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  reactive,
  ref,
  watch,
} from 'vue'

export default defineComponent({
  name: 'FooterThumbnail',
  props: {
    selectedCom: {
      required: true,
    },
    // coms: {
    //   type: Array as PropType<DatavComponent[]>,
    //   required: true,
    //   default: () => [],
    // },
  },
  setup(props) {
    const pageConfig = computed(() => EditorModule.pageConfig)
    const coms = computed(() => EditorModule.coms)

    watch(
      () => props.selectedCom,
      nv => {
        if (!nv) drawCanvas()
      },
    )

    watch(
      () => pageConfig.value.width,
      config => {
        drawCanvas()
      },
    )

    watch(
      () => pageConfig.value.height,
      config => {
        drawCanvas()
      },
    )

    const selectSpanConfig = reactive({
      x: 0,
      y: 0,
      width: 190,
      height: 110,
    })

    // 默认canvas的属性
    const defaultCanvasParams = {
      width: 190,
      height: 110,
    }

    // 计算绘制的比例
    // 最长边距离边界的距离
    let offset = ref(5)
    let proportion = ref(0)
    const drawCanvas = () => {
      let canvas = document.getElementsByClassName(
        'canvas-thumbnail',
      )[0] as HTMLCanvasElement
      if (!canvas) return
      let context = canvas.getContext('2d')
      // 清空canvas内容
      canvas.height = canvas.height
      context.fillStyle = 'rgba(0, 0, 0, 0.7)'
      context.fillRect(
        0,
        0,
        defaultCanvasParams.width,
        defaultCanvasParams.height,
      )

      if (pageConfig.value.height >= pageConfig.value.width) {
        proportion.value =
          (defaultCanvasParams.height - 20) / pageConfig.value.height
      } else {
        proportion.value =
          (defaultCanvasParams.width - 20) / pageConfig.value.width
      }

      // proportion = proportion * editorCanvas.value.scale;
      // offset.value = 60 * proportion.value;

      // 绘制整个框架
      context.strokeStyle = '#20586c'
      context.lineWidth = 2
      context.strokeRect(
        offset.value,
        offset.value,
        pageConfig.value.width * proportion.value,
        pageConfig.value.height * proportion.value,
      )

      for (let i = 0; i < coms.value.length; i++) {
        const com = coms.value[i]
        context.fillStyle = 'rgba(255, 255, 255, 0.5)'
        context.fillRect(
          com.attr.x * proportion.value + offset.value,
          com.attr.y * proportion.value + offset.value,
          com.attr.w * proportion.value,
          com.attr.h * proportion.value,
        )
      }
    }

    onMounted(() => {
      drawCanvas()
    })

    const heightlightStyle = reactive({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      show: false,
    })

    // const resizeSelection = (com: DatavComponent) => {
    //   if (!com) {
    //     heightlightStyle.show = false;
    //     drawCanvas();
    //   } else {
    //     heightlightStyle.show = true;
    //     heightlightStyle.x = com.attr.x * proportion + offset;
    //     heightlightStyle.y = com.attr.y * proportion + offset;
    //     heightlightStyle.width = com.attr.w * proportion + offset;
    //     heightlightStyle.height = com.attr.h * proportion + offset;
    //   }
    // };

    // watch(
    //   () => EditorModule.selectedCom,
    //   (com) => {
    //     resizeSelection(com);
    //   }
    // );

    const thumbnailVisible = ref(true)
    const setThumbnailVisible = () => {
      thumbnailVisible.value = !thumbnailVisible.value
    }

    return {
      selectSpanConfig,
      thumbnailVisible,
      heightlightStyle,
      drawCanvas,
      setThumbnailVisible,
      offset,
      proportion,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/styles/themes/var";

.thum-div-button {
  position: relative;
  display: block;
  overflow: hidden;
  cursor: pointer;
  color: $footer-color;
  width: 14px;
}

.thumbnail {
  position: absolute;
  transition: 0.3s transform cubic-bezier(0.22, 0.61, 0.36, 1);
  bottom: 0;
  right: 0;
  transform: scale(0);

  > .datav-thumbnail {
    bottom: 45px;
    right: 15px;
    position: absolute;
    user-select: none;

    > .select-span {
      border: 1px solid $blue-main;
      box-shadow: 0 0 30px 0 #000;
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      cursor: move;
    }

    > .highlight {
      position: absolute;
      background-color: rgba(0, 186, 255, 0.5);
      left: 0;
      z-index: 1;
    }
  }

  &.thumbnail-show {
    transform: scale(1);
  }
}
</style>
