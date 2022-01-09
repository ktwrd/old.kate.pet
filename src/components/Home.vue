<template>
    <div>
        <div class="backgroundElement" type="visualizer">
            <visualizer ref="vis"/>
        </div>
        <div class="visualizerControls">
            <input
                type="range"
                min="0"
                max="1024"
                step="0.1"
                :value="volume"
                @change="ChangeAudioValue"
                ref="volume" />
            <button
                @click="ToggleAudio">
                Play/Pause
            </button>
        </div>
    </div>
</template>
<style scoped>
.backgroundElement {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -100;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
}
.backgroundElement[type=visualizer] canvas {
    margin: 0;
    padding: 0;
    opacity: 0.2;
    filter: blur(10px);
    transition: 300ms;
}
</style>
<script>
import Visualizer from './Visualizer.vue';
export default {
    name: 'Home',
    components: {Visualizer},
    data () {
        return {
            audioURL: 'http://res.kate.pet/pageaudio/bitmap_fantasy.mp3',
            audioObject: null,
            subtitle: '',
            volume: 0.0
        };
    },
    mounted () {
        this.$refs.vis.audioURL = this.audioURL;
        this.$refs.vis.loadAudioFromURL(this.audioURL);
    },
    methods: {
        ChangeAudioValue () {
            this.volume = this.$refs.volume.value;
            this.$refs.vis.setVolume(this.$refs.volume.value / 1024);
            console.log(this.$refs.vis.volumeNode.value, this.$refs.volume.value / 1024);
        },
        ToggleAudio () {
            this.$refs.vis.playpause();
        }
    }
};
</script>
