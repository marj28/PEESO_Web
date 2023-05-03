<template>
  <div class="mt-12">
    <v-app id="inspire" class="background">
      <v-main class="d-flex justify-center align-center">
        <v-col cols="10" md="4" class="mx-auto">
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-container>
              <v-layout row wrap>
                <v-card class="mx-auto mt-16" width="500">
                  <div class=" mt-n6 mb-n6 text-center pa-4">
                    <h4 class="green--text">CREATE AN ACCOUNT</h4>
                  </div>
                  <v-container class="mb-n6">
                    <v-row class="text-center pa-4 mt-n10" v-show="title">
                      <v-col cols="12" sm="12" md="12">
                        <v-tooltip bottom >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn type="submit" class="mr-1" :color="green" block
                              @click="employer = false, applicant = true, type = 'member'"
                              v-bind:color="type === 'member' ? 'success' : 'white'" v-bind="attrs" v-on="on">
                              <v-icon left>
                                mdi-account
                              </v-icon>
                              BE A MEMBER</v-btn>

                          </template>
                          <span>For Student / Job Applicant / OFW</span>
                        </v-tooltip>

                      </v-col>
                      <v-col cols="12">
                        <h6 class="text-center green--text mb-n12 mt-n4">OR</h6>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-btn type="submit" class="mr-1 mt-n4" block
                          @click="employer = true, applicant = false, type = 'employer'"
                          v-bind:color="type === 'employer' ? 'success' : 'white'">
                          <v-icon left>
                            mdi-account-multiple
                          </v-icon>BE AN EMPLOYER</v-btn>
                      </v-col>

                    </v-row>
                  </v-container>
                  <v-divider></v-divider>
                  <v-row class="text-form pa-4">
                    <v-col>
                      <v-col cols="12" sm="12" md="12" v-show="employer" style="margin-top: -50px">
                        <employer-form />
                      </v-col>
                      <!-- student -->
                      <!-- 
                      <v-col cols="12" sm="12" md="12" v-show="student" style="margin-top: -50px">
                        <student-form />
                      </v-col> -->
                      <!-- end student -->
                      <!-- start applicant -->
                      <v-col cols="12" sm="12" md="12" v-show="applicant" style="margin-top: -50px">
                        <applicant-form />
                      </v-col>
                      <!-- end applicant -->
                      <v-col align="center" justify="space-around" class=" mt-n8">
                        Already a Member?
                        <v-text class="green--text" type="button" xs @click="$router.push({ name: 'LoginPage' })">
                          LOG IN
                        </v-text>

                      </v-col>
                    </v-col>
                  </v-row>
                </v-card>
              </v-layout>
            </v-container>

          </v-form>
          <!-- <div class="text-center">
            <v-dialog v-model="dialog" width="300" persistent>

              <v-card>
                <v-card-title class="text-h5 green darken-2 white--text">
                  Privacy Policy
                </v-card-title>

                <v-card-text class="mt-3">
                  I am giving consent to PEESO to collect and process my information in
                  participitang in this activity. My information will be shared strictly
                  for data reports and communications within the organization and for future
                  activities under PEESO Programs.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>

                  <v-checkbox label="I agree" color="success" @click="agree = !agree" dense></v-checkbox>

                  <v-spacer></v-spacer>

                  <v-btn color="success" text @click="dialog = false" :disabled="!agree">
                    Continue
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div> -->
        </v-col>
      </v-main>
    </v-app>
  </div>
</template>
    
<script scoped>
import { mapActions } from "vuex";

export default {
  name: "RegisterPage",
  components: {},

  data: function () {
    return {
      type: "member",
      alertColor: "success",
      dialog: true,
      loading: false,
      snackbar: false,
      student: false,
      employer: false,
      applicant: true,
      title: true,
      returnbtn: false,
      agree: false,


      text: `Please input fields`,
      selection: 1,
    };
  },

  methods: {
    ...mapActions("users", ["Registration"]),

    // userReg() {
    //   this.$createUserWithEmailAndPassword(
    //     this.$FBAUTH,
    //     this.email,
    //     this.password
    //   )
    //     .then((userCredentials) => {
    //       console.log(userCredentials);
    //       this.alertColor = "success";
    //       this.snackbar = true;
    //       this.text = "Registration Successful!";
    //       ///redirect somewhere
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //       if (error.message == "Firebase: Error (auth/invalid-email).") {
    //         // alert("Pretty error message!")
    //         this.alertColor = "error";
    //         this.snackbar = true;
    //         this.text = "Pretty error message!";
    //       }
    //     });
    // },
  },
};
</script>    
      
<style scoped>
.mr-1 {
  border: 1px solid gray;
  padding: 8px 16px;
  border-radius: 5px;
  font-family: 'Segoe UI';
  font-weight: bold;

}

input[type="sample"] {
  border-bottom: 1px solid rgb(28, 110, 4);
  outline: none;
  color: rgb(28, 110, 4);
}

input[type="password"] {
  outline: none;
  color: rgb(28, 110, 4);
}

.custom-placeholer-color input::placeholder {
  color: rgb(28, 110, 4) !important;
}

.custom-label-color .v-label {
  color: rgb(28, 110, 4);
  opacity: 1;
}

.custom-placeholer-color input,
.custom-label-color input {
  color: rgb(28, 110, 4) !important;
}

.v-sheet.v-card {
  border-radius: 10px 10px 10px 10px;
}

h2 {
  color: rgb(28, 110, 4);
  margin-top: 20px;
}

.wrapper {
  position: absolute;
  left: 50%;
  top: 250%;
  /* width: 400px; */
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
  box-shadow: 0 0 8px rgb(201, 181, 1);
}

.background {
  margin: 0;
  padding: 0;
  background-image: url("../assets/cover1.jpg") !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
      
      
      
      