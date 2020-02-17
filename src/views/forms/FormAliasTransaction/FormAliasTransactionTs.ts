/**
 * Copyright 2020 NEM Foundation (https://nem.io)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  TransactionType, AliasTransaction, NamespaceId, MosaicId, Address, AliasAction, AliasType,
  AddressAliasTransaction, MosaicAliasTransaction, MosaicInfo, NamespaceInfo, UInt64,
} from 'nem2-sdk'
import {Component, Prop} from 'vue-property-decorator'
import {mapGetters} from 'vuex'

// internal dependencies
import {ValidationRuleset} from '@/core/validation/ValidationRuleset'

// child components
import {ValidationProvider} from 'vee-validate'
// @ts-ignore
import FormWrapper from '@/components/FormWrapper/FormWrapper.vue'
// @ts-ignore
import ErrorTooltip from '@/components/ErrorTooltip/ErrorTooltip.vue'
import {FormTransactionBase} from '../FormTransactionBase/FormTransactionBase'
import {TransactionFactory} from '@/core/transactions/TransactionFactory'
import {ViewAliasTransaction} from '@/core/transactions/ViewAliasTransaction'

@Component({
  components: {
    ValidationProvider,
    FormWrapper,
    ErrorTooltip,
  },
  computed: {...mapGetters({
    currentWalletOwnedNamespaces: 'wallet/currentWalletOwnedNamespaces', 
    currentWalletOwnedMosaics: 'wallet/currentWalletOwnedMosaics',
    mosaicsNamesByHex: 'mosaic/mosaicsNamesByHex',
  })},
})
export class FormAliasTransactionTs extends FormTransactionBase {
  @Prop({ default: null }) namespaceId: NamespaceId
  @Prop({ default: null }) aliasTarget: MosaicId | Address
  @Prop({ default: null }) aliasAction: AliasAction
  @Prop({ default: false }) disableSubmit: boolean

  /**
   * Alias action
   * @type {AliasAction[]}
   * @protected
   */
  protected AliasAction = AliasAction

  /**
   * Validation rules
   * @var {ValidationRuleset}
   */
  protected validationRules = ValidationRuleset

  /**
   * Form items
   * @var {any}
   */
  protected formItems = {
    namespaceHexId: null,
    aliasTarget: null,
    aliasAction: null,
    maxFee: 0,
  }

  /**
   * Alias target type
   * @protected
   * @type {('mosaic' | 'address')}
   */
  protected aliasTargetType: 'mosaic' | 'address' = this.aliasTarget instanceof Address ? 'address' : 'mosaic'

  /**
   * Current wallet owned namespaces
   * @private
   * @type {NamespaceInfo[]}
   */
  private ownedNamespaces: NamespaceInfo[]

  /**
   * Current wallet owned mosaics
   * @private
   * @type {MosaicInfo[]}
   */
  private ownedMosaics: MosaicInfo[]

  /**
   * Mosaics names by hex
   * @private
   * @type {Record<string, string>}
   */
  private mosaicsNamesByHex: Record<string, string>

  /**
   * Current wallet namespace hex Ids that can be linked
   * @readonly
   * @protected
   * @type {string []}
   */
  protected get linkableNamespaceIds(): string[] {
    return this.ownedNamespaces
      .filter(({alias}) => alias && alias.type !== AliasType.Address)
      .map(({id}) => id.toHex())
  }
  
  /**
   * Current wallet mosaics hex Ids that can be linked
   * @readonly
   * @protected
   * @type {MosaicId[]}
   */
  protected get linkableMosaicIds(): string[] {
    return this.ownedMosaics
      .filter(({id}) => this.mosaicsNamesByHex[id.toHex()] === undefined)
      .map(({id}) => id.toHex())
  }

  /**
   * Reset the form with properties
   * @return {void}
   */
  protected resetForm() {
    // - re-populate form if transaction staged
    if (this.stagedTransactions.length) {
      const transaction = this.stagedTransactions.find(
        staged => staged.type === TransactionType.MOSAIC_ALIAS || staged.type === TransactionType.ADDRESS_ALIAS,
      )
      this.setTransactions([transaction as AliasTransaction])
      this.isAwaitingSignature = true
      return
    }

    // - set default form values
    this.formItems.namespaceHexId = this.namespaceId
    this.formItems.aliasTarget = this.aliasTarget
    this.formItems.aliasAction = this.aliasAction

    // - maxFee must be absolute
    this.formItems.maxFee = this.defaultFee
  }

  /**
   * Getter for ALIAS transactions that will be staged
   * @see {FormTransactionBase}
   * @return {AliasTransaction[]}
   */
  protected getTransactions(): AliasTransaction[] {
    this.factory = new TransactionFactory(this.$store)
    try {
      // - prepare transaction parameters
      let view = new ViewAliasTransaction(this.$store)

      // instantiate the alias target
      const instantiatedAliasTarget = this.aliasTargetType === 'address'
        ? Address.createFromRawAddress(this.formItems.aliasTarget)
        : new MosaicId(this.formItems.aliasTarget)

      view = view.parse({
        namespaceId: new NamespaceId(this.formItems.namespaceHexId),
        aliasTarget: instantiatedAliasTarget,
        aliasAction: this.formItems.aliasAction,
        maxFee: UInt64.fromUint(this.formItems.maxFee),
      })
      
      // - prepare transfer transaction
      return [this.factory.build(view)]
    } catch (error) {
      console.error('Error happened in FormTransferTransaction.transactions(): ', error)
    }
  }

  /**
   * Setter for Alias transactions that will be staged
   * @see {FormTransactionBase}
   * @param {AliasTransaction[]} transactions
   * @throws {Error} If not overloaded in derivate component
   */
  protected setTransactions(transactions: AliasTransaction[]) {
    // - this form creates only 1 transaction
    const transaction = transactions.shift()

    // - populate for items if transaction is an address alias
    if (transaction instanceof AddressAliasTransaction) {
      this.formItems.namespaceHexId = transaction.namespaceId
      this.formItems.aliasTarget = transaction.address
      this.formItems.aliasAction = transaction.aliasAction
    }

    // - populate for items if transaction is an mosaic alias
    if (transaction instanceof MosaicAliasTransaction) {
      this.formItems.namespaceHexId = transaction.namespaceId
      this.formItems.aliasTarget = transaction.namespaceId
      this.formItems.aliasAction = transaction.aliasAction
    }
    
    // - populate maxFee
    this.formItems.maxFee = transaction.maxFee.compact()
  }
}
