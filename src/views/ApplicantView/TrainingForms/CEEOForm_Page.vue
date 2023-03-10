<template>
  <v-app>
    <applicant-navbar />
    <v-main>
      <v-col>
        <v-card outlined color="#1B5E20">
          <v-card-title
            class="
              d-flex
              flex-column
              justify-space-between
              align-center
              white--text
            "
            color="success"
          >
            <v-avatar size="100">
              <img src="@/assets/form2.png" />
            </v-avatar>
            Community-based Training for Economic Opportunity CEEO-Star Program
          </v-card-title>
          <v-container>
            <h5
              class="
                d-flex
                flex-column
                justify-space-between
                align-center
                white--text
              "
            >
              Encourage Tagumenyos to engage in entrepreneurial activities for
              individual sustainability and city's economic boost. This is a
              program which offers micro-entrepreneurs training in financial
              management and business operations.
            </h5>
            <v-divider dark></v-divider>
            <v-col
              align="center"
              justify="space-around"
              style="margin-bottom: -50px"
            >
              <v-btn
                color="success"
                class="text-center mb-6"
                dark
                @click="CEEO_Register = true"
              >
                Register
              </v-btn>
            </v-col>
          </v-container>
        </v-card>
        <v-card class="mx-auto" v-show="CEEO_Register">
          <ceeo-form />
        </v-card>
      </v-col>
      <!-- <CBTEDForm /> -->
    </v-main>
  </v-app>
</template>
    <script>
export default {
  components: {
  },
  data: () => ({
    CEEO_Register: false,
  }),
};
</script>