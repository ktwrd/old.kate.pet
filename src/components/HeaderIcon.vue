<template>
    <div class="imageContainer">
        <img ref="image" v-bind:src="filename" @error="fallbackimage" @click="generateFilename()"/>
    </div>
</template>

<style scoped>
.imageContainer {
    height: 20vh;
    margin-bottom: 1rem;
    display: flex;
  justify-content: center;
}
img {
    object-fit: contain;
    object-position: center;
    max-width: min(400px, 80vw);
    height: 20vh;
    transition: 50ms;
    margin: auto;
    display: block;
}
img:hover {
    scale: 1.05;
    transition: 50ms;
}
img:active {
    scale: 0.95;
    transition: 50ms;
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
            console.error(`[HeaderIcon->fallbackimage] Failed to load image, going to default`)
            this.$refs.image.attributes.src.value = 'https://res.kate.pet/image/petpet.gif';
        },
        generateFilename () {
            let content = this.$data.filename
            while (content === this.$data.filename) {
                content = `https://res.kate.pet/image/${items[Math.floor(Math.random() * items.length)]}`
            }
            this.$set(this.$data, 'filename', content)
            return content
        }
    }
};
</script>
