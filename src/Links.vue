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
                    label: 'Plemora',
                    link: 'https://r.kate.pet/social'
                },
                {
                    label: 'Lemmy',
                    link: 'https://r.kate.pet/lemmy'
                },
                {
                    label: 'Bluesky',
                    link: 'https://r.kate.pet/bluesky',
                    text: '@kate.pet'
                },
                {
                    label: 'Blog',
                    link: 'https://b.kate.pet'
                },
                {
                    label: 'Twitter',
                    link: 'https://r.kate.pet/twitter'
                },
                {
                    label: 'Email',
                    text: 'kate@dariox.club'
                },
                {
                    label: 'Pronouns',
                    link: 'https://r.kate.pet/pronouns'
                },
                // {
                //     label: 'Revolt Server',
                //     link: 'https://r.kate.pet/revolt'
                // },
                {
                    label: 'Discord Server',
                    link: 'https://r.kate.pet/discord'
                },
                {
                    label: 'Github',
                    link: 'https://r.kate.pet/github'
                },
                {
                    label: 'Gitlab',
                    link: 'https://gitlab.com/ktwrd'
                },
                {
                    label: 'Last.fm',
                    link: 'https://r.kate.pet/lastfm'
                },
                {
                    label: 'Stackshare',
                    link: 'https://r.kate.pet/stackshare'
                },
                {
                    label: 'Steam',
                    link: 'https://r.kate.pet/steam'
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
