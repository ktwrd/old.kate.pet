<template>
    <div class="container">
        <template v-for="(track, index) in availableObjects">
            <div v-bind:key="`trackcredit-${index}`" class="track-container">
                <template v-if="track.link.length > 8">
                    <a href="#/track-credits" @click="(event) => trackActivate(event, track)"><div class="track-number">{{index+1}}.</div> {{track.name}}</a>
                </template>
                <template v-else>
                    <div style="color: white;"><div class="track-number">{{index+1}}.</div> {{track.name}}</div>
                </template>
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
}
.track-container {
    width: fit-content;
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
        }
    }
}
</script>
