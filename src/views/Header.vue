<template>
    <div class="header">
        <div class="placeholder" v-bind:style="{height: window.height + 'px', width: window.width + 'px'}"></div>

        <div class="container" v-bind:style="{marginTop: marginTop + 'px'}">
            <img src="../assets/ic-logotype.svg">
            <span class="title">{{header.title}}</span>
            <span class="subtitle">{{header.subtitle}}</span>
            <span class="coronavirusmakers">Formamos parte de coronavirusmakers.org</span>
        </div>
        <video autoplay loop muted playsinline width="100%">
            <source src="../assets/header.mp4" type="video/mp4">
        </video>
    </div>
</template>

<script>

    export default {
        name: "Header",
        props: ["header"],
        data() {
            return {
                window: {
                    width: 0,
                    height: 0
                },
                marginTop: 0
            }
        },
        methods: {
            handleResize() {
                this.window.width = (window.innerWidth);
                let height = (this.window.width * 1080 / 1920) - 20;

                if (height > 640) {
                    height = 640;
                }

                if (this.window.width < 600) {
                    height += 20;
                }

                this.window.height = height;
                let marginTop = this.window.height / 4;

                if (this.window.width < 600) marginTop = 20;

                this.marginTop = marginTop;
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
    }
</script>

<style scoped>
    .header {
        width: 100%;
    }

    .placeholder {
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
    }

    .container {
        position: absolute;
        text-align: center;
        width: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        font-size: 70px;
        font-family: "Roboto Black";
        margin-top: 34px;
    }

    .subtitle {
        font-family: Roboto;
        font-size: 40px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        margin-top: 34px;
        width: 258px;
        height: 46px;
        background-color: #5070d7;
    }

    .coronavirusmakers {
        width: 386px;
        margin-top: 8px;
        font-family: Roboto;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
    }

    video {
        max-height: 640px;
        object-fit: cover;
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 2em;
        }

        .container img {
            width: 60px;
        }

        .title {
            font-size: 40px;
            margin-top: 8px;
        }

        .subtitle {
            font-size: 30px;
            margin-top: 12px;
            width: 238px;
            height: 36px;
        }

        .coronavirusmakers {
            font-size: 20px;
            margin-top: 8px;
        }
    }


    @media only screen and (max-width: 600px) {
        .coronavirusmakers {
            font-size: 16px;
        }
    }
</style>
