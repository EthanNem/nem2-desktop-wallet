import {Vue, Component} from 'vue-property-decorator'
// @ts-ignore
import RightTipDisplay from '@/components/RightTipDisplay/RightTipDisplay.vue'

@Component({
  components: {
    RightTipDisplay,
  },
})
export default class VerifyMnemonicTs extends Vue {
  tipContents: string[] = [
    '助记词如果备份错误，将可能不能找回，请认真核对单词和顺序.',
  ]
}
