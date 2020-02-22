import {Vue, Component} from 'vue-property-decorator'
// @ts-ignore
import ProgressDisplay from '@/components/ProgressDisplay/ProgressDisplay.vue'

@Component({
  components: {
    ProgressDisplay,
  },
})
export default class GenerateMnemonicTs extends Vue {
  value: number = 0
  addValue() {
    if (this.value === 100) {
      return setTimeout(this.submit, 500)
    }
    this.value ++
  }

  submit() {
    this.$router.push({name: 'accounts.creation.backupMnemonic'})
  }
}
