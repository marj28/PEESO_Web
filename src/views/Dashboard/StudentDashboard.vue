<template>
  <v-app id="inspire">
    <student-navbar />
    <v-main>
      <StatusCard />
      <v-divider light class="test"></v-divider>
      <v-row>
        <v-col cols="12" md="8">
          <scholarship-avail id="availscholar" />
          <scholarship-applied id="appliedscholar" />
        </v-col>
        <v-col cols="12" md="4">
          <student-announcement id="studentannouncement" />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
    
    <script>
import StatusCard from "@/views/StudentView/StatusCard.vue";

export default {
  components: {
    StatusCard,
  },

  data: () => ({
  }),
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