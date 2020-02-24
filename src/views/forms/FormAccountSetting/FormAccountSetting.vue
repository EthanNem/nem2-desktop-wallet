<template>
  <div class="form-account-setting">
    <div class="title">
      {{ $t('Set_account_password') }}
    </div>
    <div class="form-value">
      <FormWrapper>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @keyup.enter="handleSubmit(submit)">
            <div class="form-row">
              <div class="label">
                <FormLabel>{{ $t('Set_seed_hash') }}</FormLabel>
              </div>
              <div class="value">
                <div class="full-width-item-container">
                  <p
                    class="input-size">
                    C6DAFB1CDDF22089C76E7130DB7B2919B9AD3AEF1CEEE44C2ABCF1252B4458D6
                  </p>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="label">
                <FormLabel>{{ $t('Set_account_name') }}</FormLabel>
              </div>
              <div class="value">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="newAccountName"
                  :name="$t('newAccountName')"
                  :rules="validationRules.newAccountName"
                  tag="div"
                  class="inline-container"
                >
                  <ErrorTooltip :errors="errors">
                    <div class="full-width-item-container">
                      <input
                        v-model="formItems.accountName"
                        v-focus
                        class="full-width-item-container input-size input-style"
                        :placeholder="$t('account_name')"
                      >
                    </div>
                  </ErrorTooltip>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-row">
              <div class="label">
                <FormLabel>{{ $t('Set_password') }}</FormLabel>
              </div>
              <div class="value">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="newPassword"
                  mode="lazy"
                  :name="$t('password')"
                  :rules="validationRules.password"
                  tag="div"
                  class="inline-container"
                >
                  <ErrorTooltip :errors="errors">
                    <div class="full-width-item-container">
                      <input
                        ref="passwordInput"
                        v-model="formItems.password"
                        class="full-width-item-container input-size input-style"
                        :placeholder="$t('please_enter_your_wallet_password')"
                        type="password"
                      >
                    </div>
                  </ErrorTooltip>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-row">
              <div class="label">
                <FormLabel>{{ $t('Set_repeat_password') }}</FormLabel>
              </div>
              <div class="value">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="confirmPassword"
                  :name="$t('confirmPassword')"
                  :rules="validationRules.confirmPassword"
                  tag="div"
                  class="inline-container"
                >
                  <ErrorTooltip :errors="errors">
                    <div class="full-width-item-container">
                      <input
                        v-model="formItems.passwordAgain"
                        class="full-width-item-container input-size input-style"
                        data-vv-name="confirmPassword"
                        :placeholder="$t('please_enter_your_new_password_again')"
                        type="password"
                      >
                    </div>
                  </ErrorTooltip>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-row">
              <div class="label">
                <FormLabel>{{ $t('Set_password_hint') }}</FormLabel>
              </div>
              <div class="value">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="hint"
                  :name="$t('hint')"
                  :rules="validationRules.message"
                  tag="div"
                  class="inline-container"
                >
                  <ErrorTooltip :errors="errors">
                    <div class="full-width-item-container">
                      <input
                        v-model="formItems.hint"
                        class="full-width-item-container input-size input-style"
                      >
                    </div>
                  </ErrorTooltip>
                </ValidationProvider>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </FormWrapper>
    </div>
  </div>
</template>

<script lang="ts">
import {FormAccountSettingTs} from './FormAccountSettingTs'
export default class FormAccountSetting extends FormAccountSettingTs {}
</script>

<style lang="less" scoped>
@import "../../../views/resources/css/variables.less";
.form-account-setting{
  .title{
      font-size: 24px;
      color: #999999;
      margin-bottom: 18px;
  }
  .form-value{
    margin-left: 100px;
  }
}
</style>
