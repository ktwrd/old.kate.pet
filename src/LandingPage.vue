<template>
    <div>
        <template v-if="$route.name == 'blank'">
            <header-icon />
        </template>
        <home ref="home" />
        <template v-if="$route.name == 'blank' && showeight">
            <a href="https://kate.pet" class="eightyeightthirtyone"><img src="https://kate.pet/button.gif" style="margin: 15px;" /></a>
            <div class="eightbuttons">
                <ul>
                    <template v-for="(item, index) in eightButtons">
                        <li v-bind:key="`eightButton-${index}`">
                            <template v-if="item[1] != undefined">
                                <a :href="item[1]">
                                    <img :src="item[0]" height="31"/>
                                </a>
                            </template>
                            <template v-else>
                            <img :src="item[0]" />
                            </template>
                        </li>
                    </template>
                </ul>
            </div>
        </template>
    </div>
</template>
<script>
import Home from './components/Home.vue'
import HeaderIcon from './components/HeaderIcon.vue'
import * as UserConfig from './userConfig'
export default {
    components: { Home, HeaderIcon },
    name: 'LandingPage',
    data () {
        console.log(this.$route)
        return {
            showeight: !UserConfig.getBoolean('hide88Button'),
            eightButtons: [
                ['https://res.kate.pet/88x31/casey.png', 'https://casey.pet'],
                ['https://res.kate.pet/88x31/emma.gif', 'https://heckscaper.com'],
                ['https://res.kate.pet/88x31/exopet_newbutton.gif', 'https://exo.pet'],
                ['https://res.kate.pet/88x31/lapfoxgrad.gif', 'https://halleylabs.com'],
                ['https://res.kate.pet/88x31/niku.png', 'https://nikutrax.neocities.org'],
                ['https://88x31.kate.pet/niv-banner.gif', 'https://niv.gay/'],
                ['https://res.kate.pet/88x31/sanya.png', 'https://sanya.gay'],
                ['https://res.kate.pet/88x31/flag-trans.png'],
                ['https://res.kate.pet/88x31/flag-pan.png'],
                ['https://res.kate.pet/88x31/roly-saynotoweb3.gif', 'https://yesterweb.org/no-to-web3/'],
                ['https://res.kate.pet/88x31/therian.png', 'https://otherkin.fandom.com/wiki/Therians'],
                ['https://88x31.kate.pet/redhat.gif'],
                ['https://res.kate.pet/88x31/CGG_big.gif', 'https://kernel.org'],
                ['https://res.kate.pet/88x31/vscode.gif', 'https://code.visualstudio.com']
            ]
        };
    },
    watch: {
        $route () {
            this.$set(this.$data, 'showeight', !UserConfig.getBoolean('hide88Button'))
        }
    }
}
</script>
<style>
.eightbuttons {
    position: absolute;
    bottom: calc(15px);
    left: 0;
    width: 100vw;
    text-align: center;
}
.eightbuttons * img {
    height: min(31px, 4vh);
}
.eightbuttons ul,
.eightbuttons ul li {
    display: inline;
    margin: none;
    padding: 0;
    list-style: none;
}
.eightbuttons ul {
    display: inline-block;
    max-width: 90vw;
    margin-bottom: 0.1rem;
}

.eightyeightthirtyone,
.eightyeightthirtyone img,
.eightbuttons ul li a img,
.eightbuttons ul li img {
    transition: 100ms;
}
.eightyeightthirtyone:hover,
.eightyeightthirtyone img:hover,
.eightbuttons ul li a img:hover,
.eightbuttons ul li img:hover {
    position: relative;
    transform: scale(2);
    transition: 100ms;
}
</style>
