<template>
    <canvas ref='canvas' v-bind="canvas" v-bind:audioURL='audioURL' v-bind:width='width' v-bind:height='height' />
</template>
<style scoped>
canvas {
    margin: 0;
    padding: 0;
    display: block;
    overflow: none;
}
</style>
<script>
import butterchurn from 'butterchurn';
import isButterchurnSupported from 'butterchurn/lib/isSupported.min.js';
var bcPresets = {}
if (false) {
    const ps1 = require('butterchurn-presets/lib/butterchurnPresets.min')
    const ps2 = require('butterchurn-presets/lib/butterchurnPresetsExtra.min')
    const ps3 = require('butterchurn-presets/lib/butterchurnPresetsExtra2.min')
    const ps4 = require('butterchurn-presets/lib/butterchurnPresetsMD1.min')
    const ps5 = require('butterchurn-presets/lib/butterchurnPresetsMinimal.min')
    const ps6 = require('butterchurn-presets/lib/butterchurnPresetsNonMinimal.min')
    Object.assign(bcPresets,
        ps1.getPresets(),
        ps2.getPresets(),
        ps3.getPresets(),
        ps4.getPresets(),
        ps5.getPresets(),
        ps6.getPresets());
}
bcPresets['Eo.S. + Phat - chasers 18 hallway'] = require('./milkdrop-preset.json');
bcPresets['flexi - what is the matrix'] = require('butterchurn-presets/presets/converted/flexi - what is the matrix.json')
bcPresets['LuxXx - Makes Me Cry (five) (Makes Me Cry, So Lick My Tears, And Get Real High)'] = require('butterchurn-presets/presets/converted/LuxXx - Makes Me Cry (five) (Makes Me Cry, So Lick My Tears, And Get Real High).json')

export default {
    name: 'Visualizer',
    template: `<canvas ref='canvas' v-bind:audioURL='audioURL' v-bind:width='width' v-bind:height='height' />`,
    watch: {
        enabled (target) {
            if (target === true && !isButterchurnSupported) {
                alert(`Butterchurn is not supported on your platform ;w;`)
                this.$set(this.$data, 'enabled', false)
            }
        },
        volume (target) {
            if (this.$data.volumeNode != null) {
                this.$set(this.$data.volumeNode, 'value', target);
            }
        }
    },
    data () {
        var presets = bcPresets;
        if (this.audioURL !== undefined && this.audioURL !== null) {
            this.loadAudioFromURL(this.audioURL);
        }

        return {
            // preset: 'flexi - what is the matrix',
            preset: 'LuxXx - Makes Me Cry (five) (Makes Me Cry, So Lick My Tears, And Get Real High)',

            // Number of seconds to blend presets
            presetBlend: 0.0,

            visualizer: null,

            audioContext: null,
            source: null,

            audioURL: null,

            presets: presets,
            volume: 0.2,
            playPosition: 0,
            startPosition: 0,
            doRender: true,
            // maximum 90fps
            renderInterval: 1000 / 90,
            renderLoop: null,
            height: window.innerHeight,
            width: window.innerWidth,
            volumeNode: null,

            playing: false,

            enable: true,

            canvas: {},

            lockButton: false
        };
    },
    mounted () {
        let self = this;
        // On window resize change the canvas size.
        window.addEventListener('resize', () => {
            self.$refs.canvas.width = window.innerWidth;
            self.$refs.canvas.height = window.innerHeight;
            if (this.$data.visualizer != null) {
                this.$data.visualizer.setRendererSize(window.innerWidth, window.innerHeight);
            }
        });
    },
    methods: {
        kill () {
            if (this.$data.renderLoop !== null) {
                clearInterval(this.$data.renderLoop);
                this.$data.renderLoop = null;
            }
            if (this.$data.source !== null) {
                this.$data.source.stop();
                this.$data.source = null;
            }
            if (this.$data.volumeNode !== null) {
                this.$data.volumeNode.disconnect();
                this.$data.volumeNode = null;
            }
            if (this.$data.audioContext !== null) {
                this.$data.audioContext.close();
                this.$data.audioContext = null;
            }
            if (this.$data.visualizer !== null) {
                this.$data.visualizer.audioNode.disconnect();
                this.$data.visualizer = null;
            }
            this.$data.playing = false;
        },
        initialState () {
            var presets = bcPresets;
            if (this.audioURL !== undefined && this.audioURL !== null) {
                this.loadAudioFromURL(this.audioURL);
            }

            return {
                // preset: 'flexi - what is the matrix',
                preset: 'Eo.S. + Phat - chasers 18 hallway',

                // Number of seconds to blend presets
                presetBlend: 0.0,

                visualizer: null,

                audioContext: null,
                source: null,

                audioURL: null,

                presets: presets,
                volume: 0.2,
                playPosition: 0,
                startPosition: 0,
                doRender: true,
                renderInterval: 1000 / 24,
                renderLoop: null,
                height: window.innerHeight,
                width: window.innerWidth,
                volumeNode: null,

                playing: false,

                enable: true
            };
        },
        playpause () {
            if (!this.$data.enable) return;
            if (this.$data.playing) {
                this.$data.audioContext.suspend();
                this.$data.playing = false;
            } else {
                this.$data.audioContext.resume();
                this.$data.playing = true;
            }
        },
        setPreset (name, blend = this.$data.presetBlend) {
            if (!this.$data.enable) return;
            this.$data.visualizer.loadPreset(this.$data.presets[name], blend);
        },
        createVisualizer () {
            if (!isButterchurnSupported) {
                alert(`Butterchurn is not supported on your platform ;w;`)
                return;
            }
            if (!this.$data.enable) return;
            console.log('Created Visualizer', this.$data);
            window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

            this.$refs.canvas.width = window.innerWidth;
            this.$refs.canvas.height = window.innerHeight;

            var presets = bcPresets;
            this.$data.visualizer = butterchurn.createVisualizer(this.$data.audioContext, this.$refs.canvas, {
                width: 1600,
                height: 900
            });

            this.$data.visualizer.connectAudio(this.$data.source);

            this.$data.visualizer.loadPreset(presets[this.preset], this.$data.presetBlend);

            this.playpause();
            this.$data.renderLoop = setInterval(() => {
                if (!this.$data.playing) return;
                if (!this.$data.doRender) return;
                this.$data.visualizer.render();
            }, this.$data.renderInterval);
            setTimeout(() => {
                this.$data.visualizer.setRendererSize(window.innerWidth, window.innerHeight);
            }, 100);
        },
        setVolume (value) {
            if (!this.$data.enable) return;
            this.$data.volumeNode.gain.setValueAtTime(value, this.$data.audioContext.currentTime);
        },
        loadAudioFromURL (location) {
            if (!this.$data.enable) return;
            return new Promise((resolve, reject) => {
                try {
                    this.$set(this.$data, 'enable', false);
                    if (this.$data.audioContext == null) {
                        this.$data.audioContext = new AudioContext();
                    }
                    if (this.$data.volumeNode == null) {
                        this.$data.volumeNode = this.$data.audioContext.createGain();
                        this.$data.volumeNode.value = this.$data.volume;
                        this.$data.volumeNode.connect(this.$data.audioContext.destination);
                    }
                    if (this.$data.source == null) {
                        this.$data.source = this.audioContext.createBufferSource();
                    }

                    // now retrieve some binary audio data from <audio>, ajax, input file or microphone and put it into a audio source object.
                    // here we will retrieve audio binary data via AJAX
                    var request = new XMLHttpRequest();
                    this.$data.audioURL = location;
                    request.open('GET', location);
                    request.responseType = 'arraybuffer'; // This asks the browser to populate the retrieved binary data in a array buffer
                    request.onload = () => {
                        // populate audio source from the retrieved binary data. This can be done using decodeAudioData function.
                        // first parameter of decodeAudioData needs to be array buffer type. So from wherever you retrieve binary data make sure you get in form of array buffer type.
                        this.$data.audioContext.decodeAudioData(request.response, (buffer) => {
                            this.$data.source.buffer = buffer;
                        });
                        // now we got context, audio source.
                        // now lets connect the audio source to a destination(hardware to play sound).
                        this.$data.source.connect(this.$data.volumeNode); // destination property is reference the default audio device

                        this.$data.source.start(0);
                        /*
                        If we wanted to add any audio nodes then we need to add them in between audio source and destionation anytime dynamically.
                        */
                        setTimeout(() => {
                            this.$set(this.$data, 'enable', true);
                            this.createVisualizer();
                            resolve();
                        }, 150);
                    };
                    request.send();
                } catch (e) {
                    this.$set(this.$data, 'enable', true);
                    console.error(e);
                    reject(e);
                }
            });
        }
    }
};
</script>
