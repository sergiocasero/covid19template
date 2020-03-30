<template>
    <div id="app">
        <Header v-bind:header="config.header"/>
        <router-view/>
    </div>
</template>

<script>
    import Header from "@/views/home/Header";
    import * as axios from "axios";
    import Home from "@/views/Home";

    export default {
        components: {Home, Header},
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
<style>
    html, body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
