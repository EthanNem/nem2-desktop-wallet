<template>
  <div class="harvesting-header-container">
    <div class="hash-header">
      <span>收益区块哈希</span>
    </div>
    <div class="height-header">
      <span>区块高度</span>
    </div>
    <div class="amount-header">
      <span>收益数量</span>
    </div>
    <div class="time-header">
      <span>区块时间</span>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class HarvestingListHeader extends Vue {}
</script>

<style scoped lang="less">
@import "./HarvestingListHeader.less";
</style>
