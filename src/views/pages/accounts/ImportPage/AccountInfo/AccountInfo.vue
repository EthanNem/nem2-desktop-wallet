<template>
  <div class="account-info-page-wrapper">
    <div class="account-info-container">
      <FormAccountSetting />
    </div>
    <div class="right-tip-container">
      <RightTipDisplay 
        :tip-content="tipContents"
      />
    </div>
    <button
      type="button"
      class="button-style back-button" 
      @click="$router.push({name: 'accounts.login'})"
    >
      {{ $t('Previous_step') }}
    </button>
    <button
      type="submit"
      class="button-style validation-button" 
      @click="handleSubmit(submit)"
    >
      {{ $t('next') }}
    </button>
  </div>
</template>

<script>
import AccountInfoTs from './AccountInfoTs'
import './AccountInfo.less'
export default class AccountInfo extends AccountInfoTs {

}
</script>
