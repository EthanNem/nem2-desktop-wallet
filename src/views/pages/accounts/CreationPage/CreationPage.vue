<template>
  <div class="create-page-wrapper">
    <div class="step-box-container">
      <StepBar :current-step="parseInt($route.meta.title, 10)" />
    </div>
    <div class="page-detail-container">
      <router-view />
    </div>
    <div class="button-container">
      <span>btn1</span>
      <span>btn2</span>
    </div>
  </div>
</template>

<script lang="ts">
import CreationPageTs from './CreationPageTs'
import './CreationPage.less'
export default class CreationPage extends CreationPageTs {}
</script>

