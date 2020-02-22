import {Vue, Component} from 'vue-property-decorator'
// @ts-ignore
import RightTipDisplay from '@/components/RightTipDisplay/RightTipDisplay.vue'

@Component({
  components: {
    RightTipDisplay,
  },
})
export default class AccountInfoTs extends Vue {
  tipContents: string[] = [
    '设置密码用于加密当前助记词，此密码的复杂性影响助记词的安全',
    '同时，本密码将不会在任何地方存储，不可找回，请务必妥善设置和保管',
  ]
}
