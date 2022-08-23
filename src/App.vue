<template>
    <div id="app">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <div style="position:fixed; top: 0;left:0;">
            <b-button-group>
                <b-button size="sm" to="/">Home</b-button>
                <b-button size="sm" to="/other">Other</b-button>
            </b-button-group>
        </div>
        <router-view/>
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
