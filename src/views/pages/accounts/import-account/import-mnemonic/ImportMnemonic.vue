<template>
  <div class="create-mnemonic-sec" @keyup.enter="submit">
    <p class="set-title">{{ $t('Input_mnemonic') }}</p>
    <div class="select-radio">
      <RadioGroup v-model="animal">
        <Radio label="12位助记词"></Radio>
        <Radio label="24位助记词"></Radio>
      </RadioGroup>
    </div>
    <div class="create-mnemonic-col">
      <div class="create-mnemonic-left">
        <textarea v-model="formItems.seed" class="show-mnemonic" />
        <div class="clear scroll">
          <draggable v-model="handledWords" ghost-class="ghost">
            <span v-for="(word, index) in handledWords" :key="index">
              <Tag closable>{{ word }}</Tag>
            </span>
          </draggable>
        </div>
        <p class="bottom-text">助记词HASH码：
          <span>NAN…</span>
        </p>
      </div>
      <div class="create-mnemonic-right">
        <p class="text">说明：</p>
        <p class="text">{{ $t('Input_mnemonic_tips') }}</p>
      </div>
    </div>
    <div class="footer">
      <ButtonStep>下一步</ButtonStep>
    </div>
  </div>
</template>

<script>
import ImportMnemonicTs from "./ImportMnemonicTs";
import "./ImportMnemonic.less";

export default class ImportMnemonic extends ImportMnemonicTs {}
</script>
