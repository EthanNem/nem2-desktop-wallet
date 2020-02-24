<template>
  <div class="create-page-wrapper">
    <div class="step-box-container">
      <StepBar :current-step="parseInt($route.meta.extension, 10)" />
    </div>
    <div class="page-detail-container">
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
import CreationPageTs from "./CreationPageTs";
import "./CreationPage.less";
export default class CreationPage extends CreationPageTs {}
</script>

