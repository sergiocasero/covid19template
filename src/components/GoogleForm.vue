<template>
    <div class="google_form">
        <iframe
                frameborder="0"
                v-bind:src="url"
                v-bind:style="{height: height + 'px'}"
                width="100%">Cargando…
        </iframe>
    </div>
</template>

<script>
    export default {
        name: "GoogleForm",
        props: ["url", "height"]
    }
</script>

<style scoped>
</style>
