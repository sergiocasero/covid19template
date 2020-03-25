<template>
    <div class="header">
        <div class="placeholder" v-bind:style="{height: window.height + 'px', width: window.width + 'px'}">hello!!</div>

        <div class="container" v-bind:style="{marginTop: marginTop + 'px'}">
            <img src="../assets/ic-logotype.svg">
            <span class="title">{{header.title}}</span>
            <span class="subtitle">{{header.subtitle}}</span>
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
                this.window.height = height;
                this.marginTop = this.window.height / 4;
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
        margin-top: 32px;
    }

    .subtitle {
        font-size: 40px;
        font-family: "Roboto";
        margin-top: 34px;
    }

    video {
        max-height: 640px;
        object-fit: cover;
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 2em;
        }
    }
</style>
