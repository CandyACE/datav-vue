import { DatavComponent } from '@/components/datav-component'
import {
  ApiConfigMap, ApiDataConfigMap,
  initApiConfig, initApiData,
} from '@/components/data-source'
import { createField } from '@/components/data-field'
import { DataEventConfig } from '@/components/data-event'
import { getStaticData } from '@/api/data'

/**
 * CesiumBox
 */
export class CesiumBox extends DatavComponent {
  config = {
    viewerOptions: {
      transparent: false,
      tiandituKey: '0706de30ab31624f9268b07fbc09bfd4',
    },
  }

  apis: Partial<ApiConfigMap>
  apiData: Partial<ApiDataConfigMap>

  events: Record<string, DataEventConfig>

  actions: Record<string, DataEventConfig>

  constructor() {
    super('CesiumBox', { w: 200, h: 200 })

    this.initData()
  }

  initData() {
    const fields = [
      createField('value', { description: '', optional: true }),
    ]

    this.apis = initApiConfig({
      fields: Object.assign({}, ...fields),
    })

    this.apiData = initApiData(this.id)

    const cameraMoveEndFields = [
      createField('position', { description: '相机的位置', optional: true }),
      createField('direction ', { description: '相机的朝向', optional: true }),
      createField('up ', { description: '相机的俯仰', optional: true }),
    ]

    this.events = {
      CameraMoveEnd: {
        description: '相机移动结束事件',
        fields: Object.assign({}, ...cameraMoveEndFields),
      },
    }

    this.actions = {
      setCamera: {
        description: '设置相机视角',
        fields: Object.assign({}, ...cameraMoveEndFields),
      },
    }

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

export default CesiumBox
