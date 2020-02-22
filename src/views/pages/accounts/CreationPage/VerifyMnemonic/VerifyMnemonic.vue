<template>
  <div class="verify-mnemonic-page-wrapper">
    <div class="verify-mnemonic-container" />
    <div class="right-tip-container">
      <RightTipDisplay 
        :tip-content="tipContents"
      />
    </div>
  </div>
</template>

<script>
import VerifyMnemonicTs from './VerifyMnemonicTs'
import './VerifyMnemonic.less'
export default class VerifyMnemonic extends VerifyMnemonicTs {

}
</script>
