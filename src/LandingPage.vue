<template>
    <div>
        <template v-if="$route.name == 'blank'">
            <header-icon />
        </template>
        <home ref="home" />
        <eight-buttons />
    </div>
</template>
<script>
import Home from './components/Home.vue'
import HeaderIcon from './components/HeaderIcon.vue'
import EightButtons from './components/EightButtons.vue'
import * as UserConfig from './userConfig'
export default {
    components: { Home, HeaderIcon, EightButtons },
    name: 'LandingPage',
    data () {
        console.log(this.$route)
        return {
            showeight: !UserConfig.getBoolean('hide88Button')
        };
    }
}
</script>
