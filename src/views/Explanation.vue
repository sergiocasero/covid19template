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

        <div class="buttons">
            <Button
                    class="button"
                    icon="fill-1.svg"
                    v-bind:link="config.orders.link"
                    v-bind:subtitle="config.orders.subtitle"
                    v-bind:title="config.orders.title"/>
            <Button
                    class="button"
                    icon="ic-donation.svg"
                    v-bind:link="config.donations.link"
                    v-bind:subtitle="config.donations.subtitle"
                    v-bind:title="config.donations.title"/>
        </div>
    </div>
</template>

<script>
    import Button from "@/views/Button";

    export default {
        name: "Explanation",
        props: ["config"],
        components: {Button}
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

    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .buttons .button {
        margin: 34px 17px;
    }

    @media only screen and (max-width: 600px) {

        .explanation {
            height: 720px;
        }

        .header, .header .title, .header .subtitle, .order_donation, .order_donation .title, .order_donation .subtitle {
            width: 100%;
        }
    }

    @media only screen and (max-width: 400px) {
        .buttons .button {
            margin: 34px 2px;
        }
    }
</style>
