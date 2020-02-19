<template>
  <div class="transfer-container secondary_page_animate">
        <Tabs value="name1">
        <TabPane label="普通转账" name="name1"></TabPane>
        <TabPane label="多钱转账" name="name2"></TabPane>
        <TabPane label="聚合转账" name="name3"></TabPane>
    </Tabs>
    <!-- <div class="left-container scroll">
      <FormTransferTransaction />
    </div> -->

    <!-- <div class="right-container">
      CollectionRecord component -->
      <!--
      <CollectionRecord :transaction-type="transferType.SENT" />
      -->
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
// @ts-ignore
import {DashboardTransferPageTs} from './DashboardTransferPageTs'
import './DashboardTransferPage.less'

export default class DashboardTransferPage extends DashboardTransferPageTs {}
</script>
