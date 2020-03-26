<template>
    <div class="production">
        <div class="header">
            <span class="title">{{production.title}}</span>
            <span class="subtitle">{{production.subtitle}}</span>
        </div>

        TODO: STATS

        <div class="more">
            <span class="title">{{production.more.title}}</span>
            <span class="subtitle">{{production.more.subtitle}}</span>
            <a target="_blank" v-bind:href="production.more.link">{{production.more.action}}</a>
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

    .header, .more {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 16px;
    }

    .header .title {
        width: 526px;
        height: 40px;
        font-family: Roboto;
        font-size: 34px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #222221;
        margin-top: 32px;
    }

    .header .subtitle {
        width: 526px;
        height: 40px;
        font-family: Roboto;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        text-align: center;
        color: #4f4f4f;
    }

    .more .title {
        width: 198px;
        height: 24px;
        font-family: Roboto;
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #222221;
    }

    .more .subtitle {
        width: 348px;
        height: 40px;
        font-family: Roboto;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        text-align: center;
        color: #4f4f4f;
    }

    a {
        width: 173px;
        height: 34px;
        border-radius: 4px;
        box-shadow: 0 2px 4px 0 rgba(55, 56, 66, 0.39);
        background-color: #3c56ab;

        font-family: Roboto;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        padding-top: 8px;
        margin: 16px;
    }
</style>
