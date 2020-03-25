<template>
    <div class="stat">
        <md-card class="card">
            <md-card-media-cover md-solid>
                <md-card-media md-ratio="4:3">
                    <img alt="Skyscraper" v-bind:src="image">
                </md-card-media>
                <md-card-area>
                    <md-card-header>
                        <span class="md-title">{{number}}</span>
                        <span class="md-subhead">{{text}}</span>
                    </md-card-header>
                </md-card-area>
            </md-card-media-cover>
        </md-card>
    </div>
</template>

<script>
    export default {
        name: "Stat",
        props: ["number", "text", "image"]
    }
</script>

<style scoped>
    .card {
        width: 300px;
    }

    .number {
    }
</style>
