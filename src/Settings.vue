<template>
    <div class="container" style="height: calc(100vh - 10rem); overflow: auto;">\
        <b-checkbox v-model="setting.enableVisualizer">Enable Visualizer</b-checkbox><br>
        <b-checkbox v-model="setting.hideEight">Hide 88x31 Buttons</b-checkbox>
    </div>
</template>
<style>
input[type=checkbox],
.custom-control-label {
    color: white !important;
}
</style>
<script>
import * as UserConfig from './userConfig'
export default {
    name: 'SettingsPage',
    data () {
        return {
            setting: {
                enableVisualizer: UserConfig.getBoolean('enableVisualizer'),
                hideEight: UserConfig.getBoolean('hide88Button')
            }
        }
    },
    watch: {
        'setting.enableVisualizer' (value) {
            UserConfig.set('enableVisualizer', value)
        },
        'setting.hideEight' (value) {
            UserConfig.set('hide88Button', value)
        }
    }
}
</script>
