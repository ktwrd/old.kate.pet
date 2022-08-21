<template>
    <div id="app">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <header-icon />
        <router-view/>
        <a href="https://kate.pet"><img src="https://kate.pet/button.gif" style="margin: 15px;" /></a>
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
import HeaderIcon from './components/HeaderIcon.vue';
export default {
    components: { HeaderIcon },
    name: 'App',
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
                ['https://res.kate.pet/88x31/casey.png', 'https://caseys-corner.neocities.org']
            ]
        };
    }
};
</script>

<style>
html {
    background: #000 !important;
}
html,
#app {
    background: rgba(0, 0, 0, 0) !important;
    background-color: rgba(0, 0, 0, 0) !important;
}
img {
    image-rendering: auto;
    image-rendering: crisp-edges;
    image-rendering: pixelated;

    /* Safari seems to support, but seems deprecated and does the same thing as the others. */
    image-rendering: -webkit-optimize-contrast;
}
.eightbuttons {
    position: absolute;
    bottom: 15px;
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
}
body {
    background-color: black;
    overflow-y: hidden;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
