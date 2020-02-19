<template>
  <div class="harvesting-table-container">
    <HarvestingListHeader />
    <div></div>
    <div class="page-container">
        <Page :total="1" class="page-ontent" />
    </div>
  </div>
</template>

<script lang="ts">
// external dependenies
import { Component, Vue, Prop } from 'vue-property-decorator'

// child components
import HarvestingListHeader from '@/components/HarvestingTable/HarvestingListHeader/HarvestingListHeader.vue'

@Component({
  components: {
    HarvestingListHeader,
  },
})
export default class HarvestingTable extends Vue {
}
</script>

<style lang="less">
@import "./HarvestingTable.less";
</style>
