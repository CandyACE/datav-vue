import { DatavChartSeries, DatavComponent } from '@/components/datav-component'
import {
  ApiConfigMap, ApiDataConfigMap,
  initApiConfig, initApiData,
} from '@/components/data-source'
import { createField } from '@/components/data-field'
import { DataEventConfig } from '@/components/data-event'
import { getStaticData } from '@/api/data'

export class ArcBarSeries extends DatavChartSeries {
  constructor(name: string) {
    super('gauge', name)
  }
}

/**
 * ArcBar
 */
export class ArcBar extends DatavComponent {
  config = {
    global: {
      fontFamily: 'Microsoft Yahei',
      margin: {
        top: 40,
        bottom: 50,
        left: 50,
        right: 10,
      },
      innerPadding: 20,
      outerPadding: 30,
      barWidth: 'auto',
      background: {
        show: true,
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
    title: {
      fontSize: 14,
      show: false,
    },
    detail: {
      show: false,
      width: 50,
      height: 14,
      fontSize: 14,
      color: 'auto',
      borderColor: 'auto',
      borderRadius: 20,
      borderWidth: 1,
      formatter: '{value}%',
    },
    pointer: {
      show: false,
    },
    progress: {
      show: true,
      overlap: false,
      roundCap: true,
      clip: false,
      itemStyle: {
        borderWidth: 1,
        borderColor: '#464646',
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        width: 40,
        color:[

        ],
      },
    },
    splitLine: {
      show: false,
      distance: 0,
      length: 10,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
      distance: 50,
    },
    startAngle: 90,
    endAngle: -270,
    series: [new ArcBarSeries('系列1')],
    animation: {
      enabled: true,
      duration: 1000,
      easing: 'cubicOut',
      delay: 0,
    },
  }

  apis: Partial<ApiConfigMap>
  apiData: Partial<ApiDataConfigMap>

  events: Record<string, DataEventConfig>

  actions: Record<string, DataEventConfig>

  constructor() {
    super('ArcBar', { w: 200, h: 200 })

    this.initData()
  }

  initData() {
    const fields = [
      createField('key', { description: '名称' }),
      createField('value', { description: '值' }),
    ]

    this.apis = initApiConfig({
      fields: Object.assign({}, ...fields),
      description: '基本玉环图接口',
    })

    this.apiData = initApiData(this.id)

    this.events = {
      click: {
        description: '当点击数据项时',
        fields: Object.assign({}, ...fields),
      },
    }
    this.actions = {}

    return this
  }

  async loadData() {
    try {
      // 组件静态数据来源，当前项目统一管理目录：public/data/*
      // 如：public/data/demo/data.json 简写为 => demo/data
      const path = ''
      const res = await getStaticData(this.id, path)
      this.apiData.source.config.data = JSON.stringify(res.data)
    } catch (error) {
      throw error
    }
  }
}

export default ArcBar
