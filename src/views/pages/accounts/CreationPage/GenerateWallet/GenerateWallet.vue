<template>
  <div>
    <div class="generate-wallet-page-wrapper">
      <div class="import-wallet">
        <div class="select-network">
          <div class="title">区块链网络:</div>
          <input type="text" placeholder="symbol" />
        </div>
        <div class="select-network">
          <div class="title">网络类型:</div>
          <Select name class>
            <Option>TEXT-NET</Option>
          </Select>
        </div>
      </div>
      <TableTitle>选择钱包列表</TableTitle>
      <div class="blank" />
      <SelectAccountTable />
    </div>
    <div class="button-container">
      <ButtonStep @click="$router.go(-1)">上一步</ButtonStep>
      <ButtonStep :primary="true" @click="$router.push({name: $route.meta.nextPage})">下一步</ButtonStep>
    </div>
  </div>
</template>

<script>
import GenerateWalletTs from "./GenerateWalletTs";
import "./GenerateWallet.less";
export default class GenerateWallet extends GenerateWalletTs {}
</script>
