import Handlebars from 'handlebars'
import { plainText as propConfigTpl } from './partials/prop-config-tpl.hbs'
import { plainText as propComponentTpl } from './partials/prop-component-tpl.hbs'
import { plainText as propConfigByGroupTpl } from './partials/prop-config-tpl-by-group.hbs'

// ------Helpers------
Handlebars.registerHelper('eq', (a, b) => a === b)
Handlebars.registerHelper('neq', (a, b) => a !== b)
Handlebars.registerHelper('and', (a, b) => a && b)
Handlebars.registerHelper('or', (a, b) => a || b)
Handlebars.registerHelper('getPath', (path, vpath) => (vpath ? vpath : `config.${path}`))
Handlebars.registerHelper('capitalize', str => (str.charAt(0).toUpperCase() + str.slice(1)))
Handlebars.registerHelper('includes', (arr, val) => arr.includes(val))
Handlebars.registerHelper('hasSelectOpts', (arr, val) => arr.includes(`${val}s`))
Handlebars.registerHelper('enumsToTpl', (arr: string[]) => {
  let str = '['
  arr.forEach((item, i) => {
    if (i === arr.length - 1) {
      str += `'${item}'`
    } else {
      str += `'${item}',`
    }
  })
  return `${str}]`
})
Handlebars.registerHelper('getSlotPath', (path: string, vpath: string) => {
  const str = vpath ? vpath : `config.${path}`
  return str.substr(0, str.lastIndexOf('.'))
})
Handlebars.registerHelper('goBack', (path: string, level = 1) => {
  if (path) {
    const maxLv = path.split('.').length - 1
    const lv = Math.min(maxLv, Math.max(1, level || 1))
    let str = path
    for (let i = 0; i < lv; i++) {
      str = str.substr(0, str.lastIndexOf('.'))
    }
    return str
  }

  return path
})
Handlebars.registerHelper('getInlineMode', val => {
  if (val === 'inline' || val === 'inline-single') {
    return val
  }

  return false
})

// ------Partials------
Handlebars.registerPartial('prop-config-tpl', propConfigTpl)
Handlebars.registerPartial('prop-component-tpl', propComponentTpl)
Handlebars.registerPartial('prop-config-by-group-tpl', propConfigByGroupTpl)

