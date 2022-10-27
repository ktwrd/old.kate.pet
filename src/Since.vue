<template>
    <div>
        <h3>Started HRT</h3>
        <b-col cols="auto">
            <b-row>
                <b-col></b-col>
                <b-col cols="auto" style="padding-right: 5px !important;">
                    <TimeSinceComponent :timestamp="1654770300*1000" />
                </b-col>
                <b-col cols="auto" style="padding: 0 !important;">
                    ago
                </b-col>
                <b-col></b-col>
            </b-row>
        </b-col>
        <br>
        <br>
        <h3>Came out</h3>
        <b-col cols="auto">
            <b-row>
                <b-col></b-col>
                <b-col cols="auto" style="padding-right: 5px !important;">
                    <TimeSinceComponent :timestamp="1640227568*1000" />
                </b-col>
                <b-col cols="auto" style="padding: 0 !important;">
                    ago
                </b-col>
                <b-col></b-col>
            </b-row>
        </b-col>
        <br>
        <br>
        <h3>Taken for</h3>
        <b-col cols="auto">
            <b-row>
                <b-col></b-col>
                <b-col cols="auto" style="padding: 0 !important;">
                    <TimeSinceComponent :timestamp="1649606122*1000" />
                </b-col>
                <b-col></b-col>
            </b-row>
        </b-col>
    </div>
</template>
<style scoped>
h3, div {
    color: white;
}
* {
    text-align: center;
}
</style>
<script>
import TimeSinceComponent from './components/TimeSinceComponent.vue'
export default {
    name: 'Since',
    components: { TimeSinceComponent }
}
</script>
