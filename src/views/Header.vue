<template>
    <div class="header">
        <div class="placeholder" v-bind:style="{height: window.height + 'px', width: window.width + 'px'}">hello!!</div>

        <div class="title" v-bind:style="{marginTop: marginTop + 'px'}">
            <h1>Covid19 makers Extremadura</h1>
            <h2>Luchamos contra el covid</h2>
        </div>
        <video autoplay loop muted playsinline width="100%">
            <source src="../assets/header.mp4" type="video/mp4">
        </video>
    </div>
</template>

<script>
    export default {
        name: "Header",
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
                this.window.height = (this.window.width * 1080 / 1920) - 10;
                this.marginTop = this.window.height / 3;
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

    .title {
        position: absolute;
        text-align: center;
        width: 100%;
        color: white;
    }

    h1 {
        font-size: 5em;
        font-family: Roboto;
    }

    h2 {
        font-family: Roboto;
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 2em;
        }
    }
</style>
