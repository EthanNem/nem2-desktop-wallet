import {Vue, Component} from 'vue-property-decorator'
// @ts-ignore
import RightTipDisplay from '@/components/RightTipDisplay/RightTipDisplay.vue'

@Component({
  components: {
    RightTipDisplay,
  },
})
export default class BackupMnemonicTs extends Vue {
  tipContents: string[] = [
    '请不要透露你备份的记助词，任何人有了记助词，将可以彻底掌控其下的钱包资产',
    '请将你的记助词离线写在纸上并做多份保存，或者离线的加密磁盘和存储介质等',
  ]
}
