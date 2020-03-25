<template>
    <div class="explanation">

    </div>
</template>

<script>
    import * as axios from "axios";

    export default {
        name: "Explanation",
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
            this.getConfig()
        }
    }
</script>

<style scoped>

</style>
