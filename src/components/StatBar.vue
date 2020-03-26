<script>
    import {Bar} from 'vue-chartjs'
    import * as axios from "axios";

    export default {
        name: "StatBar",
        extends: Bar,
        data: () => ({
            chartdata: {
                labels: ["Estado", "Pedidos", "Stock", "Entregadas", "Láminas", "Total"],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [40, 20]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                }
            }
        }),
        methods: {
            async getData() {
                let response = await axios.get("https://aumpex.es:24501/");
                let data = response.data;

                // {"sheets": "9224", "state": "-6028", "orders": "8382", "sent": "6591", "stock": "2354"}

                this.chartdata.datasets = [];
                this.chartdata.datasets.push({
                    label: 'Datos',
                    backgroundColor: ["#5070d7", "#f8c578", "#ffe6ad", "#5fa599", "#78a9fa", "#d4608e"],
                    barPercentage: 0.5,
                    barThickness: 60,
                    maxBarThickness: 70,
                    minBarLength: 2,
                    data: [data.state, data.orders, data.stock, data.sent, data.sheets, data.total]
                });

                this.renderChart(this.chartdata, this.options);
                // this.chartdata.datasets = [];
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>
