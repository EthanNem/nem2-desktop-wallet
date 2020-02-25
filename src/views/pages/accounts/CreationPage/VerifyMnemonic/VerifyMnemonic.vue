<template>
  <div>
    <div class="verify-mnemonic-page-wrapper">
      <span @click="$router.push({name: $route.meta.nextPage})">跳过</span>
      <div class="verify-mnemonic-container">
        <MnemonicVerification
          :words="mnemonicWords"
          @success="$router.push({name: 'accounts.creation.accountInfo'})"
          @cancelled="$router.back()"
        />
      </div>
      <div class="right-tip-container">
        <RightTipDisplay :tip-content="tipContents" />
      </div>
    </div>
    <div class="button-container">
      <ButtonStep @click="$router.go(-1)">上一步</ButtonStep>
      <ButtonStep :primary="true" @click="$router.push({name: $route.meta.nextPage})">下一步</ButtonStep>
    </div>
  </div>
</template>

<script>
import VerifyMnemonicTs from "./VerifyMnemonicTs";
import "./VerifyMnemonic.less";
export default class VerifyMnemonic extends VerifyMnemonicTs {}
</script>
