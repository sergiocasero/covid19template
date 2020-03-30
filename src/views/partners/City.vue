<template>
    <div class="city">
        <span class="header">{{header}}</span><br/>
        <span class="name" v-for="person in names">{{person.name}}, </span>
    </div>
</template>

<script>
    export default {
        name: "City",
        props: ["header", "names"]
    }
</script>

<style scoped>
    .city {
        margin: 16px;
        max-width: 1030px;
    }

    .header {
        margin: 16px;
        font-family: Roboto;
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #5070d7;
    }
</style>
