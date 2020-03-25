<template>
    <div class="section">
        <span class="title">{{title}}</span>
        <span class="text">{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: "Section",
        props: ["title", "text"]
    }
</script>

<style scoped>

    .section {
        display: flex;
        flex-direction: column;
        margin: 20px;
    }

    .title {
        width: 408px;
        font-family: Roboto;
        font-size: 34px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        text-align: left;
        letter-spacing: normal;
        color: #222221;
    }

    .text {
        width: 408px;
        height: 240px;
        font-family: Roboto;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        text-align: left;
        line-height: 1.33;
        letter-spacing: normal;
        color: #595959;
    }
</style>
