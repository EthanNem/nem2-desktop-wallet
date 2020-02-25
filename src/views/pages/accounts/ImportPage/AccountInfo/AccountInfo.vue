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
    <div class="button-container">
      <ButtonStep @click="$router.go(-1)">上一步</ButtonStep>
      <ButtonStep :primary="true" @click="$router.push({name: $route.meta.nextPage})">下一步</ButtonStep>
    </div>
    <!-- <button
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
    </button> -->
  </div>
</template>

<script>
import AccountInfoTs from './AccountInfoTs'
import './AccountInfo.less'
export default class AccountInfo extends AccountInfoTs {

}
</script>
