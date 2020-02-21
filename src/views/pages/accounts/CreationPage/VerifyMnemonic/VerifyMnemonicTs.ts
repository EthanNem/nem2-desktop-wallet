import { Vue, Component } from 'vue-property-decorator'
// child components
// @ts-ignore
import MnemonicVerification from '@/components/MnemonicVerification/MnemonicVerification.vue'

@Component({
    components: {
        MnemonicVerification,
    }
})
export default class VerifyMnemonicTs extends Vue {
    mnemonicWordsList = ['qasw','hello','word']
}
