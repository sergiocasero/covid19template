<template>
    <div class="home">
        <Stat class="stat"
              image="visors.jpg"
              number="1000"
              text="viseras impresas"/>

        <Stat class="stat"
              image="visors.jpg"
              number="1000"
              text="viseras impresas"/>

        <Stat class="stat"
              image="visors.jpg"
              number="1000"
              text="viseras impresas"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import Stat from "@/components/Stat";

    export default {
        name: 'Home',
        components: {
            Stat,
            HelloWorld
        }
    }
</script>

<style scoped>
    .home {
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .stat {
        margin: 10px;
    }

    @media only screen and (max-width: 600px) {
        .home {
            flex-direction: column;
        }
    }
</style>
