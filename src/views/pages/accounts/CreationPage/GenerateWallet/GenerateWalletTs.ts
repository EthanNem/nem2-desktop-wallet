import {Vue, Component} from 'vue-property-decorator'
//@ts-ignore
import SelectAccountTable from '@/components/SelectAccountTable/SelectAccountTable.vue'
//@ts-ignore
import TableTitle from '@/components/TableTitle/TableTitle.vue'

@Component({
    components: {TableTitle,SelectAccountTable}
})
export default class GenerateWalletTs extends Vue {

}