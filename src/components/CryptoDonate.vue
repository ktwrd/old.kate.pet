<template>
    <div>
        <div class="wallet container">
            <template v-for="wallet in wallets">
                <div class="walletObject" v-bind:key="wallet">
                    <img 
                        :src="`https://res.kate.pet/img/crypto-${wallet.type}.png`" 
                        class="wallet currency icon"
                        />
                    <span 
                        class="wallet currency label"
                        >
                        {{ wallet.type.toUpperCase() }}
                    </span>
                    <span 
                        class="wallet address"
                        >
                        <code>
                            {{ wallet.address }}
                        </code>
                    </span>
                </div> 
            </template>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
import { defineComponent } from '@vue/composition-api'

export default {
    name: 'CryptoDonate',
    data () {
        return {
            wallets: [
                {
                    type: 'etc',
                    address: '0xF3a95249b82A647c605c58CAE1825c29F89C3679'
                },
                {
                    type: 'eth',
                    address: '',
                },
                {
                    type: 'xmr',
                    address: ''
                },
                {
                    type: 'eth',
                    address: ''
                },
                {
                    
                }
            ]
        }
    }
}
</script>
