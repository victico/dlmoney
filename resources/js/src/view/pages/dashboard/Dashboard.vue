<template>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="card card-custom gutter-b example example-compact">
                <div class="card-header pt-4 pb-2 min-vh-0">
                    <div class="row w-100">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3 class="pt-4"><strong>Inicio</strong></h3>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row" v-if="mainAlert">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <b-alert :show="mainAlert" dismissible fade :variant="mainAlertVariant" @dismissed="mainAlert=false">{{ mainAlertMessage }}</b-alert>
                        </div>
                        <hr>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="row" v-if="sale || purchase">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="card card-custom wave wave-animate wave-purple mb-8 mb-lg-0" style="background-color: #e4d7f1">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center p-5">
                                                <div class="d-flex flex-column mx-auto text-center">
                                                    <h4 class="text-dark-75 mb-3">Compra</h4>
                                                    <h2 class="font-weight-bold"><strong>{{purchase.toFixed(3)}}</strong></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="card card-custom wave wave-animate mb-8 mb-lg-0" style="background-color: #fff6d8">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center p-5">
                                                <div class="d-flex flex-column mx-auto text-center">
                                                    <h4 class="text-dark-75 mb-3">Venta</h4>
                                                    <h2 class="font-weight-bold"><strong>{{sale.toFixed(3)}}</strong></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 mt-2" v-if="series.length > 0">
                            <apexchart type="area" height="350px" :options="options" :series="series"></apexchart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { EXCHANGE_RATES_GET_ALL, EXCHANGE_RATES_GET_LAST } from "@/core/services/store/exchange_rate.module";

    export default {
        data() {
            return {
                mainAlert: false,
                mainAlertVariant: "",
                mainAlertMessage: "",
                sale: '',
                purchase: '',
                lastExchangeRatesNumber: 10,
                series: [],
                options: {
                    chart: {
                        type: 'area',
                        toolbar: {
                            show: false
                        }
                    },
                    title:{
                        text:'Ultimos valores del tipo de cambio',
                        align: 'center',
                        offsetX: 15,
                        offsetY: 15,
                        style: {
                            fontSize:  '14px',
                            fontWeight:  'bold',
                            fontFamily:  'Nono sans',
                            color:  '#3F4254'
                        },
                    },
                    colors: ['#7f5fa2', '#fed339'],
                    yaxis:{
                        labels: {
                            formatter: function (val) {
                                return val.toFixed(2)
                            }
                        },
                        min: (min) => {
                            return 0;
                        },
                        max: (max) => {
                            return max * 1.10;
                        },
                    },
                },
            }
        },
        mounted() {
            this.getLastExchangeRate();
            this.getExchangeRates();
        },
        methods: {
            getLastExchangeRate () {
                this.$store
                    .dispatch(EXCHANGE_RATES_GET_LAST)
                    .then((data) => {
                        if (data.code != 200){
                            this.showMainAlert('danger', data.error)
                            return;
                        }

                        if (data.data != null) {
                            this.sale = data.data.sale;
                            this.purchase = data.data.purchase;
                        }

                    })
                    .catch((err) => {
                        this.showMainAlert('danger', err)
                        return;
                    });
            },

            getExchangeRates () {
                this.$store
                    .dispatch(EXCHANGE_RATES_GET_ALL, this.lastExchangeRatesNumber)
                    .then((data) => {
                        if (data.code != 200){
                            this.showMainAlert('danger', data.error)
                            return;
                        }

                        let arrayPurchase = [];
                        let arraySale = [];

                        data.data.reverse();

                        for(let i = 0; i < data.data.length; i++){
                            let milliseconds = Date.parse(data.data[i].updated_at);
                            let date = new Date(milliseconds);
                            let formatDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' - ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

                            arrayPurchase.push({x: formatDate, y: data.data[i].purchase});
                            arraySale.push({x: formatDate, y: data.data[i].sale});
                        }

                        this.series.push({
                            name: 'Compra',
                            data: arrayPurchase
                        });
                        this.series.push({
                            name: 'Venta',
                            data: arraySale
                        });
                    })
                    .catch((err) => {
                        this.showMainAlert('danger', err)
                        return;
                    });
            },

            showMainAlert(variant, message) {
                this.mainAlertVariant = variant;
                this.mainAlertMessage = message;
                this.mainAlert = true;
                window.scrollTo(0,0);
            },
        },
        computed: {
        },
    };
</script>