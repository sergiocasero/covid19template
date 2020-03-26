<template>
    <div class="production">
        <div class="header">
            <span class="title">{{production.title}}</span>
            <span class="subtitle">{{production.subtitle}}</span>
        </div>

        <div class="status">
            <StatBar/>
            <div>
                <span class="title">EXTREMADURA</span>
            </div>
        </div>

        <div class="more">
            <span class="title">{{production.more.title}}</span>
            <span class="subtitle">{{production.more.subtitle}}</span>
            <a target="_blank" v-bind:href="production.more.link">{{production.more.action}}</a>
        </div>
    </div>
</template>

<script>
    import StatBar from "@/components/StatBar";
    import * as axios from "axios";

    export default {
        name: "Production",
        components: {StatBar},
        props: ["production"],
        methods: {
            async getData() {
                let response = await axios.get("https://aumpex.es:24501/");
            }
        }
    }
</script>

<style scoped>

    .header, .more {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header .title {
        width: 526px;
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

    .status .title {
        width: 138px;
        font-family: Roboto;
        font-size: 24px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.83;
        letter-spacing: normal;
        color: #222221;
    }

    @media only screen and (max-width: 600px) {

        .header, .header .title, .header .subtitle {
            width: 100%;
        }
    }
</style>
