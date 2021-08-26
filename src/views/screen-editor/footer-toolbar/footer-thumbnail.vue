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
          class="select-span"
          :style="{
            transform: `translate(${editorScroll.x}px,${editorScroll.y}px)`,
            width: `${editorScroll.width}px`,
            height: `${editorScroll.height}px`,
          }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { EditorModule } from '@/store/modules/editor'
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
  watchEffect,
} from 'vue'
import { on, off } from '@/utils/dom'

export default defineComponent({
  name: 'FooterThumbnail',
  setup() {
    const pageConfig = computed(() => EditorModule.pageConfig)
    const coms = computed(() => EditorModule.coms)
    const editorCanvas = computed(() => EditorModule.canvas)
    const editorScroll = computed(() => {
      const data = {
        x:
          (EditorModule.scroll.x * proportion.value) / editorCanvas.value.scale,
        y:
          (EditorModule.scroll.y * proportion.value) / editorCanvas.value.scale,
        width:
          (defaultScreenShot.width / editorCanvas.value.scale) *
          proportion.value,
        height:
          (defaultScreenShot.height / editorCanvas.value.scale) *
          proportion.value,
      }
      return data
    })
    let offset = ref(5)
    let proportion = ref(0)
    let defaultScreenShot = { ...editorCanvas.value }
    let isSelectMouseDown

    const onSelectSpanMouseDown = () => {
      isSelectMouseDown = true
    }
    const onSelectSpanMouseUp = () => {
      isSelectMouseDown = false
      console.log('up')
    }

    const onSelectSpanMouseMove = (data: MouseEvent) => {
      console.log(isSelectMouseDown)
      if (!isSelectMouseDown) return
      const x = data.movementX / proportion.value
      const y = data.movementY / proportion.value
      const canvasWp = document.getElementById('canvas-wp')
      canvasWp.scrollTop += y
      canvasWp.scrollLeft += x
    }

    onMounted(() => {
      drawCanvas()
      on(document, 'mouseup', drawCanvas)

      watchEffect(() => {
        drawCanvas()
      })

      const selectSpanEl = document.getElementsByClassName(
        'select-span',
      )[0] as HTMLElement
      on(selectSpanEl, 'mousedown', onSelectSpanMouseDown)
      on(selectSpanEl, 'mousemove', onSelectSpanMouseMove)
      on(selectSpanEl, 'mouseup', onSelectSpanMouseUp)
    })

    onUnmounted(() => {
      off(document, 'mouseup', drawCanvas)

      const selectSpanEl = document.getElementsByClassName(
        'select-span',
      )[0] as HTMLElement
      off(selectSpanEl, 'mousedown', onSelectSpanMouseDown)
      off(selectSpanEl, 'mousemove', onSelectSpanMouseMove)
      off(selectSpanEl, 'mouseup', onSelectSpanMouseUp)
    })

    // 默认canvas的属性
    const defaultCanvasParams = {
      width: 190,
      height: 110,
    }

    // 计算绘制的比例
    // 最长边距离边界的距离
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

      // 计算比例
      if (pageConfig.value.height >= pageConfig.value.width) {
        proportion.value =
          (defaultCanvasParams.height - 20) / pageConfig.value.height
      } else {
        proportion.value =
          (defaultCanvasParams.width - 20) / pageConfig.value.width
      }

      // 绘制整个框架
      context.strokeStyle = '#20586c'
      context.lineWidth = 2
      context.strokeRect(
        60 * proportion.value,
        60 * proportion.value,
        pageConfig.value.width * proportion.value,
        pageConfig.value.height * proportion.value,
      )

      for (let i = 0; i < coms.value.length; i++) {
        const com = coms.value[i]

        // 旋转
        const translateParam = {
          x:
            com.attr.x * proportion.value +
            offset.value +
            (com.attr.w * proportion.value) / 2,
          y:
            com.attr.y * proportion.value +
            offset.value +
            (com.attr.h * proportion.value) / 2,
        }
        context.save()
        context.translate(translateParam.x, translateParam.y)
        context.rotate((com.attr.deg * Math.PI) / 180)
        context.translate(-translateParam.x, -translateParam.y)
        context.fillStyle = 'rgba(255, 255, 255, 0.5)'
        if (com.selected) {
          context.fillStyle = 'rgba(0, 186, 255, 0.5)'
        }
        context.fillRect(
          com.attr.x * proportion.value + offset.value,
          com.attr.y * proportion.value + offset.value,
          com.attr.w * proportion.value,
          com.attr.h * proportion.value,
        )
        context.restore()
      }
    }

    const thumbnailVisible = ref(true)
    const setThumbnailVisible = () => {
      thumbnailVisible.value = !thumbnailVisible.value
    }

    return {
      thumbnailVisible,
      drawCanvas,
      setThumbnailVisible,
      offset,
      proportion,
      editorScroll,
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
      max-height: 110px;
      max-width: 190px;
    }

    > .highlight {
      position: absolute;
      background-color: rgba(0, 186, 255, 0.5);
      left: 0;
      z-index: 1;
      display: none;
    }
  }

  &.thumbnail-show {
    transform: scale(1);
  }
}
</style>
