import { UrlTemplateImageryProvider, WebMercatorTilingScheme } from 'cesium'

const MAP_URL = 'https://t{s}.tianditu.gov.cn/DataServer?T={style}_w&x={x}&y={y}&l={z}&tk={key}'

export function createTDTImagery(key: string, style = 'img') {
  return new UrlTemplateImageryProvider({
    url: MAP_URL.replace(/\{style\}/g, style || 'vec').replace(
      /\{key\}/g,
      key || '',
    ),
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
    tilingScheme: new WebMercatorTilingScheme(),
    maximumLevel: 18,
  })
}
