<template>
    <div>
        <b-container>
            <b-row class="d-flex flex-row">
                <b-col cols="auto" class="m-1">
                    <b-card no-body>
                        <template #header>
                            <a href="#/since">Time since</a>
                        </template>
                    </b-card>
                </b-col>
                <b-col cols="auto" class="m-1">
                    <b-card>
                    <template #header>
                        <a href="https://sixgrid.kate.pet/github">SixGrid</a>
                    </template>
                        A Completely Free and Open Source Desktop Client for e926 and websites alike.<br>Currently it is in it's beta phase, but it is available through Steam by requesting a key on the <a href="https://sixgrid.kate.pet/discord">discord server</a>.
                    </b-card>
                </b-col>
                <b-col cols="auto" class="m-1">
                    <b-card>
                        <template #header>
                            <a href="https://88x31.kate.pet">88x31</a>
                        </template>
                        Collection of 88x31 buttons that I've stumbled upon on the internet.<br>You can make a pull request on the <a href="https://github.com/ktwrd/88x31">github repo</a> to contribute more buttons ^w^
                    </b-card>
                </b-col>
                <b-col cols="auto" class="m-1">
                    <b-card>
                        <template #header>
                            <a href="https://github.com/ktwrd/midiadapter">MIDI Adapter</a>
                        </template>
                        A Free, Open-Source, and Multi-Platform Alternative to <a href="https://github.com/Etuldan/MidiControl">midicontrol</a> that works on MacOS, Windows, and Linux.
                    </b-card>
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
