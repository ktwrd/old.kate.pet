<template>
    <div>
        <div id="app" v-bind:notMainView="$route.name != 'blank' ? 'yes' : 'no'">
            <link rel="icon" href="/static/favicon.png" type="image/png" />
            <div class="toolbar-top">
                <a href="#/">
                    <img src="/static/btn-home.png" class="fixed-btn" alt="homepage" v-bind:current="$route.path == '/'" />
                </a>
                <a href="#/settings">
                    <img src="/static/btn-settings.png" class="fixed-btn" alt="settings" v-bind:current="$route.path == '/settings'" />
                </a>
                <a href="#/portfolio">
                    <img src="/static/btn-portfolio.png" class="fixed-btn" alt="portfolio" v-bind:current="$route.path == '/portfolio'" />
                </a>
                <a href="#/links">
                    <img src="/static/btn-links.png" class="fixed-btn" alt="various links" v-bind:current="$route.path == '/links'" />
                </a>
                <a href="#/track-credits">
                    <img src="/static/btn-track-credits.png" class="fixed-btn" alt="track credits" v-bind:current="$route.path == '/track-credits'" />
                </a>
                <!-- <a href="#/other">
                    <img src="/static/btn-other.png" class="fixed-btn" alt="other stuff" v-bind:current="$route.path == '/other'" />
                </a> -->
            </div>
            <landing-page ref="landingPage" />
            <div class="routerView"><router-view/></div>
        </div>
    </div>
</template>
<style>
.toolbar-top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 4px 2px;
    background: rgba(0,0,0, 0.75);
}
.fixed-btn {
    height: 32;
    border: 1px solid white;
    padding-right: 2px;
}
.fixed-btn:hover {
    border-color: red;
}
.fixed-btn[current] {
    border: 1px solid #036ffc;
}
</style>
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
    overflow-x: hidden;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 2rem;
}

[notMainView=yes] .routerView {
    margin-top: 10rem;
    padding-bottom: 20rem;
    transition: 0ms;
    overflow-x: hidden;
}
[notMainView=no] .routerView {
    margin-top: 7rem;
    transition: 0ms;
}
</style>
