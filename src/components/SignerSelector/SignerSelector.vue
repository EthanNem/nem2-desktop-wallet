<template>
  <div class="form-line-container">
    <FormLabel class="sender">FROM</FormLabel>
    <div class="inline-container">
      <div class="full-width-item-container select-background">
        <Select
          v-model="chosenSigner"
          :placeholder="$t('publicKey')"
          class="select-size select-style"
        >
          <Option
            v-for="item in signers"
            :key="item.publicKey"
            :value="item.publicKey"
          >
            {{ item.label }}
          </Option>
        </Select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SignerSelectorTs } from './SignerSelectorTs'
export default class SignerSelector extends SignerSelectorTs {}
</script>
