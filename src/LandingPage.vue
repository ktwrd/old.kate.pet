<template>
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <header-icon />
        <home />
        <a href="https://kate.pet" class="eightyeightthirtyone"><img src="https://kate.pet/button.gif" style="margin: 15px;" /></a>
        <div class="eightbuttons">
            <ul>
                <template v-for="(item, index) in eightButtons">
                    <li v-bind:key="`eightButton-${index}`">
                        <template v-if="item[1] != undefined">
                            <a :href="item[1]">
                                <img :src="item[0]" />
                            </a>
                        </template>
                        <template v-else>
                        <img :src="item[0]" />
                        </template>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>
<script>
import Home from './components/Home.vue'
import HeaderIcon from './components/HeaderIcon.vue'
export default {
    components: { Home, HeaderIcon },
    name: 'LandingPage',
    data () {
        return {
            eightButtons: [
                ['https://res.kate.pet/88x31/CGG_big.gif', 'https://kernel.org'],
                ['https://res.kate.pet/88x31/vscode.gif', 'https://code.visualstudio.com'],
                ['https://res.kate.pet/88x31/exopet_newbutton.gif', 'https://exo.pet'],
                ['https://res.kate.pet/88x31/emma.gif', 'https://heckscaper.com'],
                ['https://res.kate.pet/88x31/lapfoxgrad.gif', 'https://halleylabs.com'],
                ['https://res.kate.pet/88x31/niku.png', 'https://nikutrax.neocities.org'],
                ['https://res.kate.pet/88x31/pride.gif'],
                ['https://res.kate.pet/88x31/sanya.png', 'https://sanya.gay'],
                ['https://res.kate.pet/88x31/flag-trans.png'],
                ['https://res.kate.pet/88x31/flag-pan.png'],
                ['https://res.kate.pet/88x31/roly-saynotoweb3.gif', 'https://yesterweb.org/no-to-web3/'],
                ['https://res.kate.pet/88x31/sauce-orangetext.png', 'https://developer.valvesoftware.com/wiki/Source'],
                ['https://res.kate.pet/88x31/cyberdog.gif'],
                ['https://res.kate.pet/88x31/casey.png', 'https://caseys-corner.neocities.org'],
                ['https://res.kate.pet/88x31/therian.png', 'https://otherkin.fandom.com/wiki/Therians'],
                ['https://88x31.kate.pet/rotteen.gif'],
                ['https://88x31.kate.pet/redhat.gif']
            ]
        };
    }
}
</script>
<style>
.eightbuttons {
    position: absolute;
    bottom: calc(31px);
    left: 0;
    width: 100vw;
    text-align: center;
}
.eightbuttons * img {
    height: 31px;
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
    max-width: 80vw;
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
