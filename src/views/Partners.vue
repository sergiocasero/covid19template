<template>
    <div class="partners">
        <span class="title">Nuestros colaboradores</span>
        <span class="subtitle">Porque sabemos que quieres conocernos, te presentamos un listado organizado por ciudad con los nombres de las personas que día a día trabajan para hacer realidad este proyecto.</span>
        <City header="Badajoz" v-bind:names="partners.badajoz"/>
        <City header="Cáceres" v-bind:names="partners.caceres"/>
        <City header="Valverde de Leganés" v-bind:names="partners.valverde"/>
        <City header="Mérida" v-bind:names="partners.merida"/>
        <City header="Zafra" v-bind:names="partners.zafra"/>
        <City header="Montijo" v-bind:names="partners.montijo"/>
        <City header="Trujillo" v-bind:names="partners.trujillo"/>
        <City header="Miajadas" v-bind:names="partners.miajadas"/>
        <City header="Logrosán" v-bind:names="partners.logrosan"/>
        <City header="Plasencia" v-bind:names="partners.plasencia"/>
        <City header="Coria" v-bind:names="partners.coria"/>
        <City header="Montanchez" v-bind:names="partners.montanchez"/>
        <City header="Don Benito - Villanueva" v-bind:names="partners.donbenitovillanueva"/>
        <City header="Navalmoral" v-bind:names="partners.navalmoral"/>
        <City header="Moraleja" v-bind:names="partners.moraleja"/>
        <City header="Talarrubias" v-bind:names="partners.talarrubias"/>
        <City header="Tierra de Barros" v-bind:names="partners.tieradebarros"/>
    </div>
</template>

<script>
    import * as axios from "axios";
    import City from "@/views/partners/City";

    export default {
        name: "Partners",
        components: {City},
        data() {
            return {
                partners: {}
            }
        },
        methods: {
            async getPartners() {
                let response = await axios.get("https://covid19extremadura.es:24501/partner");
                this.partners = response.data;
            }
        },
        created() {
            this.getPartners();
        }
    }
</script>

<style scoped>
    .partners {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        font-size: 34px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #222221;
        margin: 16px;
    }

    .subtitle {
        max-width: 440px;
        font-family: Roboto;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        text-align: center;
        color: #4f4f4f;
    }
</style>
