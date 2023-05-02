<template>
  <v-app>
    <employer-navbar />
    <v-main>
      <v-row class="pa-3">
        <v-col>
          <v-card outlined color="#1B5E20">
            <v-card-title class="d-flex flex-column justify-space-between align-center">
              <v-avatar size="100">
                <img src="@/assets/download.png" />
              </v-avatar>
            </v-card-title>
            <v-card-text class="d-flex flex-column justify-space-between align-center" style="color: white">
              <p class="font-weight-black">Employer Name</p>
              <p class="font-weight-bold">Employer Position</p>
              <p class="font-weight-medium">Company Name and Address</p>
            </v-card-text>
              <v-col cols="12" sm="12" md="12" lg="12">
                <v-dialog v-model="dialog2" width="400" persistent>

                  <v-card>
                    <v-card-title class="text-h6 green darken-2 white--text">
                      Establishment Type
                    </v-card-title>
                    <v-divider></v-divider>

                    <v-card-actions class="align-right">
                      <v-spacer></v-spacer>
                      <v-btn color="success" text
                        @click="dialog2 = false, profilecard_private = true, profilecard_government = false">
                        PRIVATE
                      </v-btn>
                      <v-btn color="success" text
                        @click="dialog2 = false, profilecard_private = false, profilecard_government = true">
                        PUBLIC
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-card>
        </v-col>
      </v-row>
      <v-row v-show="profilecard_private">
        <v-col style="margin-top: -45px;">
          <profile-card-private />
        </v-col>
      </v-row>
      <v-row v-show="profilecard_government">
        <v-col style="margin-top: -45px;">
          <profile-card-government />
        </v-col>
      </v-row>

    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    
  },
  data: () => ({
    profilecard_government: false,
    profilecard_private: true,
    dialog2: true,
  })
};
</script>