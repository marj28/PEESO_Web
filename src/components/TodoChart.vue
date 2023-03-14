<template>
  <div>
    <v-card class="pa-2" elevation="20">
      <apexcharts height="300" type="bar" :options="chartOptions" :series="series"></apexcharts>
    </v-card>

  </div>
</template>
    
<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "ChartComponent",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "basic-bar",
          type: "bar",
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
            breakpoint: 500,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false,
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            borderRadius: 2,
            horizontal: true,
          },
        },
        xaxis: {
          categories: ["For Approval", "For Recommendation", "For Processing"],
        },
        colors: ["#1B5E20"],
      },

      series: [
        {
          name: "series-1",
          data: [30, 40, 45],
        },
      ],
    };
  },
};
</script>
<style scoped>
/* #chart {
  max-width: 650px;
  margin: 35px auto;
} */
</style>
    