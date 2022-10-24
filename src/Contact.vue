<template>
    <div>
        <b-row style="max-width: 100vw;">
            <b-col></b-col>
            <b-col cols="auto" style="max-width">
                <b-row>
                    <h1 style="font-size: 2rem;">Contact</h1>
                </b-row>
                <template v-for="(obj, idx) in items">
                    <div v-bind:key="`contact-item-${idx}`">
                        <b-row>
                            <a :href="obj.link" style="font-size: 2rem;">{{obj.label}}</a>
                        </b-row>
                    </div>
                </template>
            </b-col>
            <b-col></b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    name: 'Contact',
    data () {
        return {
            items: [
                {
                    label: 'Mastodon',
                    link: 'https://dariox.club/@kate'
                },
                {
                    label: 'Twitter',
                    link: 'https://twitter.com/seedvevo'
                },
                {
                    label: 'Email',
                    link: 'mailto:kate.vmf@pm.me'
                }
            ]
        }
    }
}
</script>
<style scoped>
div {
    color: white;
    text-align: center;
}
</style>
