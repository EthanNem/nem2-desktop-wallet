<template>
  <div class="generate-wallet-page-wrapper">
    <p>导入钱包</p>
    <div class="import-wallet">
      <div class="select-network">
        <div class="title">区块链网络:</div>
        <input type="text" />
      </div>
      <div class="select-network">
        <div class="title">网络类型:</div>
        <Select name class>
          <Option>TEXT-NET</Option>
        </Select>
      </div>
    </div>
    <TableTitle>选择钱包列表</TableTitle>
    <SelectAccountTable></SelectAccountTable>
  </div>
</template>

<script>
import GenerateWalletTs from "./GenerateWalletTs";
export default class GenerateWallet extends GenerateWalletTs {}
</script>
