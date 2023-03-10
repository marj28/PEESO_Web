<template>
  <v-app id="inspire">
    <employer-navbar />
    <v-main>
      <StatusCard />
      <v-divider light class="test"></v-divider>
      <v-row class="pa-1">
        <v-col cols="12" md="6" class="ml-2">
          <appointment-card />
          <!-- <applicant-card /> -->
        </v-col>
        <v-col class="mt-4">
          <job-posting-card />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
    
    <script>
import StatusCard from "@/views/EmployerView/StatusCard.vue";

export default {
  components: {
    StatusCard,
  },

  data: () => ({}),
};
</script>
  <style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
  font-family: Roboto, sans-serif;
}
.test {
  border-width: 1px !important;
  border-color: green !important;
  height: 100%;
}
</style>