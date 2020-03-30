<template>
    <div class="home">
        <Explanation v-bind:config="config"/>
        <Production v-bind:production="config.production"/>
        <Hashtag v-bind:info="config.hashtag"/>
        <Visors v-bind:visors="config.visors"/>
        <Shovel v-bind:shovel="config.shovel"/>
        <Hashtag v-bind:info="config.be_part"/>
        <!--<Partners/>-->
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
    import Partners from "@/views/Partners";

    export default {
        name: 'Home',
        components: {
            Partners,
            Footer,
            Shovel,
            Visors,
            Hashtag,
            Production,
            Explanation
        },
        data() {
            return {
                config: {
                    "header": {"title": "", "subtitle": ""},
                    "explanation": {"title": "", "subtitle": ""},
                    "order_donation": {"title": "", "subtitle": ""},
                    "orders": {"title": "", "subtitle": "", "link": ""},
                    "donations": {"title": "", "subtitle": "", "link": ""},
                    "production": {
                        "title": "",
                        "subtitle": "",
                        "more": {"title": "", "subtitle": "", "action": "", "link": ""}
                    },
                    "hashtag": {"title": "", "subtitle": "", "image": "", "link": "", "imageset": ""},
                    "be_part": {"title": "", "subtitle": "", "link": "", "image": "", "imageset": ""},
                    "visors": {"title": "", "text": "", "image1": "", "image2": ""},
                    "shovel": {"title": "", "text": "", "image1": "", "image2": ""},
                    "footer": {
                        "links": [
                            {"title": "", "link": ""},
                            {"title": "", "link": ""}
                        ],
                        "social": {"title": "", "facebook": "", "twitter": "", "instagram": ""}
                    }
                }
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
