<template>
  <div>
      <apexcharts class="pa-2" elevation="20" height="300" type="pie" :options="options" :series="series"></apexcharts>
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
            breakpoint: 600,
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
</style>