<template>
  <div class="account-info-page-wrapper">
    <div class="account-info-container" />
    <div class="right-tip-container">
      <RightTipDisplay 
        :tip-content="tipContents"
      />
    </div>
  </div>
</template>

<script>
import AccountInfoTs from './AccountInfoTs'
import './AccountInfo.less'
export default class AccountInfo extends AccountInfoTs {

}
</script>
