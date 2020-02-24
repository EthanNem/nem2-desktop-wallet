<template>
  <div class="import-page-wrapper">
    <div class="step-box-container">
      <StepBar :step-list="stepList" :current-step="parseInt($route.meta.title, 10)" />
    </div>
    <div class="page-detail-container">
      <div v-if="$route.meta.title.length !== 0" class="page-content-title">{{ $route.meta.title }}</div>
      <!--<div class="page-content-title">
        验证备份的助记词
      </div>-->
      <div v-if="$route.meta.title.length !== 0" class="page-content-title">{{ $route.meta.title }}</div>
      <div class="import-wallet">
        <!-- <p>导入钱包</p> -->
        <div class="select-network">
          <div class="title">区块链网络:</div>
          <input type="text" />
        </div>
        <div class="select-network">
          <div class="title">网络类型:</div>
          <Select name class>
            <Option>TEXT-NET</Option>
          </Select>
        </div>
      </div>
      <router-view />
    </div>
    <div class="button-container">
      <ButtonStep>上一步</ButtonStep>
      <ButtonStep>下一步</ButtonStep>
    </div>
  </div>
</template>

<script lang="ts">
import ImportPageTs from "./ImportPageTs";
import "./ImportPage.less";
export default class ImportPage extends ImportPageTs {}
</script>

