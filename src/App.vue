<template>
    <div id="app">
        <Header v-bind:header="config.header"/>
        <Explanation v-bind:config="config"/>
        <Production v-bind:production="config.production"/>
        <Hashtag v-bind:info="config.hashtag"/>
        <Visors v-bind:visors="config.visors"/>
        <Shovel v-bind:shovel="config.shovel"/>
        <Hashtag v-bind:info="config.be_part"/>
        <!--<div id="nav">
            <router-link to="/">Inicio</router-link>
            |
            <router-link to="/orders">Pedidos</router-link>
            |
            <router-link to="/donations">Donaciones</router-link>
            |
            <router-link to="/visors">Viseras</router-link>
            |
            <router-link to="/shovels">Palas</router-link>
        </div>
        <router-view/>-->
    </div>
</template>

<script>
    import Header from "@/views/Header";
    import Explanation from "@/views/Explanation";
    import Production from "@/views/Production";
    import * as axios from "axios";
    import Hashtag from "@/views/Hashtag";
    import Visors from "@/views/Visors";
    import Shovel from "@/views/Shovel";

    export default {
        components: {Shovel, Visors, Hashtag, Production, Explanation, Header},
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
