<template>
  <v-app id="inspire">
    <StatusCard />
    <!-- <AppliedStatusCard class="mt-n6" /> -->
    <div class="">
      <v-divider light class="test"></v-divider>
      <v-row class="pa-2 mb-12">
        <v-col cols="12" md="8" sm="12">
          <available-jobs class=""/>
          <scholarship-avail />
          <available-training />
        </v-col>
        <v-col cols="12" md="4">
          <applicant-announcement />
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
      
<script>
import StatusCard from "@/views/ApplicantView/StatusCard.vue";
import AppliedStatusCard from "@/views/ApplicantView/AppliedStatusCard.vue";

export default {
  components: {
    StatusCard,
    AppliedStatusCard
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

@media screen {
  div.container {
    margin-top: 12px;
  }
}
.test {
  border-width: 1px !important;
  border-color: green !important;
  height: 100%;
}
</style>