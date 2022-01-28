<template>
    <div id="app">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <header-icon />
        <router-view/>
        <div class="eightbuttons">
            <ul>
                <li><a href="https://kernel.org"><img src="~@/assets/CGG_big.gif" /></a></li>
                <li><a href="https://code.visualstudio.com/"><img src="~@/assets/vscbutton.gif" /></a></li>
                <li><a href="https://exo.pet/"><img src="~@/assets/exopet_newbutton.gif" /></a></li>
                <li><a href="https://heckscaper.com/"><img src="~@/assets/emma8831.gif" /></a></li>
                <li><a href="https://lapfoxtrax.com/"><img src="~@/assets/lapfoxgrad.gif" /></a></li>
                <li><a href="https://nikutrax.neocities.org/"><img src="~@/assets/niku.png" /></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import HeaderIcon from './components/HeaderIcon.vue';
export default {
    components: { HeaderIcon },
    name: 'App'
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
