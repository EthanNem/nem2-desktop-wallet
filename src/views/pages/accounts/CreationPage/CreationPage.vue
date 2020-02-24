<template>
  <div class="create-page-wrapper">
    <div class="step-box-container">
      <StepBar :current-step="parseInt($route.meta.extension, 10)" />
    </div>
    <div class="page-detail-container">
      <div v-if="$route.meta.title.length !== 0" class="page-content-title">{{ $route.meta.title }}</div>
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

