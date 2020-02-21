<template>
  <div class="verify-mnemonic-page-wrapper">
    <MnemonicVerification :words="mnemonicWordsList" />
  </div>
</template>

<script>
import VerifyMnemonicTs from "./VerifyMnemonicTs";
export default class VerifyMnemonic extends VerifyMnemonicTs {}
</script>
