<template>
  <div>
    <v-app id="inspire" class="background">
      <v-main class="d-flex justify-center align-center">
        <v-col cols="10" md="4" class="mx-auto">
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-container>
              <v-layout row wrap>
                <v-card class="mx-auto" width="400">
                  <!-- <div class="text-center pa-4" v-show="peeso">
                    <h2>PEESO</h2>
                  </div> -->
                  <v-row class="text-center pa-4" v-show="title">
                    <v-col cols="12" sm="12" md="12">
                      <v-btn class="mt-6"  type="submit" color="green" dark small outlined @click="
                        (student = false),
                        (applicant = false),
                        (employer = true),                        
                        (title = false),
                        (returnbtn = true)
                      ">I am an Employer</v-btn>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-btn  type="submit" color="success" outlined small @click="
                        (student = true),
                        (employer = false),
                        (applicant = false),                       
                        (title = false),
                        (returnbtn = true)
                      ">I am a Student</v-btn>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-btn  type="submit" color="success" small outlined @click="
                        (student = false),
                        (employer = false),
                        (applicant = true),                        
                        (title = false),
                        (returnbtn = true)
                      ">I am an Applicant</v-btn>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="text-form pa-4">
                    <v-col>
                      <v-col cols="12" sm="12" md="12" v-show="employer" style="margin-top: -50px">
                        <employer-form />
                      </v-col>
                      <!-- student -->

                      <v-col cols="12" sm="12" md="12" v-show="student" style="margin-top: -50px">
                        <student-form />
                      </v-col>
                      <!-- end student -->
                      <!-- start applicant -->
                      <v-col cols="12" sm="12" md="12" v-show="applicant" style="margin-top: -50px">
                        <applicant-form />
                      </v-col>
                      <!-- end applicant -->
                      <div class="text-center pa-9 mt-n5">
                        <v-btn class="green--text mt-n12 " outlined v-show="returnbtn" small block @click="
                          (employer = false),
                          (applicant = false),
                          (student = false),
                          (returnbtn = false),
                          (title = true)">
                          <v-icon left>mdi-arrow-left</v-icon>Return </v-btn>
                      </div>
                      <v-col align="center" justify="space-around" class="mb-n10 mt-n12">
                        <p>Already a Member?</p>
                        <v-btn color="success" class="text-center mb-6" small dark
                          @click="$router.push({ name: 'LoginPage' })">
                          Log In
                        </v-btn>
                      </v-col>
                    </v-col>
                  </v-row>
                </v-card>
              </v-layout>
            </v-container>
          </v-form>
          <div class="text-center">
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
                  <!-- <v-spacer></v-spacer> -->
                  <!-- <v-btn color="success" text @click="$router.push({ name: 'LoginPage' }) ">
                    I Disagree
                  </v-btn> -->

                  <v-checkbox label="I agree" color="success" dense></v-checkbox>

                  <v-spacer></v-spacer>

                  <v-btn color="success" text @click="dialog = false">
                    Continue
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-col>
      </v-main>
    </v-app>
  </div>
</template>
    
<script scoped>
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {},

  data: function () {
    return {
      alertColor: "success",
      dialog: true,
      loading: false,
      snackbar: false,
      student: false,
      employer: false,
      applicant: false,
      title: true,
      returnbtn: false,


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
      
      
      
      