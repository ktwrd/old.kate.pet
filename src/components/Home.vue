<template>
    <div v-bind:isRootPath="$route.path == '/' ? 'yes' : 'no'">
        <a class="github-fork-ribbon right-bottom" href="mailto:hireme@kate.pet" data-ribbon="Open for Work" title="Open for Work">Open for Work</a>
        <template v-if="enableVisualizer">
            <div class="backgroundElement" type="visualizer">
                <template v-if="visualizerComponent">
                    <visualizer ref="vis" v-model="visualizer"/>
                </template>
            </div>
            <div class="visualizerControls container" v-bind:notMainView="$route.name != 'blank' ? 'yes' : 'no'">
                <b-row row="auto">
                    <b-col>
                        <div class="form form-horizontal">
                        <template v-if="volume > 0.5">
                            <b-icon icon="volume-up-fill" id="volumeIcon"/>
                        </template>
                        <template v-else-if="volume < 0.5 && volume > 0.001">
                            <b-icon icon="volume-down-fill" id="volumeIcon"/>
                        </template>
                        <template v-else>
                            <b-icon icon="volume-mute-fill" id="volumeIcon"/>
                        </template>
                        <input
                            type="range"
                            min="0"
                            max="1024"
                            step="0.1"
                            :value="volume"
                            @change="ChangeAudioValue"
                            ref="volume"
                            style="vertical-align: middle;"/>

                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col v-bind:playing="IsPlaying()">
                        <img ref="btn_PlayPause"
                            v-bind:class="IsPlaying() ? 'winamp-pausebtn' : 'winamp-playbtn'"
                            @click="ToggleAudio" />
                        <img ref="btn_NewSong"
                            class="winamp-next"
                            @click="SelectNewRandomAudio()" />
                        <b-button
                            size="sm"
                            to="/track-credits">Track Credits</b-button>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <code style="background-color: black; color: white;" v-bind:hasLink="audioObject!=null&&audioObject.link!=null &&audioObject.link.length > 3? 'y' : 'n'" @click="videoRedirect(audioObject)">
                            {{ audioObject !== null && audioObject.name !== null ? audioObject.name : 'no track playing' }}
                        </code>
                    </b-col>
                </b-row>
            </div>
        </template>
        <HomeLinkComponent />
        <!-- <b-tabs pills align="center" content-class="mt-3" active-nav-item-class="font-weight-bold cool-selected-tab">
            <template v-for="link in PageLinks">
                <b-tab role="presentation" @click="PageRedirect" v-bind:key="link.type">
                    <template #title>
                        <span
                            :location="link.location"
                            class="LinkTab"
                            :style="{'--color': link.color, '--color-hover': link.colorhover}"
                            name="discord">

                            {{link.type}}
                        </span>
                    </template>
                </b-tab>
            </template>
        </b-tabs> -->
    </div>
</template>
<style>

.visualizerControls[notMainView=yes] {
    top: 2rem;
    position: absolute;
    right: 0;
    max-width: fit-content;
}
.visualizerControls {
    transition: all 0.5s ease-out;
}
</style>
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
    background: #000 !important;
}
.backgroundElement[type=visualizer] canvas {
    margin: 0;
    padding: 0;
    opacity: 0.2;
    filter: blur(10px);
    transition: 300ms;
}
#volumeIcon {
    color: #eee;
    font-size: 3rem;
    vertical-align: middle;
}
</style>
<style>
* {
    transition: 300ms;
}
.cool-selected-tab {
    background-color: rgba(255, 255, 255, 0.1) !important;
    border: 1px solid #fff;
}
[hasLink=y] {
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
}
[hasLink=y]:hover {
    font-style: italic;
}
[hasLink=n] {
    font-weight: normal;
    cursor: initial;
    font-style: initial;
}
[isrootpath=yes] .links {
    display: inline !important;
}
[isrootpath=no] .links {
    display: none !important;
}
</style>
<script>
import Visualizer from './Visualizer.vue';
import HomeLinkComponent from './HomeLinkComponent.vue';

const AudioSelect = require('./AudioSelect');
const $ = require('jquery');

export default {
    name: 'Home',
    components: {Visualizer, HomeLinkComponent},
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
        $(this.$refs.btn_NewSong).prop('disabled', true);
        if (this.$data.autoplay) {
            this.ToggleAudio();
        }
    },
    methods: {
        videoRedirect (audioObject) {
            if (audioObject.link.toString().length > 8) {
                window.open(audioObject.link, '_blank').focus()
            }
        },
        ClearSelection () {
            var sel;
            if ((sel = document.selection) && sel.empty) {
                sel.empty();
            } else {
                if (window.getSelection) {
                    window.getSelection().removeAllRanges();
                }
                var activeEl = document.activeElement;
                if (activeEl) {
                    var tagName = activeEl.nodeName.toLowerCase();
                    if (tagName === 'textarea' || (tagName === 'input' && activeEl.type === 'text')) {
                        // Collapse the selection to the end
                        activeEl.selectionStart = activeEl.selectionEnd;
                    }
                }
            }
        },
        PageRedirect (event) {
            console.log(event);
            window.location = event.target.attributes.location.value;
        },
        ChangeAudioValue () {
            this.$set(this.$data, 'volume', this.$refs.volume.value);
            localStorage.AudioVolume = this.$refs.volume.value / 1024;
            this.$refs.vis.setVolume(this.$refs.volume.value / 1024);
            this.$refs.volume.value = this.$refs.volume.value / 1024;
        },
        async ToggleAudio () {
            this.ClearSelection();
            if (this.$refs.vis.visualizer == null) {
                await this.SelectRandomAudio();
                this.$refs.vis.playpause();
                this.$refs.vis.playpause();
            }
            this.$refs.vis.playpause();
            this.$set(this.$data, 'playing', this.$refs.vis.playing);
        },
        async SelectNewRandomAudio () {
            this.ClearSelection();
            this.$delete(this.$children, 0);
            this.$refs.vis.kill();
            await this.SelectRandomAudio();
            this.ToggleAudio();
        },
        IsPlaying () {
            if (this.$refs.vis === undefined) return false;
            return this.$refs.vis.$data.playing;
        },
        async SelectRandomAudio () {
            this.ClearSelection();
            $(this.$refs.btn_NewSong).prop('disabled', true);
            $(this.$refs.btn_PlayPause).prop('disabled', true);
            if (this.$refs.vis.playing) {
                this.$refs.vis.playpause();
            }
            this.$set(this.$data, 'audioObject', AudioSelect.select());
            this.$set(this.$data, 'audioURL', this.$data.audioObject.url);
            await this.$refs.vis.loadAudioFromURL(this.$data.audioURL);
            this.ChangeAudioValue(this.$data.volume);
            this.$refs.vis.playpause();
            $(this.$refs.btn_NewSong).prop('disabled', false);
            $(this.$refs.btn_PlayPause).prop('disabled', false);
        },
        async SetAudio (obj) {
            this.ClearSelection();
            $(this.$refs.btn_NewSong).prop('disabled', true);
            $(this.$refs.btn_PlayPause).prop('disabled', true);
            if (this.$refs.vis.playing) {
                this.$refs.vis.playpause();
            }
            this.$set(this.$data, 'audioObject', obj);
            console.debug(this.audioObject)
            this.$set(this.$data, 'audioURL', this.$data.audioObject.url);
            await this.$refs.vis.loadAudioFromURL(this.$data.audioURL);
            this.ChangeAudioValue(this.$data.volume);
            this.$refs.vis.playpause();
            $(this.$refs.btn_NewSong).prop('disabled', false);
            $(this.$refs.btn_PlayPause).prop('disabled', false);
        }
    }
};
</script>
