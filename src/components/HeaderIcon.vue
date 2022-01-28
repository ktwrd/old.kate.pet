<template>
    <img ref="image" :src="filename" @error="fallbackimage"/>
</template>

<style scoped>
img {
    height: 175px;
}
</style>

<script>
const items = require('./headericons');

export default {
    name: 'HeaderIcon',
    data () {
        return {
            filename: `https://res.kate.pet/image/${items[Math.floor(Math.random() * items.length)]}`
        };
    },
    methods: {
        fallbackimage () {
            this.$refs.image.attributes.src.value = 'https://res.kate.pet/image/petpet.gif';
        }
    }
};
</script>
