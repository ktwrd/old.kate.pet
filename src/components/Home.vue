<template>
    <div>
        <template v-if="enableVisualizer">
            <div class="backgroundElement" type="visualizer">
                <template v-if="visualizerComponent">
                    <visualizer ref="vis" v-model="visualizer"/>
                </template>
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
                <input
                    type="button"
                    @click="ToggleAudio"
                    v-bind:value="IsPlaying() ? 'Pause' : 'Play'"/>
                <button
                    @click="SelectNewRandomAudio()">
                    New Song
                </button>
            </div>
        </template>
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

const AudioSelect = require('./AudioSelect');

export default {
    name: 'Home',
    components: {Visualizer},
    data () {
        if (localStorage.AudioVolume === undefined) {
            localStorage.AudioVolume = 0.3;
        }
        if (localStorage.AudioAutoplay === undefined) {
            localStorage.AudioAutoplay = 'false';
        }
        if (localStorage.Visualizer === undefined) {
            localStorage.Visualizer = 'true';
        }
        return {
            audioURL: null,
            audioObject: null,
            subtitle: '',
            volume: parseFloat(localStorage.AudioVolume) * 1024,
            playing: false,
            autoplay: localStorage.AudioAutoplay === 'true' ? true : false,
            visualizerComponent: true,
            visualizer: null,
            enableVisualizer: localStorage.Visualizer === 'true' ? true : false
        };
    },
    mounted () {
        if (this.$data.autoplay) {
            this.ToggleAudio();
        }
    },
    methods: {
        ChangeAudioValue () {
            this.volume = this.$refs.volume.value;
            localStorage.AudioVolume = this.$refs.volume.value / 1024;
            this.$refs.vis.setVolume(this.$refs.volume.value / 1024);
            this.$refs.volume.value = this.$refs.volume.value / 1024;
        },
        ToggleAudio () {
            if (this.$refs.vis.visualizer == null) {
                this.SelectRandomAudio();
            }
            this.$refs.vis.playpause();
            this.$data.playing = this.$refs.vis.playing;
        },
        SelectNewRandomAudio () {
            this.$delete(this.$children, 0);
            this.$refs.vis.kill();
            this.SelectRandomAudio();
            setTimeout(() => {
                this.ToggleAudio();
            }, 200);
        },
        IsPlaying () {
            if (this.$refs.vis === undefined) return false;
            return this.$refs.vis.$data.playing;
        },
        SelectRandomAudio () {
            if (this.$refs.vis.playing) {
                this.$refs.vis.playpause();
            }
            this.$data.audioObject = AudioSelect.select();
            this.$data.audioURL = this.$data.audioObject.url;
            this.$refs.vis.loadAudioFromURL(this.$data.audioURL);
            this.ChangeAudioValue(this.$data.volume);
            this.$refs.vis.playpause();
        }
    }
};
</script>
