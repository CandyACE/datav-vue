<template>
  <div class="datav-wrapper" :style="wrapperStyle">
    <v-chart autoresize />
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, computed, toRef } from 'vue'
import { useDataCenter, getFieldMap } from '@/mixins/data-center'
import { ApiModule } from '@/store/modules/api'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { GaugeChart } from 'echarts/charts'
import { ArcBar } from './arc-bar'
import { groupBy } from 'lodash'

use([CanvasRenderer, GaugeChart])

export default defineComponent({
  name: 'VArcBar',
  props: {
    com: {
      type: Object as PropType<ArcBar>,
      required: true,
    },
  },
  components: {
    VChart,
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

    const chartData = computed(() => {
      const groups = groupBy(dv_data.value, item => item[dv_field.value.x])
      return {
        keys: Object.keys(groups),
        values: Object.values(groups),
      }
    })

    const getSeries = () => {
      const {
        global,
        axisLine,
        progress,
        pointer,
        startAngle,
        endAngle,
        series,
      } = config.value
      const { values } = chartData.value
      return series.map((item, idx) => {
        return {
          type: item.type,
          name: item.name,
          startAngle: startAngle,
          endAngle: endAngle,
          pointer: {
            show: pointer.show,
          },
          progress: {
            ...progress,
          },
          axisLine: {
            show: axisLine,
          },
        }
      })
    }

    return { wrapperStyle }
  },
})
</script>
