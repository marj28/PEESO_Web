<template>
  <v-row cols="12" class="pa-4">
    <v-col cols="6" md="3">
      <v-card
        height="100"
        dark
        class="pa-2 rounded-lg"
        style="background: linear-gradient(75.7deg,rgb(34, 126, 34) 3.8%,rgb(99, 162, 17) 87.1%);"
        @click="$router.push({ path: 'EmployerJobPosts' })"
      >
        <h2 class="ma-1">
          <v-icon dark right size="40"> mdi-post </v-icon> 57
        </h2>
        <p class="ma-4">Active Job Posts</p>
        <!-- <Chart /> -->
      </v-card>
    </v-col>
    <v-col cols="6" md="3">
      <v-card
        height="100"
        dark
        class="pa-2 rounded-lg"
        style="background: linear-gradient(75.7deg,rgb(34, 126, 34) 3.8%,rgb(99, 162, 17) 87.1%);"
        @click="$router.push({ path: 'EmployerApplicant' })"
      >
        <h2 class="ma-1">
          <v-icon dark right size="40"> mdi-account-circle-outline </v-icon> 57
        </h2>
        <p class="ma-4">Applicants List</p>
        <!-- <Chart /> -->
      </v-card>
    </v-col>
    <v-col cols="6" md="3">
      <v-card
        height="100"
        dark
        class="pa-2 rounded-lg"
        style="background: linear-gradient(75.7deg,rgb(34, 126, 34) 3.8%,rgb(99, 162, 17) 87.1%);"
        @click="$router.push({ path: 'EmployerHiredApplicant' })"
      >
        <h2 class="ma-1">
          <v-icon dark right size="40"> mdi-account-check-outline </v-icon> 57
        </h2>
        <p class="ma-4">Hired Applicants</p>
      </v-card>
    </v-col>
    <v-col cols="6" md="3">
      <v-card
        height="100"
        dark
        class="pa-2 rounded-lg"
        style="background: linear-gradient(75.7deg,rgb(34, 126, 34) 3.8%,rgb(99, 162, 17) 87.1%);"
        @click="$router.push({ path: 'EmployerAppointments' })"
      >
        <h2 class="ma-1">
          <v-icon dark right size="40"> mdi-account-check-outline </v-icon> 57
        </h2>
        <p class="ma-4">Appointments</p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import Chart from "@/components/ChartComponent.vue";

export default {
  components: {
    // Chart,
  },
};
</script>
