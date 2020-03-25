<template>
    <div class="Donations">
        <GoogleForm
                height="1900"
                url="https://docs.google.com/forms/d/e/1FAIpQLSc_f-JAjvyY15uSXSY-6Z2qr5urJSVwJ32kWCnYHLljL-11yw/viewform?embedded=true"/>
    </div>
</template>

<script>
    import GoogleForm from "@/components/GoogleForm";

    export default {
        name: "Donations",
        components: {GoogleForm}
    }
</script>

<style scoped>
    .Donations {
        height: 1990px;
    }
</style>
