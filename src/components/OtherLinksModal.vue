<template>
    <div>
        <b-modal ref="modal" title="Other Stuff" variant="dark" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="dark" header-bg-variant="dark" footer-text-variant="light" header-text-variant="light" footer-border-variant="dark" header-border-variant="dark">
            <h3><a href="https://sixgrid.kate.pet/github">SixGrid</a></h3>
            <p></p>
            <h3><a href="https://88x31.kate.pet">88x31 Buttons</a></h3>
            <p></p>
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
