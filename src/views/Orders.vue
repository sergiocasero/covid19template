<template>
    <div class="orders">
        <GoogleForm
                height="1800"
                url="https://docs.google.com/forms/d/e/1FAIpQLSdRwJtH91WUhEK7dQpNcp2Jx6fBaYGrkdGeD6ql_2ZkEPlUcw/viewform?embedded=true"/>
    </div>
</template>

<script>
    import GoogleForm from "@/components/GoogleForm";

    export default {
        name: "Orders",
        components: {GoogleForm}
    }
</script>

<style scoped>

</style>
