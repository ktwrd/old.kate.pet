<template>
    <div>
        <b-modal ref="modal" title="Other Stuff" variant="dark" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="dark" header-bg-variant="dark" footer-text-variant="light" header-text-variant="light" footer-border-variant="dark" header-border-variant="dark">
            <h3><a href="https://sixgrid.kate.pet/github">SixGrid</a></h3>
            <p>A Completely Free and Open Source Desktop Client for e926 and websites alike. Currently it is in it's beta phase, but it is available through Steam by requesting a key on the <a href="https://sixgrid.kate.pet/discord">discord server</a>.</p>
        </b-modal>
    </div>
</template>
<script>
export default {
    name: 'OtherLinksModal',
    methods: {
        showModal () {
            this.$refs.modal.show()
        }
    }
}
</script>
