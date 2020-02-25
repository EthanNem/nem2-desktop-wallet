import {Vue, Component} from 'vue-property-decorator'
//@ts-ignore
import SelectAccountTable from '@/components/SelectAccountTable/SelectAccountTable.vue'
//@ts-ignore
import TableTitle from '@/components/TableTitle/TableTitle.vue'
// @ts-ignore
import ButtonStep from '@/components/ButtonStep/ButtonStep.vue'

@Component({
    components: {SelectAccountTable,TableTitle,ButtonStep},
})
export default class GenerateWalletTs extends Vue {

}
