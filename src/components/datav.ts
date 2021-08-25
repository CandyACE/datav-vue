import { MainTitle } from './text/main-title/src/main-title'
import { NumberTitleFlop } from './text/number-title-flop/src/number-title-flop'
import { Marquee } from './text/marquee/src/marquee'
import { Paragraph } from './text/paragraph/src/paragraph'
import { Timer } from './text/timer/src/timer'

import { DatePicker } from './other/date-picker/src/date-picker'

import { BgBox } from './media/bg-box/src/bg-box'
import { BorderBox } from './media/border-box/src/border-box'
import { Decoration } from './media/decoration/src/decoration'
import { MainImg } from './media/main-img/src/main-img'

import { BasicBar } from './bar/basic-bar/src/basic-bar'

// button
import { FullScreen } from './button/full-screen/src/full-screen'
import { Button } from './button/button/src/button'

import { WordCloud } from './chart/word-cloud/src/word-cloud'

// map
import { CesiumBox } from './map/cesium-box/src/cesium-box'

export function createComponent(name: string) {
  switch (name.substr(1)) {
    case 'MainTitle':
      return new MainTitle()
    case 'NumberTitleFlop':
      return new NumberTitleFlop()
    case 'DatePicker':
      return new DatePicker()
    case 'BgBox':
      return new BgBox()
    case 'BorderBox':
      return new BorderBox()
    case 'Decoration':
      return new Decoration()
    case 'BasicBar':
      return new BasicBar()
    case 'Marquee':
      return new Marquee()
    case 'Paragraph':
      return new Paragraph()
    case 'Timer':
      return new Timer()
    case 'FullScreen':
      return new FullScreen()
    case 'MainImg':
      return new MainImg()
    case 'WordCloud':
      return new WordCloud()
    case 'CesiumBox':
      return new CesiumBox()
    case 'Button':
      return new Button()
    default:
      throw Error(`Unknown component type: ${name}.`)
  }
}
