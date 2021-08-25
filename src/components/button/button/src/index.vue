<template>
  <div class="datav-wrapper" :style="wrapperStyle">
    <el-button :style="wrapperStyle" style="transition: 0.1s" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, computed, toRef } from 'vue'
import { useDataCenter, getFieldMap } from '@/mixins/data-center'
import { ApiModule } from '@/store/modules/api'
import { Button } from './button'

export default defineComponent({
  name: 'VButton',
  props: {
    com: {
      type: Object as PropType<Button>,
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

    return {
      wrapperStyle,
    }
  },
})
</script>
