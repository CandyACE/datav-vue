import Mock from 'mockjs'
import type MockAdapter from 'axios-mock-adapter'

export default (adapter: MockAdapter) => {
  // 组件列表
  adapter.onGet('/coms')
    .reply(200, Mock.mock({
      code: 0,
      message: 'ok',
      data: [
        // {
        //   id: '@guid',
        //   type: 'com',
        //   alias: '通用标题',
        //   name: 'VMainTitle',
        //   locked: false,
        //   parentId: null,
        //   hided: false,
        //   attr: {
        //     opacity: 1,
        //     'x|100-1500': 810,
        //     w: 300,
        //     'y|100-600': 512,
        //     deg: 0,
        //     'h|56-300': 56,
        //     filpV: false,
        //     filpH: false,
        //   },
        //   icon: 'v-icon-title',
        //   config: {
        //     title: '我是标题',
        //     textStyle: {
        //       fontFamily: 'Microsoft Yahei',
        //       fontSize: 24,
        //       color: '#fff',
        //       fontWeight: 'normal',
        //     },
        //     textAlign: 'center',
        //     urlConfig: {
        //       url: '',
        //       isBlank: false,
        //     },
        //     writingMode: 'horizontal-tb',
        //     letterSpacing: 0,
        //     ellipsis: false,
        //     backgroundStyle: {
        //       show: false,
        //       bgColor: '#008bff',
        //       borderRadius: 15,
        //       borderColor: '#fff',
        //       borderStyle: 'solid',
        //       borderWidth: 1,
        //     },
        //   },
        //   children: null,
        //   img: '//files.pengxiaotian.com/com-thum/main-title-370-208.png',
        //   apis: {
        //     source: {
        //       autoUpdate: 1,
        //       description: '',
        //       fields: {
        //         title: {
        //           type: 'string',
        //           path: '',
        //           map: '',
        //           description: '标题值',
        //           optional: true,
        //         },
        //         url: {
        //           type: 'string',
        //           path: '',
        //           map: '',
        //           description: '超链接',
        //           optional: true,
        //         },
        //       },
        //       render: 'render',
        //       useAutoUpdate: false,
        //     },
        //   },
        //   apiData: {
        //     source: {
        //       id: '@guid',
        //       type: 'static',
        //       comId: '@guid',
        //       config: {
        //         useFilter: false,
        //         pageFilters: [],
        //         data: '{"title":"我是标题数据","url":""}',
        //       },
        //       pageFilters: [],
        //     },
        //   },
        //   projectId: 1,
        //   events: [],
        //   selected: false,
        //   hovered: false,
        // },
        {
          locked: false,
          hided: false,
          selected: false,
          hovered: false,
          renameing: false,
          attr: {
            x: 0,
            y: 0,
            w: 1920,
            h: 1080,
            deg: 0,
            opacity: 1,
            filpV: false,
            filpH: false,
          },
          projectId: 0,
          id: 'CesiumBox_xgDF6yIwh',
          name: 'VCesiumBox',
          type: 'com',
          alias: 'Cesium世界地图',
          icon: 'v-icon-map',
          img: '//files.pengxiaotian.com/com-thum/3d-world-368-208.png',
          config: {
            viewerOptions: {
              transparent: false,
              tiandituKey: '0706de30ab31624f9268b07fbc09bfd4',
            },
          },
          apis: {
            source: {
              fields: {
                value: {
                  type: 'string',
                  map: '',
                  description: '',
                  optional: true,
                },
              },
              render: 'render',
              description: '',
              useAutoUpdate: false,
              autoUpdate: 1,
            },
          },
          apiData: {
            source: {
              comId: 'CesiumBox_xgDF6yIwh',
              id: 'XDAmeIFFJd',
              type: 'static',
              pageFilters: [],
              config: {
                useFilter: false,
                data: '',
              },
            },
          },
          events: {},
          actions: {},
        }, {
          locked: false,
          hided: false,
          selected: false,
          hovered: false,
          renameing: false,
          attr: {
            x: 364,
            y: -48,
            w: 1237,
            h: 272,
            deg: 0,
            opacity: 1,
            filpV: false,
            filpH: false,
          },
          projectId: 0,
          id: 'Decoration_GfMdXGa9t',
          name: 'VDecoration',
          type: 'com',
          alias: '装饰',
          icon: 'v-icon-material',
          img: '//files.pengxiaotian.com/com-thum/decoration-370-208.png',
          config: {
            global: {
              img: 'gif54',
              opacity: 1,
            },
          },
          apis: {},
          apiData: {},
          events: {},
          actions: {},
        }, {
          locked: false,
          hided: false,
          selected: false,
          hovered: false,
          renameing: false,
          attr: {
            x: 794,
            y: -8,
            w: 325,
            h: 100,
            deg: 0,
            opacity: 1,
            filpV: false,
            filpH: false,
          },
          projectId: 0,
          id: 'MainTitle_yWP_dy6kN',
          name: 'VMainTitle',
          type: 'com',
          alias: '通用标题',
          icon: 'v-icon-title',
          img: '//files.pengxiaotian.com/com-thum/main-title-370-208.png',
          config: {
            title: '大屏',
            textStyle: {
              fontFamily: 'Microsoft Yahei',
              fontSize: 49,
              color: '#fff',
              fontWeight: 'normal',
            },
            textAlign: 'center',
            writingMode: 'horizontal-tb',
            letterSpacing: 0,
            backgroundStyle: {
              show: false,
              bgColor: '#008bff',
              borderRadius: 15,
              borderColor: '#fff',
              borderStyle: 'solid',
              borderWidth: 1,
            },
            ellipsis: false,
            urlConfig: {
              url: '',
              isBlank: false,
            },
          },
          apis: {
            source: {
              fields: {
                title: {
                  type: 'string',
                  map: '',
                  description: '标题值',
                  optional: true,
                },
                url: {
                  type: 'string',
                  map: '',
                  description: '超链接',
                  optional: true,
                },
              },
              render: 'render',
              description: '',
              useAutoUpdate: false,
              autoUpdate: 1,
            },
          },
          apiData: {
            source: {
              comId: 'MainTitle_yWP_dy6kN',
              id: 'U_GhnCL_nB',
              type: 'static',
              pageFilters: [],
              config: {
                useFilter: false,
                data: '{\r\n  "title": "大屏",\r\n  "url": ""\r\n}',
              },
            },
          },
          events: {},
          actions: {},
        }, {
          locked: false,
          hided: false,
          selected: false,
          hovered: false,
          renameing: false,
          attr: {
            x: 1724,
            y: 888,
            w: 200,
            h: 200,
            deg: 0,
            opacity: 1,
            filpV: false,
            filpH: false,
          },
          projectId: 0,
          id: 'Decoration_2xwHBL8Fq',
          name: 'VDecoration',
          type: 'com',
          alias: '装饰',
          icon: 'v-icon-material',
          img: '//files.pengxiaotian.com/com-thum/decoration-370-208.png',
          config: {
            global: {
              img: 'gif4',
              opacity: 1,
            },
          },
          apis: {},
          apiData: {},
          events: {},
          actions: {},
        }, {
          locked: false,
          hided: false,
          selected: false,
          hovered: false,
          renameing: false,
          attr: {
            x: 2,
            y: 886,
            w: 200,
            h: 200,
            deg: 0,
            opacity: 1,
            filpV: false,
            filpH: true,
          },
          projectId: 0,
          id: 'VDecoration_KaBNEeDen',
          name: 'VDecoration',
          type: 'com',
          alias: '装饰_copy',
          icon: 'v-icon-material',
          img: '//files.pengxiaotian.com/com-thum/decoration-370-208.png',
          config: {
            global: {
              img: 'gif4',
              opacity: 1,
            },
          },
          apis: {},
          apiData: {},
          events: {},
          actions: {},
        }, {
          locked: false,
          hided: false,
          selected: false,
          hovered: false,
          renameing: false,
          attr: {
            x: 856,
            y: 20,
            w: 200,
            h: 76,
            deg: 0,
            opacity: 1,
            filpV: true,
            filpH: true,
          },
          projectId: 0,
          id: 'VDecoration_LhGrV5-85',
          name: 'VDecoration',
          type: 'com',
          alias: '装饰_copy_copy',
          icon: 'v-icon-material',
          img: '//files.pengxiaotian.com/com-thum/decoration-370-208.png',
          config: {
            global: {
              img: 'gif8',
              opacity: 1,
            },
          },
          apis: {},
          apiData: {},
          events: {},
          actions: {},
        }, {
          locked: false,
          hided: false,
          selected: false,
          hovered: false,
          renameing: false,
          attr: {
            x: 54,
            y: 750,
            w: 500,
            h: 300,
            deg: 0,
            opacity: 1,
            filpV: false,
            filpH: false,
          },
          projectId: 0,
          id: 'BasicBar_ulrDixSxZ',
          name: 'VBasicBar',
          type: 'com',
          alias: '柱状图',
          icon: 'v-icon-chart-bar',
          img: '//files.pengxiaotian.com/com-thum/basic-bar-368-208.png',
          config: {
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
            label: {
              show: false,
              position: 'top',
              textStyle: {
                fontSize: 12,
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 'normal',
              },
              offsetX: 0,
              offsetY: 0,
            },
            xAxis: {
              show: true,
              type: 'category',
              title: {
                show: true,
                name: 'X轴',
                location: 'center',
                display: {
                  rotate: 0,
                  offset: 20,
                },
                textStyle: {
                  fontSize: 12,
                  color: '#90a0ae',
                  fontWeight: 'normal',
                },
              },
              axisLine: {
                show: true,
                type: 'solid',
                width: 1,
                color: 'rgba(255, 255, 255, 0.5)',
              },
              axisTick: {
                show: true,
                type: 'solid',
                width: 1,
                color: 'rgba(255, 255, 255, 0.5)',
              },
              axisLabel: {
                show: true,
                timeFormat: 'MM/DD',
                boundaryGap: true,
                interval: 'auto',
                display: {
                  rotate: 0,
                  margin: 10,
                },
                align: 'center',
                textStyle: {
                  fontSize: 12,
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontWeight: 'normal',
                },
              },
              grid: {
                show: true,
                line: {
                  type: 'dashed',
                  width: 1,
                  color: 'rgba(233, 228, 228, 0.1)',
                  dashedLength: 4,
                  dashedSpace: 4,
                },
              },
            },
            yAxis: {
              show: true,
              extent: {
                min: 'auto',
                max: 'auto',
              },
              splitNumber: 0,
              title: {
                show: false,
                name: 'Y轴',
                location: 'center',
                display: {
                  rotate: 90,
                  offset: 20,
                },
                textStyle: {
                  fontSize: 12,
                  color: '#90a0ae',
                  fontWeight: 'normal',
                },
              },
              axisLine: {
                show: true,
                type: 'solid',
                width: 1,
                color: 'rgba(255, 255, 255, 0.5)',
              },
              axisTick: {
                show: true,
                type: 'solid',
                width: 1,
                color: 'rgba(255, 255, 255, 0.5)',
              },
              axisLabel: {
                show: true,
                valueFormat: 'auto',
                boundaryGap: 0,
                display: {
                  rotate: 0,
                  margin: 10,
                },
                align: 'center',
                textStyle: {
                  fontSize: 12,
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontWeight: 'normal',
                },
              },
              grid: {
                show: true,
                line: {
                  type: 'dashed',
                  width: 1,
                  color: 'rgba(233, 228, 228, 0.1)',
                  dashedLength: 4,
                  dashedSpace: 4,
                },
              },
            },
            tooltip: {
              show: true,
              textStyle: {
                fontSize: 14,
                color: '#fff',
                fontWeight: 'normal',
              },
              background: {
                padding: {
                  h: 5,
                  v: 5,
                },
                color: 'rgba(0, 0, 0, 0.65)',
              },
              pointer: {
                show: true,
                line: {
                  type: 'dashed',
                  width: 1,
                  color: '#f5dc69',
                  dashedLength: 4,
                  dashedSpace: 4,
                },
              },
            },
            legend: {
              show: true,
              position: 'top-center',
              orient: 'horizontal',
              textStyle: {
                fontSize: 12,
                color: '#90a0ae',
                fontWeight: 'normal',
              },
              symbol: {
                show: true,
                icon: 'auto',
                width: 25,
                height: 14,
                gap: 10,
              },
              page: {
                enabled: false,
                size: {
                  width: 100,
                  height: 100,
                },
                button: {
                  size: 15,
                  color: '#000',
                  inactiveColor: '#000',
                },
                pageNumColor: '#90a0ae',
              },
            },
            series: [{
              type: 'bar',
              id: '系列1_YDEqIYs0r6',
              name: '系列1',
              color: {
                type: 'solid',
                value: '#00baff',
                from: '#fff',
                to: '#000',
              },
            }],
            animation: {
              enabled: true,
              duration: 1000,
              easing: 'cubicOut',
              delay: 0,
            },
          },
          apis: {
            source: {
              fields: {
                x: {
                  type: 'string',
                  map: '',
                  description: '类目',
                  optional: false,
                },
                y: {
                  type: 'string',
                  map: '',
                  description: '值',
                  optional: false,
                },
              },
              render: 'render',
              description: '基本柱状图接口',
              useAutoUpdate: false,
              autoUpdate: 1,
            },
          },
          apiData: {
            source: {
              comId: 'BasicBar_ulrDixSxZ',
              id: 'Zehwon08UK',
              type: 'static',
              pageFilters: [],
              config: {
                useFilter: false,
                data: '[{"x":"上海","y":23},{"x":"深圳","y":13},{"x":"合肥","y":2},{"x":"成都","y":9},{"x":"安徽","y":5},{"x":"北京","y":10},{"x":"杭州","y":14},{"x":"长沙","y":24}]',
              },
            },
          },
          events: {
            click: {
              description: '当点击数据项时',
              fields: {
                x: {
                  type: 'string',
                  map: '',
                  description: '类目',
                  optional: false,
                },
                y: {
                  type: 'string',
                  map: '',
                  description: '值',
                  optional: false,
                },
              },
            },
          },
          actions: {},
        }, {
          locked: false,
          hided: false,
          selected: false,
          hovered: false,
          renameing: false,
          attr: {
            x: 1586,
            y: 840,
            w: 300,
            h: 200,
            deg: 0,
            opacity: 1,
            filpV: false,
            filpH: false,
          },
          projectId: 0,
          id: 'WordCloud_CJpf8zHX-',
          name: 'VWordCloud',
          type: 'com',
          alias: '词云',
          icon: 'v-icon-other',
          img: '//files.pengxiaotian.com/com-thum/word-cloud-370-208.png',
          config: {
            global: {
              fontFamily: 'Microsoft Yahei',
              max: 35,
              min: 14,
              rotationRange: {
                min: -90,
                max: 90,
              },
              rotate: 45,
              drawType: 'preset',
              shape: 'circle',
              image: 'https://files.pengxiaotian.com/datav/echarts-logo.png',
            },
            series: [{
              type: 'wordCloud',
              id: '0_VSva1p2vIB',
              name: '0',
              color: '#0a73ff',
            }, {
              type: 'wordCloud',
              id: '1_g6lNZJhj1m',
              name: '1',
              color: '#3dabff',
            }, {
              type: 'wordCloud',
              id: '2_rfb2tWbH57',
              name: '2',
              color: '#79daff',
            }],
            tooltip: {
              show: false,
              textStyle: {
                fontSize: 14,
                color: '#fff',
                fontWeight: 'normal',
              },
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
            },
            animation: {
              enabled: true,
            },
          },
          apis: {
            source: {
              fields: {
                name: {
                  type: 'string',
                  map: '',
                  description: '名称',
                  optional: false,
                },
                value: {
                  type: 'string',
                  map: '',
                  description: '值',
                  optional: false,
                },
                type: {
                  type: 'string',
                  map: '',
                  description: '系列',
                  optional: false,
                },
              },
              render: 'render',
              description: '',
              useAutoUpdate: false,
              autoUpdate: 1,
            },
          },
          apiData: {
            source: {
              comId: 'WordCloud_CJpf8zHX-',
              id: '4uFQ79KOz2',
              type: 'static',
              pageFilters: [],
              config: {
                useFilter: false,
                data: '[{"name":"125.88.160.114","value":1,"type":0},{"name":"140.205.137.163","value":1,"type":0},{"name":"192.168.31.247","value":1,"type":0},{"name":"suso56.welogix.cn","value":1,"type":2},{"name":"fengdie-dev.alipay.net","value":1,"type":0},{"name":"cssyz.weixiaobang.cn","value":1,"type":2},{"name":"adart.test.alipay.net","value":1,"type":0},{"name":"gxwk.welogix.cn","value":1,"type":2},{"name":"192.168.0.112","value":1,"type":0},{"name":"www.cartocar.biz","value":1,"type":2},{"name":"zhuoguo.cc","value":1,"type":2},{"name":"m.sssyin.cn","value":1,"type":2},{"name":"fcdart.d1559.mayibank.net","value":1,"type":1},{"name":"adart-pre.alipay.com","value":1,"type":1},{"name":"render.stable.alipay.net","value":1,"type":1},{"name":"suso.welogix.cn","value":1,"type":2},{"name":"guxi.welogix.cn","value":1,"type":2},{"name":"www.blog.com","value":1,"type":2},{"name":"mspp.merrywin.com","value":1,"type":2},{"name":"antvis.github.io","value":2,"type":2},{"name":"www.ping4g.cn","value":2,"type":2},{"name":"dcpconsole.cainiao-inc.com","value":2,"type":1},{"name":"antp.dev.alipay.net","value":2,"type":0},{"name":"web-b.i200.cn","value":2,"type":2},{"name":"112.82.247.234","value":2,"type":0},{"name":"wf.m.taobao.com","value":2,"type":1},{"name":"seo.onedesk.cn","value":2,"type":2},{"name":"sandvik.welogix.cn","value":2,"type":2},{"name":"192.168.0.134","value":2,"type":0},{"name":"zdataassets-d4100.alipay.net","value":2,"type":0},{"name":"amss.win.oa.com","value":3,"type":2},{"name":"www.bjmiaodai.com","value":3,"type":2},{"name":"115.231.218.159","value":3,"type":0},{"name":"www.bjzhzj.cn","value":3,"type":2},{"name":"adart.alipay.com","value":4,"type":1},{"name":"b.wapa.taobao.com","value":4,"type":1},{"name":"d.formaxoa.com","value":4,"type":2},{"name":"titans.inc.alipay.net","value":5,"type":1},{"name":"live.iemaker.cn","value":5,"type":2},{"name":"bjzhzj.com","value":5,"type":2},{"name":"localhost.admin","value":5,"type":0},{"name":"zdataassets.alipay.com","value":5,"type":1},{"name":"120.77.15.178","value":5,"type":0},{"name":"perf-clouddba.alibaba-inc.com","value":6,"type":1},{"name":"linke-1.aone.prod.alipay.net","value":6,"type":1},{"name":"dataeye.yunos.alibaba-inc.com","value":6,"type":1},{"name":"bjmiaodai.com","value":6,"type":2},{"name":"antopdaemon.d2697.alipay.net","value":6,"type":0},{"name":"hrm.loadpeople.com","value":6,"type":2},{"name":"local.d.formaxoa.com","value":6,"type":2},{"name":"gxwl.welogix.cn","value":7,"type":2},{"name":"ecrm-binding-dashboard.curio.im","value":7,"type":2},{"name":"192.168.0.202","value":7,"type":0},{"name":"adart-1-64.test.alipay.net","value":7,"type":0},{"name":"yuanheng.welogix.cn","value":7,"type":2},{"name":"1.localhost","value":8,"type":0},{"name":"adart.d0808.alipay.net","value":8,"type":0},{"name":"10.210.251.49","value":8,"type":0},{"name":"192.168.0.11","value":9,"type":0},{"name":"qa.alipay.net","value":11,"type":1},{"name":"192.168.1.23","value":11,"type":0},{"name":"b.waptest.taobao.net","value":11,"type":1},{"name":"192.168.1.94","value":12,"type":0},{"name":"192.168.1.137","value":12,"type":0},{"name":"bifrost.i56.taobao.com","value":13,"type":2},{"name":"yzh.southinfo.net","value":13,"type":0},{"name":"ask.dev.inc.alipay.net","value":13,"type":0},{"name":"adart-alarm-t3143.alipay.net","value":14,"type":1},{"name":"100.67.44.8","value":14,"type":0},{"name":"demo.welogix.cn","value":15,"type":2},{"name":"antopdaemon.alipay.com","value":16,"type":1},{"name":"cslearn.alipay.com","value":17,"type":1},{"name":"pre.dataeye.yunos-inc.proxy.taobao.org","value":17,"type":0},{"name":"hz.crmweb.alibaba.com","value":18,"type":1},{"name":"bi.trenddata.cn","value":18,"type":0},{"name":"socialmng-d4163.alipay.net","value":18,"type":0},{"name":"fraudmng1-d4267.alipay.net","value":19,"type":0},{"name":"www.loadjob.com","value":21,"type":2},{"name":"nomo.alipay.com","value":23,"type":1},{"name":"openmonitor-1-64.test.alipay.net","value":23,"type":0},{"name":"nlo.welogix.cn","value":25,"type":2},{"name":"fraudmng.stable.alipay.net","value":25,"type":1},{"name":"antp.alipay.net","value":26,"type":1},{"name":"wlkt.fuzhuxian.com","value":26,"type":2},{"name":"139.196.223.165","value":27,"type":0},{"name":"monitor.51datakey.com","value":28,"type":2},{"name":"staging-app.yuanbei.biz","value":28,"type":2},{"name":"dbpaas.sqa.alibaba-inc.com","value":28,"type":1},{"name":"linke.stable.inc.alipay.net","value":29,"type":1},{"name":"aone-test.alipay.net","value":29,"type":0},{"name":"192.168.0.203","value":30,"type":0},{"name":"manager.xy-digital.com","value":31,"type":2},{"name":"filesync.alibaba-inc.com","value":33,"type":1},{"name":"linke.antcloud.alipay.net","value":34,"type":1},{"name":"humeng.welogix.cn","value":34,"type":2},{"name":"cslearn-d3286.alipay.net","value":34,"type":0},{"name":"10.125.2.180","value":35,"type":0},{"name":"ux.alipay.net","value":37,"type":1},{"name":"ask.inc.alipay.net","value":48,"type":1},{"name":"wf.waptest.taobao.com","value":51,"type":1},{"name":"muses.alitest.net","value":53,"type":1},{"name":"linke.antcloud.sh.alipay.net","value":57,"type":1},{"name":"mokiwi_dsp.com","value":60,"type":2},{"name":"xrht.wapa.taobao.com","value":61,"type":1},{"name":"w.daily.alibaba.net","value":66,"type":0},{"name":"openmonitor.test.alipay.net","value":67,"type":0},{"name":"finsandbox-d4689.alipay.net","value":69,"type":0},{"name":"lzp.alipay.net","value":71,"type":1},{"name":"xrht.waptest.taobao.net","value":71,"type":1},{"name":"openmonitor-pool.test.alipay.net","value":74,"type":0},{"name":"home.console.aliyun.com","value":92,"type":1},{"name":"m.gohomeplay.com","value":95,"type":2},{"name":"hello.alipay.net","value":95,"type":1},{"name":"w.alibaba-inc.com","value":100,"type":1},{"name":"dart.alipay.net","value":104,"type":1},{"name":"admin.bpbhd.com","value":104,"type":2},{"name":"crm.alibaba-inc.com","value":106,"type":1},{"name":"wf.wapa.taobao.com","value":108,"type":1},{"name":"www.bjzhzj.com","value":112,"type":2},{"name":"richard.stable.alipay.net","value":128,"type":0},{"name":"openmonitor-d3299.alipay.net","value":131,"type":0},{"name":"mangoerp.com","value":139,"type":2},{"name":"172.27.119.172","value":153,"type":0},{"name":"fraudmng-d4267.alipay.net","value":165,"type":0},{"name":"app.i200.cn","value":204,"type":2},{"name":"10.17.41.198","value":206,"type":0},{"name":"www.miaodaiwang.com","value":229,"type":2},{"name":"dart.local.alipay.net","value":283,"type":2},{"name":"10.1.16.104","value":295,"type":0},{"name":"b.waptest.taobao.com","value":347,"type":0},{"name":"perf.dbpaas.alibaba-inc.com","value":464,"type":1},{"name":"127.0.0.1","value":562,"type":0},{"name":"dbpaas.alibaba-inc.com","value":607,"type":1},{"name":"fraudmng.alipay.com","value":851,"type":1},{"name":"g2.alipay.com","value":2339,"type":1},{"name":"localhost","value":2750,"type":0}]',
              },
            },
          },
          events: {},
          actions: {},
        }, {
          locked: false,
          hided: false,
          selected: false,
          hovered: false,
          renameing: false,
          attr: {
            x: 2,
            y: 0,
            w: 300,
            h: 56,
            deg: 0,
            opacity: 1,
            filpV: false,
            filpH: false,
          },
          projectId: 0,
          id: 'Timer_8NUPvv1Ba',
          name: 'VTimer',
          type: 'com',
          alias: '时间器',
          icon: 'v-icon-title',
          img: '//files.pengxiaotian.com/com-thum/timer-370-208.png',
          config: {
            iconStyle: {
              show: true,
              size: 1.2,
              color: 'rgba(93,245,244,1)',
              marginRight: 6,
            },
            time: {
              textStyle: {
                fontFamily: 'Microsoft Yahei',
                fontSize: 18,
                color: '#fff',
                fontWeight: 'normal',
              },
              format: 'YYYY-MM-DD HH:mm:ss',
              duration: 1000,
              horizontal: 'center',
              vertical: 'center',
            },
          },
          apis: {},
          apiData: {},
          events: {},
          actions: {},
        },
      ],
    }))

  // 创建
  adapter.onPost('/coms')
    .reply(200, Mock.mock({
      code: 0,
      message: 'ok',
    }))

  // 复制组件
  adapter.onPost(/\/coms\/\S+\/copy$/)
    .reply(200, Mock.mock({
      code: 0,
      message: 'ok',
    }))

  // 删除组件
  adapter.onDelete(/\/coms\/\S+$/)
    .reply(200, Mock.mock({
      code: 0,
      message: 'ok',
    }))
}
