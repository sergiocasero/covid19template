<template>
    <div id="app">
        <Header/>
        <Explanation/>
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
<script>
    import Header from "@/views/Header";
    import Explanation from "@/views/Explanation";

    export default {
        components: {Explanation, Header}
    }
</script>
