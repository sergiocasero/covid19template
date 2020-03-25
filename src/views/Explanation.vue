<template>
    <div class="explanation">
        <div class="header">
            <span class="title">{{config.explanation.title}}</span>
            <span class="subtitle">{{config.explanation.subtitle}}</span>
        </div>
        <div class="order_donation">
            <span class="title">{{config.order_donation.title}}</span>
            <span class="subtitle">{{config.order_donation.subtitle}}</span>
        </div>
    </div>
</template>

<script>
    import * as axios from "axios";

    export default {
        name: "Explanation",
        data() {
            return {
                config: {}
            }
        },
        methods: {
            async getConfig() {
                this.config = (await axios.get("config.json")).data;
                console.log(this.config);
            }
        },
        created() {
            this.getConfig()
        }
    }
</script>

<style scoped>
    .explanation {
        background: #f0f1f6;
        height: 640px;
    }

    .header, .order_donation {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header .title {
        width: 550px;
        height: 80px;
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
        width: 550px;
        height: 60px;
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

    .order_donation .title {
        width: 550px;
        height: 40px;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.11;
        letter-spacing: normal;
        text-align: center;
        color: #4f4f4f;
        margin-top: 26px;
    }

    .order_donation .subtitle {
        width: 550px;
        height: 40px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        text-align: center;
        color: #4f4f4f;
    }
</style>
