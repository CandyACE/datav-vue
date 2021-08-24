<template>
  <div class="basic-setting-wp">
    <g-field label="图表尺寸" :is-flat="true">
      <g-input-number
        v-model="attr.w"
        :min="10"
        :max="888888"
        inline
      />
      <g-input-number
        v-model="attr.h"
        :min="10"
        :max="888888"
        inline
      />
    </g-field>
    <g-field label="图表位置" :is-flat="true">
      <g-input-number v-model="attr.x" inline />
      <g-input-number v-model="attr.y" inline />
    </g-field>
    <g-field label="旋转角度" :is-flat="true">
      <g-input-number
        v-model="attr.deg"
        :min="0"
        :max="360"
        :step="1"
        inline
      />
      <el-checkbox-group v-model="filps" size="mini" @change="onFilpChange">
        <el-tooltip effect="blue" content="垂直翻转" :enterable="false">
          <el-checkbox-button label="v">
            <i class="v-icon-flip-v"></i>
          </el-checkbox-button>
        </el-tooltip>
        <el-tooltip effect="blue" content="水平翻转" :enterable="false">
          <el-checkbox-button label="h">
            <i class="v-icon-flip-h"></i>
          </el-checkbox-button>
        </el-tooltip>
      </el-checkbox-group>
    </g-field>
    <g-field label="透明度">
      <g-slider
        v-model="attr.opacity"
        :min="0"
        :max="1"
        :step="0.05"
      />
    </g-field>
    <g-field :level="2" label="应用3D变换">
      <el-switch v-model="attr.useTransform" />
    </g-field>
    <g-field-collapse v-if="attr.useTransform" label="3D变换">
      <g-field label="旋转" :level="2">
        <g-select v-model="transformValue" :data="transformTypes" />
      </g-field>
      <g-field v-show="transformValue == 'x'" label="度数" :level="2">
        <g-slider
          v-model="attr.transformX"
          :min="0"
          :max="90"
          :step="0.5"
        />
      </g-field>
      <g-field v-show="transformValue == 'y'" label="度数" :level="2">
        <g-slider
          v-model="attr.transformY"
          :min="0"
          :max="90"
          :step="0.5"
        />
      </g-field>
      <g-field v-show="transformValue == 'z'" label="度数" :level="2">
        <g-slider
          v-model="attr.transformZ"
          :min="0"
          :max="90"
          :step="0.5"
        />
      </g-field>
    </g-field-collapse>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref, onMounted, toRef } from 'vue'
import { ComponentAttr } from '@/components/datav-component'
import { transformTypes } from '@/data/select-options'

type filpType = 'v' | 'h';

export default defineComponent({
  name: 'BasicSetting',
  props: {
    attr: {
      type: Object as PropType<ComponentAttr>,
      required: true,
    },
  },
  setup(props) {
    const filps = ref<filpType[]>([])

    const onFilpChange = (keys: filpType[]) => {
      filps.value = [...keys]
      props.attr.filpV = keys.includes('v')
      props.attr.filpH = keys.includes('h')
    }

    onMounted(() => {
      if (props.attr.filpV) {
        filps.value.push('v')
      }

      if (props.attr.filpH) {
        filps.value.push('h')
      }
    })

    var transformValue = ref('y')

    return {
      filps,
      onFilpChange,
      transformTypes,
      transformValue,
    }
  },
})
</script>

<style lang="scss" scoped>
.basic-setting-wp {
  user-select: none;
}
</style>
