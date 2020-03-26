<template>
    <div class="hashtag">

        <div class="header">
            <span class="title">{{info.title}}</span>
            <span class="subtitle">
                {{info.subtitle}}
                <a v-bind:href="info.link" v-if="info.link != ''">¡Únete al grupo!</a>
            </span>
        </div>

        <img class="Bitmap"
             v-bind:src="info.image"
             v-bind:srcset="info.imageset">
    </div>
</template>

<script>
    export default {
        name: "Hashtag",
        props: ["info", "image", "imageset"]
    }
</script>

<style scoped>
    img {
        width: 100%;
        max-height: 440px;
        object-fit: cover;
    }

    .header {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 130px;
    }

    .header .title {
        max-width: 726px;
        font-family: Roboto;
        font-size: 64px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
    }

    .header .subtitle {
        width: 545px;
        font-family: Roboto;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
    }

    a {
        color: #ffffff;
        font-style: italic;
    }

    @media only screen and (max-width: 600px) {
        .header, .header .title, .header .subtitle, .order_donation, .order_donation .title, .order_donation .subtitle {
            width: 100%;
        }

        .header {
            margin-top: 12px;
        }

        .header .title {
            font-size: 32px;
        }

        .header .subtitle {
            font-size: 12px;
        }
    }
</style>
