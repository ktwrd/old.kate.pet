<template>
    <div>
        <b-container>
            <b-row class="d-flex flex-row">
                <b-col cols="auto" class="m-1">
                    <div class="card text-white bg-dark">
                        <div class="card-header">
                            <a href="#/since">Time since</a>
                        </div>
                        <div class="card-body">
                            Time since things happened in my life.
                        </div>
                    </div>
                </b-col>
                <b-col cols="auto" class="m-1">
                    <div class="card text-white bg-dark">
                        <div class="card-header">
                            <a href="https://ktwrd.github.io/Revolt">Revolt Stuff</a>
                        </div>
                        <div class="card-body">
                            Tools and Stuff for <a href="https://revolt.chat">Revolt</a>
                        </div>
                    </div>
                </b-col>
                <b-col cols="auto" class="m-1">
                    <div class="card text-white bg-dark">
                        <div class="card-header">
                            <a href="https://sixgrid.kate.pet">SixGrid</a>
                        </div>
                        <div class="card-body">
                            A Completely Free and Open Source Desktop Client for e926 and websites alike.<br>
                            Currently it is in it's beta phase, but it is available through Steam by requesting<br>
                            a key on the <a href="https://sixgrid.kate.pet/discord">discord server</a>.
                        </div>
                    </div>
                </b-col>
                <b-col cols="auto" class="m-1">
                    <div class="card text-white bg-dark">
                        <div class="card-header">
                            <a href="https://88x31.kate.pet">88x31</a>
                        </div>
                        <div class="card-body">
                            Collection of 88x31 buttons that I've stumbled upon on the internet.<br>
                            You can make a pull request on the <a href="https://github.com/ktwrd/88x31">github repo</a> to contribute more buttons ^w^
                        </div>
                    </div>
                </b-col>
                <b-col cols="auto" class="m-1">
                    <div class="card text-white bg-dark">
                        <div class="card-header">
                            <a href="https://github.com/ktwrd/midiadapter">MIDI Adapter</a>
                        </div>
                        <div class="card-body">
                            A Free, Open-Source, and Multi-Platform Alternative to <a href="https://github.com/Etuldan/MidiControl">midicontrol</a><br>
                            that works on MacOS, Windows, and Linux.
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'OtherStuff'
}
</script>
<style>
.card-header {
    padding: 0.125rem 0.5rem !important;
}
.card-body {
    padding: 0.5rem !important;
}
</style>
