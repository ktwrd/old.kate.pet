<template>
    <div>
        <template v-if="enableVisualizer">
            <div class="backgroundElement" type="visualizer">
                <template v-if="visualizerComponent">
                    <visualizer ref="vis" v-model="visualizer"/>
                </template>
            </div>
            <div class="visualizerControls container">
                <b-row>
                    <b-col>
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
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <code style="background-color: black; color: white;">
                            {{ audioObject !== null && audioObject.name !== null ? audioObject.name : 'no track playing' }}
                        </code>
                    </b-col>
                </b-row>
            </div>
        </template>
        <b-tabs pills align="center" content-class="mt-3">
            <template v-for="link in PageLinks">
                <b-tab role="presentation" :location="link.location" class="LinkTab" @click="PageRedirect" name="discord" v-bind:key="link.type" :style="{'--color': link.color, '--color-hover': link.colorhover}">
                    <template #title>
                        {{link.type}}
                    </template>
                </b-tab>
            </template>
        </b-tabs>
    </div>
</template>
<style scoped>
.tabs {
    width: fit-content;
    margin: auto;
    width: 50%;
    margin-top: 30px;
}
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
.LinkTab {
    color: var(--color);
    transition: 200ms;
}
.LinkTab:hover {
    color: var(--color-hover);
    transition: 200ms;
    cursor: pointer;
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
            enableVisualizer: localStorage.Visualizer === 'true' ? true : false,
            PageLinks: [
                {
                    type: 'home',
                    color: '#4c4c4c',
                    colorhover: '#4c4c4c',
                    location: '#/'
                },
                {
                    type: 'discord',
                    color: '#7289DA',
                    colorhover: '#586bad',
                    location: 'https://discord.gg/GPjpzRvpSp'
                },
                {
                    type: 'github',
                    color: '#7289DA',
                    colorhover: '#586bad',
                    location: 'https://github.com/ktwrd'
                },
                {
                    type: 'twitter',
                    color: '#7289DA',
                    colorhover: '#586bad',
                    location: 'https://twitter.com/seedvevo'
                }
            ]
        };
    },
    mounted () {
        if (this.$data.autoplay) {
            this.ToggleAudio();
        }
    },
    methods: {
        PageRedirect (event) {
            console.log(event);
        },
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
