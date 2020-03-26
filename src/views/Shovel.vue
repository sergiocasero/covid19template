<template>
    <div class="shovel">
        <img v-bind:src="shovel.image1"/>
        <img class="img2" v-bind:src="shovel.image2"/>

        <Section v-bind:text="shovel.text"
                 v-bind:title="shovel.title"/>
    </div>
</template>

<script>
    import Section from "./Section";

    export default {
        name: "Shovel",
        components: {Section},
        props: ["shovel"]
    }
</script>

<style scoped>
    .shovel {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 16px;
    }

    img {
        width: 418px;
        height: 418px;
        margin: 10px;
        object-fit: cover;
    }

    .img2 {
        width: 286px;
    }

    @media only screen and (max-width: 600px) {
        .shovel {
            flex-direction: column-reverse;
            margin: 16px;
        }
    }
</style>
