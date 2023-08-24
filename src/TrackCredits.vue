<template>
    <div class="container">
        <template v-for="(track, index) in availableObjects">
            <div v-bind:key="`trackcredit-${index}`" >
                <b-row class="m-1" style="border-bottom: 1px dashed white;">
                    <b-col cols="auto">
                        <img class="winamp-playbtn" @click="playTrack(track, index)"/>
                            <!-- <b-button :variant="index % 2 == 1 ? 'secondary' : 'primary' " size="sm" @click="playTrack(track, index)"><b-icon icon="play-circle"></b-icon> </b-button> -->
                    </b-col>
                    <b-col cols="1">
                        <div class="track-number">
                            {{index+1}}.
                        </div>
                    </b-col>
                    <b-col style="text-align: left;">
                        <template v-if="track.link.length > 8">
                            <a href="#/track-credits" @click="(event) => trackActivate(event, track)">{{track.name}}</a>
                        </template>
                        <template v-else>
                            <div style="color: white;">{{track.name}}</div>
                        </template>
                    </b-col>
                </b-row>
            </div>
        </template>
    </div>
</template>
<style>
.track-number {
    width: 2rem;
    display: inline-block;
    font-family: monospace;
    text-align: right;
    color: white;
}
.track-container {
    width: fit-content;
}
</style>
<style scoped>
.container {
    height: calc(100vh - 15rem);
    padding-top: 1rem;
    padding-bottom: 3rem;
    overflow: auto;
}
</style>
<script>
export default {
    name: 'TrackCredits',
    data () {
        return {
            availableObjects: require('./components/AudioSelect').data
        }
    },
    methods: {
        trackActivate (event, track) {
            event.preventDefault()
            if (track.link.toString().length > 8) {
                window.open(track.link, '_blank').focus()
            }
        },
        async playTrack (track, index) {
            console.log(this)
            this.$root.$children[0].$refs.landingPage.$refs.home.ClearSelection();
            this.$root.$children[0].$refs.landingPage.$refs.home.$delete(this.$root.$children[0].$refs.landingPage.$refs.home.$children, 0);
            this.$root.$children[0].$refs.landingPage.$refs.home.$refs.vis.kill();
            let d = {...track};
            if (d.url == undefined) {
                d.url = `https://res.kate.pet/pageaudio/${track.file}`;
            }
            await this.$root.$children[0].$refs.landingPage.$refs.home.SetAudio(d)
            this.$root.$children[0].$refs.landingPage.$refs.home.ToggleAudio();
        }
    }
}
</script>
