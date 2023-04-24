<template>
    <div id="chart" class="d-flex">
        <v-card class="pa-2">
            <apexcharts class="pa-2" height="300" :options="chartOptions" :series="series" label="Job Applicant"></apexcharts>
        </v-card>

    </div>
</template>
    
<script>
import VueApexCharts from "vue-apexcharts";

export default {
    name: "ApplicantChart",
    components: {
        apexcharts: VueApexCharts,
    },
    data: function () {
        return {
            chartOptions: {
                chart: {
                    id: "basic-bar",
                    type: "bar",
                    foreColor: "green",
                    // sparkline: {
                    //   enabled: true,
                    // },
                },
                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                responsive: [
                    {
                        breakpoint: 1000,
                        options: {
                            plotOptions: {
                                bar: {
                                    horizontal: true,
                                    dataLabels: {
                                        position: "top",
                                    },
                                },
                                dataLabels: {
                                    enabled: true,
                                    style: {
                                        colors: ["#333"],
                                    },
                                    offsetX: 30,
                                },
                            },
                            // legend: {
                            //   show: false,
                            // },
                        },
                    },
                ],
                stroke: {
                    curve: "smooth",
                },
                colors: ["#388E3C"],
                xaxis: {
                    categories: ["Boy", "Girl"],
                },
            },
            series: [
                {
                    name: "series-1",
                    data: [40, 65],
                },
            ],
        };
    },
};
</script>
<style scoped>
#chart {
    max-width: 650px;
    margin: 35px auto;
}
</style>
    