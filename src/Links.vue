<template>
    <div>
        <b-row style="max-width: 100vw;">
            <b-col></b-col>
            <b-col cols="auto" style="max-width">
                <b-row>
                    <h1 style="font-size: 3rem;">Links</h1>
                </b-row>
                <template v-for="(obj, idx) in items">
                    <div v-bind:key="`contact-item-${idx}`">
                        <b-row>
                            <b-col cols="auto" style="font-size: 2rem; padding: 0; margin: 0;">
                                <template v-if="obj.link != undefined">
<a :href="obj.link" style="font-size: 2rem;">{{obj.label}}</a>
                                </template>
                                <template v-else>
{{obj.label}}
                                </template>
                            </b-col>
                            <template v-if="obj.text != undefined">
                                <b-col cols="auto">
                                    <code class="codething">{{obj.text}}</code>
                                </b-col>
                            </template>
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
    name: 'Links',
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
                    text: 'kate@dariox.club'
                },
                {
                    label: 'Matrix',
                    text: '@ktwrd:catgirl.cloud'
                },
                {
                    label: 'Revolt Server',
                    link: 'https://rvlt.gg/aNVvEkJN'
                },
                {
                    label: 'Github',
                    link: 'https://github.com/ktwrd'
                },
                {
                    label: 'Gitlab',
                    link: 'https://gitlab.com/ktwrd'
                },
                {
                    label: 'Last.fm',
                    link: 'https://last.fm/user/seedvevo'
                }
            ]
        }
    }
}
</script>
<style scoped>
.codething {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: block;
}
div {
    color: white;
    text-align: center;
}
</style>
