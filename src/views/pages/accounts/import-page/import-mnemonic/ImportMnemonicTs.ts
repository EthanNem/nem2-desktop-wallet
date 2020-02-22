import {Vue, Component} from 'vue-property-decorator'
//child component
//@ts-ignore
import ImportMnemonic from '@/components/ImportMnemonic/ImportMnemonic.vue'

@Component({
    components: {ImportMnemonic}
})
export default class ImportMnemonicTs extends Vue {

}
