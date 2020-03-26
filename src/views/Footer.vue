<template>
    <div class="footer">
        <div class="first">
            <img src="group-10.svg">
            <div class="links">
                <span class="title">SOLICITUDES</span>
                <div class="square"></div>
                <a class="link" v-bind:href="link.link" v-for="link in footer.links">{{link.title}}</a>
            </div>
            <div class="social">
                <span class="title">{{footer.social.title}}</span>
                <div class="networks">
                    <a v-bind:href="footer.social.twitter"><img src="ic-twitter.svg"></a>
                </div>
            </div>
        </div>
        <div class="second">
            <span style="color: #7d7d7d">Grupo de Markers contra el COVID-19 de Extremadura. Página web desarrollada por Sergio, diseño y logo realizados por HYAIB.</span>
            <span style="color: #7d7d7d">
                Puedes usar la plantilla
                <a href="https://github.com/sergiocasero/covid19template" target="_blank">en github</a>
            </span>

            <div>
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" rel="license">
                    <img alt="Licencia Creative Commons" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
                         style="border-width:0"/></a> Esta obra está bajo una
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" rel="license">Licencia Creative Commons
                    Atribución-NoComercial-CompartirIgual 4.0 Internacional</a>.
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        props: ["footer"]
    }
</script>

<style scoped>
    .footer {
        height: 320px;
        background-color: #f7f8fb;
    }

    .footer .first {
        padding: 64px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .first img {
        width: 430px;
        height: 113px;
        object-fit: contain;
        margin-right: 140px;
    }

    .links .title {
        font-family: Roboto;
        font-size: 15px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4a4a4a;
    }

    .square {
        width: 19px;
        height: 2px;
        background-color: #5070d7;
    }

    .link {
        font-family: Roboto;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4a4a4a;
        margin-top: 5px;
    }

    .links {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .social img {
        width: 38px;
        height: 38px;
        object-fit: contain;
    }

    .second {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-left: 16px;
    }


    @media only screen and (max-width: 600px) {
        .footer .first {
            flex-direction: column;
            margin: 16px;
        }

        .footer {
            height: 550px;
            background-color: #f7f8fb;
        }
    }
</style>
