<template>
    <div id="app">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <img src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<script>
export default {
    components: { },
    name: 'App'
};
</script>

<style>
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
