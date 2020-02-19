<template>
  <div class="harvesting-container secondary_page_animate">
    <div class="top-container">
      <div class="left-container">
        <div class="top-title">
          <span></span>
          <span class="title-large">最新累积收益</span>
          <span class="title-min">/100Blocks</span>
        </div>
        <div class="bottom-amount">
          <span class="amount-large">0.00</span>
          <span class="amount-min">xym</span>
        </div>
        <div class="top-title">
          <span></span>
          <span class="title-large">最新平均收益</span>
          <span class="title-min">/100Blocks</span>
        </div>
        <div class="bottom-amount">
          <span class="amount-large">0.00</span>
          <span class="amount-min">xym</span>
        </div>
      </div>
      <div class="right-container">
        <div class="first-box box">
          <div class="top-title-box">
            <span>1</span>
            <span>代理账户绑定</span>
          </div>
          <div class="icon-right">
            <Icon type="ios-arrow-forward" size="24" />
          </div>
          <div class="bottom-title-box">未绑定</div>
        </div>
        <div class="second-box box">
          <div class="top-title-box">
            <span>2</span>
            <span>远程节点设置</span>
          </div>
          <div class="icon-right">
            <Icon type="ios-arrow-forward" size="24" />
          </div>
          <div class="bottom-title-box">未设置</div>
        </div>
        <div class="third-box box">
          <div class="top-title-box">
            <span>3</span>
            <span>发起委托请求</span>
          </div>
          <div class="icon-right">
            <Icon type="ios-arrow-forward" size="24" />
          </div>
          <div class="bottom-title-box">未请求</div>
        </div>
        <div class="fourth-box box">
          <div class="top-title-box">
            <!-- <span>4 </span> -->
            <span>收益状态显示</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-container">
      <p>最新收益列表</p>
      <HarvestingTable />
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import { DashboardHarvestingPageTs } from "./DashboardHarvestingPageTs";
import "./DashboardHarvestingPage.less";

export default class DashboardHarvestingPage extends DashboardHarvestingPageTs {}
</script>
