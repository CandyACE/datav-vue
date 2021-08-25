import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import { loadAsyncComponent } from '@/utils/async-component'
import Button from './src/index.vue'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
  app.component('VButtonProp', loadAsyncComponent(() => import('./src/config.vue')))
}

export default Button as SFCWithInstall<typeof Button>
