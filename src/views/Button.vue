<template>
    <div class="button">
        <a class="link" v-bind:href="link">
            <img v-bind:src="icon">
            <span class="title">{{title}}</span>
            <span class="subtitle">{{subtitle}}</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props: ["icon", "title", "subtitle", "link"]
    }
</script>

<style scoped>
    .button {
        width: 232px;
        height: 240px;
        border-radius: 8px;
        box-shadow: 0 4px 8px 0 rgba(107, 108, 121, 0.3);
        border: solid 1px #d8dfeb;
        background-color: #ffffff;
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .link {
        width: 100%;
        height: 100%;
    }

    img {
        width: 105px;
        height: 117px;
        object-fit: contain;
        margin: 27px;
    }

    .title {
        width: 169px;
        height: 20px;
        font-family: Roboto;
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
        color: #5070d7;
    }

    .subtitle {
        width: 168px;
        height: 32px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #7d7d7d;
    }
</style>
