<template>
  <div>
    <v-app id="inspire" class="background">
      <v-main class="d-flex justify-center align-center">
        <v-col cols="10" md="4" class="mx-auto">
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-container>
              <v-layout row wrap>
                <v-card class="mx-auto" style="margin-top: 150px">
                  <div class="text-center pa-4">
                    <h2 class="">
                      PEESO
                    </h2>
                  </div>

                  <v-row class="text-form pa-6">
                    <v-col>
                      <!-- start snackbar -->
                      <v-snackbar v-model="snackbar" :top="'top'" :color="alertColor">
                        {{ text }}

                        <template v-slot:action="{ attrs }">
                          <v-btn color="error" text v-bind="attrs" @click="snackbar = false">
                            Close
                          </v-btn>
                        </template>
                      </v-snackbar>
                      <!-- end of snacksbar -->
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="email" label="Email or Username" color="green" type="email"
                          prepend-inner-icon="mdi mdi-account mdi-green" required outlined dense></v-text-field>

                        <v-text-field v-model="password" label="Password" color="green" type="password"
                          prepend-inner-icon="mdi-key mdi-green" required outlined dense></v-text-field>
                        <v-btn type="submit" color="green" dark @click="userlogin" block>
                          <!-- <v-icon left>mdi-account-check</v-icon> -->
                          LOG IN
                        </v-btn>
                      </v-col>
                      <v-divider></v-divider>
                      <v-col align="center" justify="space-around" style="margin-bottom:  -90px">
                        New User?
                        <v-text class="green--text"  type="button" xs
                          @click="$router.push({ name: 'RegisterPage' })">
                          REGISTER
                      </v-text>
                      </v-col>
                    </v-col>
                  </v-row>

                  <v-container>
                  </v-container>
                </v-card>
              </v-layout>
            </v-container>
          </v-form>
        </v-col>
      </v-main>
    </v-app>

  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {},
  data: () => ({
    alertColor: 'success',
    inputcheck: false,
    email: "",
    password: "",
    loginCorrection: "",
    snackbar: false,
    text: `Please input fields`,
  }),
  methods: {
    ...mapActions("users", ["Loginuser"]),
    submitHandler() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => { }, 3000);
      }
    },
    userSignin() {
      if(this.email == "" || this.password==""){
        this.alertColor = 'success'
            this.snackbar = true
            this.text = "Please input fields."
            return
      }
      this.$signInWithEmailAndPassword(this.$FBAUTH, this.email, this.password)
        .then((userCredentials) => {
          console.log(userCredentials)
          this.alertColor = 'success'
          this.snackbar = true
          this.text = "Successful Login!"
          this.$router.push("EmployerDashboard");
          ///redirect somewhere
        }).catch(error => {
          console.log(error.message)
          if (error.message == "Firebase: Error (auth/invalid-email).") {
            // alert("Pretty error message!")
            this.alertColor = 'warning'
            this.snackbar = true
            this.text = "Login Failed. There is a problem with your email or password. Please try again."
          }
          else if (error.message == "Firebase: Error (auth/wrong-password).") {
            this.alertColor = 'warning'
            this.snackbar = true
            this.text = "Login Failed. There is a problem with your email or password. Please try again."
          }
          else if (error.message == "Firebase: Error (auth/user-not-found).") {
            this.alertColor = 'warning'
            this.snackbar = true
            this.text = "The email / password could not be found."
          }
        })
    },
    userlogin() {
      this.userSignin()
      return
      // let data = new FormData();
      // data.append("email", this.email);
      // data.append("password", this.password);
      // console.log(this.email);
      // console.log(this.password);
      // if (this.email.length == 0) {
      //   this.snackbar = true;
      // } else {
      //   this.Loginuser(data).then((e) => {
      //     console.log("Hello!");
      //     if (e == 0) {
      //       this.loginCorrection = "Incorrect Password!";
      //       this.dialog = true;
      //     } else if (e == 2) {
      //       this.loginCorrection = "No user account found!";
      //       this.dialog = true;
      //     } else {
      //       this.$router.push("admindashboard");
      //     }
      //   });
      // }
    },
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
  border-radius: 25px 25px 25px 25px;
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



