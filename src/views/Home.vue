<template>
    <div class="home">
        <Explanation v-bind:config="config"/>
        <Production v-bind:production="config.production"/>
        <Hashtag v-bind:info="config.hashtag"/>
        <Visors v-bind:visors="config.visors"/>
        <Shovel v-bind:shovel="config.shovel"/>
        <Hashtag v-bind:info="config.be_part"/>
        <Footer v-bind:footer="config.footer"/>
    </div>
</template>

<script>
    import Explanation from "@/views/home/Explanation";
    import * as axios from "axios";
    import Production from "@/views/home/Production";
    import Hashtag from "@/views/home/Hashtag";
    import Visors from "@/views/home/Visors";
    import Shovel from "@/views/home/Shovel";
    import Footer from "@/views/home/Footer";

    export default {
        name: 'Home',
        components: {
            Footer,
            Shovel,
            Visors,
            Hashtag,
            Production,
            Explanation
        },
        data() {
            return {
                config: {}
            }
        },
        methods: {
            async getConfig() {
                this.config = (await axios.get("config.json")).data;
            }
        },
        created() {
            this.getConfig();
        }
    }
</script>

<style scoped>
    .home {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>
