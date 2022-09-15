<template>
    <div>
        <div id="app">
            <link rel="icon" href="/static/favicon.png" type="image/png" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <div style="position:fixed; top: 0;left:0;">
                <b-button-group variant="outline-secondary">
                    <b-button variant="outline-secondary" style="border-top-left-radius: 0; border-bottom-left-radius: 0;" size="sm" to="/">Home</b-button>
                    <b-button variant="outline-secondary" style="border-radius:none" size="sm" to="/track-credits">Track Credits</b-button>
                    <b-button variant="outline-secondary" style="border-top-right-radius:0;" size="sm" to="/other">Other</b-button>
                </b-button-group>
            </div>
            <landing-page />
            <div style="margin-top: 7rem;"><router-view/></div>
        </div>
    </div>
</template>
<script>
import LandingPage from './LandingPage.vue'
import HeaderIcon from './components/HeaderIcon.vue';
export default {
    components: { HeaderIcon, LandingPage },
    name: 'App'
};
</script>

<style>
html {
    background: #000 !important;
}
html,
body,
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
    margin-top: 1rem;
}
</style>
