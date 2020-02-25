<template>
  <div>
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
      <ButtonStep @click="$router.go(-1)">
        上一步
      </ButtonStep>
      <ButtonStep :primary="true" @click="$router.push({name: $route.meta.nextPage})">
        下一步
      </ButtonStep>
    </div>
    </div>
    <div class="button-container">
      <ButtonStep @click="$router.go(-1)">
        上一步
      </ButtonStep>
      <ButtonStep :primary="true" @click="$router.push({name: $route.meta.nextPage})">
        下一步
      </ButtonStep>
    </div>
  </div>
</template>

<script>
import AccountInfoTs from './AccountInfoTs'
import './AccountInfo.less'
export default class AccountInfo extends AccountInfoTs {

}
</script>
