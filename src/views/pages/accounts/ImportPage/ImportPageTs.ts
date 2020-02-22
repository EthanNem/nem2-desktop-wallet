import {Vue, Component} from 'vue-property-decorator'
// @ts-ignore
import StepBar from '@/components/StepBar/StepBar.vue'

@Component({
  components: {
    StepBar,
  },
})
export default class ImportPageTs extends Vue {
  stepList = [
    {
      index: 1,
      text: '导入助记词',
      isChild: false,
    },
    {
      index: 2,
      text: '设置账户',
      isChild: false,
    },
    {
      index: 3,
      text: '导入钱包',
      isChild: false,
    },
  ]
}
