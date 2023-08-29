<template>
    <div>
        <template v-if="$route.path == '/'">
            <ul class="links">
                <template v-for="link in PageLinks">
                    <li v-bind:key="link.type">
                        <template v-if="typeof link.location == 'function'">
                            <img :src="`https://res.kate.pet/image/links/${link.type}.png`"
                                @click="link.location"
                                class="LinkTab"
                                name="placeholder"
                                height="71" />
                        </template>
                        <template v-else>
                            <img :src="`https://res.kate.pet/image/links/${link.type}.png`"
                                @click="PageRedirect"
                                :location="link.location"
                                class="LinkTab"
                                name="placeholder"
                                height="71" />
                        </template>
                    </li>
                </template>
            </ul>
        </template>
    </div>
</template>
<style>
/* LinkTab hover animation */
.LinkTab {
    color: var(--color);
}
.LinkTab:hover {
    color: var(--color-hover);
    cursor: pointer;
}
.LinkTab,
.LinkTab:hover {
    transition: 200ms;
}
.LinkTab {
    height: min(71px, 15vw);
    max-width: min(200px, calc((200/71) * 15vw));
    --anim-filter-pre:  brightness(75%)
                        grayscale(100%)
                        sepia(10%);

    --anim-filter-post: brightness(100%)
                        grayscale(0%)
                        sepia(0%)
                        hue-rotate(360deg)
                        saturate(130%)
                        contrast(1);
}
/* animate hover filter & border */
img.LinkTab {
    border: 2px solid rgb(109, 109, 109);

    -webkit-filter: var(--anim-filter-pre);
    filter: var(--anim-filter-pre);
}
img.LinkTab:hover {
    border: 2px outset rgba(255,90,120,.7);
    cursor: pointer;

    -webkit-filter: var(--anim-filter-post);
    filter: var(--anim-filter-post);
}
img.LinkTab,
img.LinkTab:hover {
    -webkit-transition: 0.4s;
    transition: 0.4s;
}
/* styles for container */
ul.links {
    display:block;
    background-color: rgba(0,0,0,0);
    margin: 6px;
}
ul.links li {
    vertical-align: top;
    margin: 4px;
    padding: 2px;
}
ul.links li img {
    height: 71px;
}
ul.links,
ul.links li {
    display: inline;
    margin: none;
    padding: 0;
    list-style: none;
}

/* Only show links when we're on the main page */
</style>
<script>
export default {
    name: 'HomeLinkComponent',
    data () {
        return {
            PageLinks: [
                {
                    type: 'discord',
                    color: '#5865F2',
                    colorhover: '#e1e1e1',
                    location: 'https://discord.gg/GPjpzRvpSp'
                },
                // {
                //     type: 'revolt',
                //     location: 'https://r.kate.pet/revolt'
                // },
                {
                    type: 'xenia_bot',
                    location: 'https://xenia.kate.pet'
                },
                // {
                //     type: 'twitter',
                //     color: '#1DA1F2',
                //     colorhover: '#e1e1e1',
                //     location: 'https://twitter.com/seedvevo'
                // },
                {
                    type: 'mastodon',
                    color: '',
                    colorhover: '',
                    location: 'https://r.kate.pet/social'
                },
                {
                    type: 'bluesky',
                    location: 'https://r.kate.pet/bluesky'
                },
                // {
                //     type: 'other_shirt',
                //     color: '#ffffff',
                //     colorhover: '#ffffff',
                //     location: () => {
                //         window.location = '#/other'
                //     }
                // },
                {
                    type: 'github',
                    color: '#8867b8',
                    colorhover: '#e1e1e1',
                    location: 'https://r.kate.pet/github'
                },
                {
                    type: 'kofi_s_tag_dark',
                    color: '#9d6538',
                    colorhover: '#e1e1e1',
                    location: 'https://r.kate.pet/donate'
                }
            ]
        }
    }
}
</script>
