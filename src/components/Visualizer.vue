<template>
    <canvas
        ref='canvas'
        :style="`width: ${width}; height: ${height};`"
    />
</template>
<script>
import butterchurn from 'butterchurn';
import butterchurnPresets from 'butterchurn-presets';

export default {
    name: 'Visualizer',
    data () {
        var presets = butterchurnPresets.getPresets();

        return {
            options: {
                width: 800, // {int} - Render Dimension in Pixels
                height: 600 // {int} - Render Dimension in Pixels
            },

            width: '100%',
            height: '100%',

            preset: 'Flexi, martin + geiss - dedicated to the sherwin maxawow',

            // Number of seconds to blend presets
            presetBlend: 0.0,

            visualizer: null,

            audioContext: null,
            source: null,

            pixelRatio: window.devicePixelRatio || 1,

            textureRatio: 1,

            presets
        };
    },
    mounted () {
        window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
        if (this.audioContext == null) this.audioContext = new AudioContext();

        if (this.visualizer == null) {
            this.visualizer = butterchurn.createVisualizer(this.audioContext, this.$refs.canvas, {
                width: this.options.width,
                height: this.options.height,
                pixelRatio: this.pixelRatio,
                textureRatio: this.textureRatio
            });
        }
        if (this.source == null) {
            this.source = this.audioContext.createBufferSource();
        }
        this.visualizer.connectAudio(this.source);

        this.visualizer.loadPreset(this.presets[this.preset], this.presetBlend);

        this.visualizer.setRendererSize(this.$data.width, this.$data.height);

        this.visualizer.render();
        this.setCanvasSize();
        this.loadAudioFromURL('https://cdn.jyles.club/pageaudio/chrome_vox.mp3');
    },
    methods: {
        setCanvasSize (width = this.$data.width, height = this.$data.height) {
            this.$data.width = width;
            this.$data.height = height;
        },
        setPreset (name, blend = this.$data.presetBlend) {
            this.$data.visualizer.loadPreset(this.$data.presets[name], blend);
        },
        loadAudioFromURL (location) {
            try {
                // now retrieve some binary audio data from <audio>, ajax, input file or microphone and put it into a audio source object.
                // here we will retrieve audio binary data via AJAX
                var request = new XMLHttpRequest();
                request.open('GET', location, true);
                request.responseType = 'arraybuffer'; // This asks the browser to populate the retrieved binary data in a array buffer
                request.onload = function () {
                    // populate audio source from the retrieved binary data. This can be done using decodeAudioData function.
                    // first parameter of decodeAudioData needs to be array buffer type. So from wherever you retrieve binary data make sure you get in form of array buffer type.
                    this.audioContext.decodeAudioData(request.response, function (buffer) {
                        this.source.buffer = buffer;
                    }, null);
                };
                request.send();

                // now we got context, audio source.
                // now lets connect the audio source to a destination(hardware to play sound).
                this.source.connect(this.audioContext.destination); // destination property is reference the default audio device

                /*
                    If we wanted to add any audio nodes then we need to add them in between audio source and destionation anytime dynamically.
                */

                // now play the sound.
                this.source.start(0);
            } catch (e) {
                alert('Web Audio API not supported');
            }
        }
    }
};
</script>
