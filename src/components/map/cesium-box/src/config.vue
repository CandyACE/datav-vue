<template>
  <div class="setting-panel-gui">
    <el-tabs tab-position="left">
      <el-tab-pane label="三维球设置">
        <g-field :level="2" label="背景透明">
          <el-switch v-model="config.viewerOptions.transparent" />
        </g-field>
        <g-field :level="2" label="天地图Key">
          <g-input v-model="config.viewerOptions.tiandituKey" />
        </g-field>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, toRef } from 'vue'
import {} from '@/data/select-options'
import { CesiumBox } from './cesium-box'

export default defineComponent({
  name: 'VCesiumBoxProp',
  props: {
    com: {
      type: Object as PropType<CesiumBox>,
      required: true,
    },
  },
  setup(props) {
    const config = toRef(props.com, 'config')

    return {
      config,
    }
  },
})
</script>
