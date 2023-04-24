<template>
  <div id="chart" >
    <v-card  class="" elevation="20" >
      <apexcharts  height="450" width="700" type="pie" :options="options" :series="series"></apexcharts>
    </v-card>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "DonutChart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      options: {
        labels: ['Waiting Job Applicant', 'Hired Job Applicant', 'Waiting Student Applicant', 'Associated Student Applicant', 'Employer'],
        theme: {
          mode: "light",
          monochrome: {
            enabled: true,
            color: "#4CBB17",
            shadeTo: "light",
            shadeIntensity: 0.65,
          },
        },
        responsive: [
          {
            breakpoint: 700,
            options: {
              chart: {},
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      series: [44, 55, 41, 17, 15],

    };
  },
};
</script>

<style scoped>
#chart {
  max-width: 650px;
  margin: 35px auto;
}
.pa-2 {
  min-width: 90%;
}
</style>