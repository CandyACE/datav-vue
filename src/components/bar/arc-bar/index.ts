import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import { loadAsyncComponent } from '@/utils/async-component'
import ArcBar from './src/index.vue'

ArcBar.install = (app: App): void => {
  app.component(ArcBar.name, ArcBar)
  app.component('VArcBarProp', loadAsyncComponent(() => import('./src/config.vue')))
}

export default ArcBar as SFCWithInstall<typeof ArcBar>
