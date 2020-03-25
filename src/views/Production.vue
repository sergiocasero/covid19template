<template>
    <div class="production">
        <div class="header">
            <span class="title">{{production.title}}</span>
            <span class="subtitle">{{production.subtitle}}</span>
        </div>

        <div class="more">
            <span class="title">{{production.more.title}}</span>
            <span class="subtitle">{{production.more.subtitle}}</span>
            <a v-bind:href="production.more.link">{{production.more.button}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Production",
        props: ["production"]
    }
</script>

<style scoped>

</style>
