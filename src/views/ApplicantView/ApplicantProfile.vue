<template>
  <v-app>
    <applicant-navbar />
    <v-main>
      <applicant-profile />
    </v-main>
    
    <!-- Once lang ni ipakita , if bago lang -->
    <!-- <div class="text-center">
      <v-dialog v-model="dialog" width="400" persistent>
        <v-card>
          <v-card-title class="text-h6 green darken-2 white--text">
            REMINDER
          </v-card-title>

          <v-card-text class="mt-3">
            Before proceeding to the main dashboard, we encourage you to completely fill out necessary details first.
            This will be used in all activities that's been aligned for Job Applicants. 
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" text @click="dialog = false">
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div> -->
  </v-app>
</template>
  
  <script>
export default {
  components: {
  },
  data: function () {
    return {
      dialog: true,
    };
  },
};
</script>