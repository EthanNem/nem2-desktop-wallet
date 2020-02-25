<template>
  <div class="verification-mnemonic-wrapper" @keyup.enter="processVerification()">
    <div class="mnemonic-word-box clear scroll">
      <MnemonicTag
        v-for="(word, index) in selectedWords" :key="index" :closable="true"
        :tag-name="word"
        @on-close="removeWord(word)"
      />
    </div>
    <div class="word-div clear">
      <MnemonicTag
        v-for="(word, index) in shuffledWords" :key="index" :closable="false"
        :tag-name="word"
        :toggle-active="true"
        :is-selected="selectedWords.includes(word)"
        @click="addWord(word)"
      />
    </div>
    <!-- <div class="button-container">
      <button
        type="button"
        class="button-style back-button" 
        @click="$emit('cancelled')"
      >
        {{ $t('previous') }}
      </button>
      <button
        type="submit"
        class="button-style validation-button" 
        @click="processVerification()"
      >
        {{ $t('next') }}
      </button> 
    </div> -->
  </div>
</template>

<script lang="ts">
import {MnemonicVerificationTs} from './MnemonicVerificationTs'
import './MnemonicVerification.less'
export default class MnemonicVerification extends MnemonicVerificationTs {}
</script>
