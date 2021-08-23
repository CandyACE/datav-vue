import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import { loadAsyncComponent } from '@/utils/async-component'
import CesiumBox from './src/index.vue'

CesiumBox.install = (app: App): void => {
  app.component(CesiumBox.name, CesiumBox)
  app.component('VCesiumBoxProp', loadAsyncComponent(() => import('./src/config.vue')))
}

export default CesiumBox as SFCWithInstall<typeof CesiumBox>
