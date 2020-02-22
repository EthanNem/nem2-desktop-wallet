<template>
  <div class="create-mnemonic-wrapper">
    <div class="create-mnemonic-left">
      <textarea class="show-mnemonic" />
      <div class="clear scroll">
        <draggable>
          <span>
            <!-- <Tag closable></Tag> -->
          </span>
        </draggable>
      </div>
      <p class="bottom-text">
        助记词HASH码：
        <span>NAN…</span>
      </p>
    </div>
    <div class="create-mnemonic-right">
      <p class="text">说明：</p>
      <p class="text">{{ $t('Input_mnemonic_tips') }}</p>
    </div>
  </div>
</template>

<script>
import ImportMnemonicTs from "./ImportMnemonicTs";
import "./ImportMnemonic.less";
export default class ImportMnemonic extends ImportMnemonicTs {}
</script>
