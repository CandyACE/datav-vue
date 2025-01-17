import type { App } from 'vue'
import VMainTitle from './text/main-title'
import VNumberTitleFlop from './text/number-title-flop'
import VMarquee from './text/marquee'
import VParagraph from './text/paragraph'
import VTimer from './text/timer'

import VDatePicker from './other/date-picker'

import VBgBox from './media/bg-box'
import VBorderBox from './media/border-box'
import VDecoration from './media/decoration'
import VMainImg from './media/main-img'

import VBasicBar from './bar/basic-bar'

// button
import VFullScreen from './button/full-screen'
import VButton from './button/button'

import VWordCloud from './chart/word-cloud'

// map
import VCesium from './map/cesium-box'

const components = [
  VMainTitle,
  VNumberTitleFlop,
  VDatePicker,
  VBgBox,
  VBorderBox,
  VDecoration,
  VBasicBar,
  VMarquee,
  VParagraph,
  VTimer,
  VFullScreen,
  VMainImg,
  VWordCloud,
  VCesium,
  VButton,
]

const install = (app: App): void => {
  components.forEach(component => {
    app.use(component)
  })
}

export default {
  install,
}
