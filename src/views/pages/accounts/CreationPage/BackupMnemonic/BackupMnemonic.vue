<template>
  <div class="backup-mnemonic-page-wrapper">
    <div class="backup-mnemonic-container" />
    <div class="right-tip-container">
      <RightTipDisplay 
        :tip-content="tipContents"
      />
    </div>
  </div>
</template>

<script>
import BackupMnemonicTs from './BackupMnemonicTs'
import './BackupMnemonic.less'
export default class BackupMnemonic extends BackupMnemonicTs {

}
</script>
