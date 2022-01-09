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
                    address: '0xB02b4bC73624efE066Cff74128E54a01933660ff',
                },
                {
                    type: 'xmr',
                    address: '4AedSHZZuuoFVmyyqgPGPSTpQWyZ8RvHSQKcRY7AowiDcx8sWqbvBi4ZqjtXzDywMT5B3vjE5jDN2U2mURp4RXTe6ad4FkY'
                },
                {
                    type: 'btc',
                    address: 'bc1qw5jj93fj5p5p3v54h83cs5qudlyvp896sf25pr'
                },
                {
                    type: 'rvn',
                    address: 'RT1mE2dH4zDEXt8Pm1q3tKYWZDfKFckXvz'
                },
                {
                    type: 'doge',
                    address: 'DG2XPh9w5xFXTwnTzevuN6xfUi7wPMsqFk'
                },
                {
                    type: 'usdc',
                    address: '0xB02b4bC73624efE066Cff74128E54a01933660ff'
                },
                {
                    type: 'usdt',
                    address: '0xB02b4bC73624efE066Cff74128E54a01933660ff'
                }
            ]
        }
    }
}
</script>
