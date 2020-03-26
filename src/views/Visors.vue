<template>
    <div class="visors">
        <Section class="section"
                 v-bind:text="visors.text"
                 v-bind:title="visors.title"/>

        <img v-bind:src="visors.image1"/>
        <img v-bind:src="visors.image2"/>
    </div>
</template>

<script>
    import Section from "./Section";

    export default {
        name: "Visors",
        components: {Section},
        props: ["visors"]
    }
</script>

<style scoped>
    .visors {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 16px;
    }

    @media only screen and (max-width: 600px) {
        .visors {
            flex-direction: column;
            margin: 16px;
        }

        .section {
            width: 95%;
            margin: 0px;
        }
    }
</style>
