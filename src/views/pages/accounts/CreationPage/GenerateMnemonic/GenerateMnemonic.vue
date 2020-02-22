<template>
  <div class="generate-mnemonic-page-wrapper">
    <div class="progress-container" @mouseover="addValue">
      <ProgressDisplay :value="value" />
    </div>
  </div>
</template>

<script>
import GenerateMnemonicTs from './GenerateMnemonicTs'
import './GenerateMnemonic.less'
export default class GenerateMnemonic extends GenerateMnemonicTs {

}
</script>
