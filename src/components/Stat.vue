<template>
    <div class="stat">
        <div class="square" v-bind:style="{background: background}"></div>
        <span>{{text}}: {{number}}</span>
    </div>
</template>

<script>
    export default {
        name: "Stat",
        props: ["number", "text", "background"]
    }
</script>

<style scoped>
    .stat {
        display: flex;
        flex-direction: row;
        margin: 4px;
    }

    .square {
        width: 22px;
        height: 22px;
    }

    span {
        margin-left: 8px;
    }
</style>
