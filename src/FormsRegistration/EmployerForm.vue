<template>
  <div>
    <v-col>
      <h4 class="text-center pa-2 green--text">Employer Registration</h4>
      <h5 class="mb-2 green--text" style="margin-top: -10px">Contact Person</h5>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field class="textbox" autofocus v-model="last_name" type="text" label="Last Name" required color="green" outlined
            dense />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field class="textbox" v-model="first_name" type="text" label="First Name" required color="green"
            outlined dense />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field class="textbox mt-n6" v-model="middle_initial" type="text" label="M.I." required color="green" outlined
            dense />
        </v-col>
        <v-col cols="12" md="6">
          <v-select :items="suffix" color="success" label="Suffix" outlined dense class="mt-n6">
          </v-select>
        </v-col>
      </v-row>
      <v-divider> </v-divider>
      <h5 class="green--text pa-2">Login Credentials</h5>
      <v-text-field class="textbox mb-6" v-model="email" prepend-inner-icon="mdi mdi-account mdi-green" type="email"
        label="Email" color="green" outlined dense />
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <v-text-field class="textbox mt-n6" v-model="password" :rules="pwdRules" :type="passwordShow ? 'text' : 'password'"
            label="Password" prepend-inner-icon="mdi-key" color="green" outlined dense />
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <v-text-field class="textbox mt-n6" v-model="pw2" :rules="pwdConfirm" :type="passwordShow ? 'text' : 'password'"
            label="Confirm Password" prepend-inner-icon="mdi-key" color="green" outlined dense />
        </v-col>
      </v-row>
      <v-col align="center" justify="space-around">
        <v-btn type="submit" color="green" class="text-center" @click="employerregister" dark block>
          <v-icon left>mdi-account-check</v-icon>
          SIGN UP
        </v-btn>
      </v-col>
      
    </v-col>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: function () {
    return {
      suffix: ["Junior", "Senior", "III", "N/A"],
      alertColor: "success",
      text: `Please input fields`,
      snackbar: false,
      first_name: "",
      last_name: "",
      middle_initial: "",
      email: "",
      passwordShow: false,

      password: "",
      pw2: "",
      pwdRules: [(v) => !!v || "Password required"],
      pwdConfirm: [
        (v) => !!v || "Confirm password",
        (v) => v === this.password || "Passwords do not match",
      ],
    };
  },
  methods: {
    ...mapActions("users", ["Registration"]),
    userReg() {
      this.$createUserWithEmailAndPassword(
        this.$FBAUTH,
        this.email,
        this.password,
        this.first_name,
        this.last_name,
        this.middle_initial,
        this.suffix
      )
        .then((userCredentials) => {
          console.log(userCredentials);
          this.alertColor = "success";
          this.snackbar = true;
          this.text = "Registration Successful!";
          this.$router.push("EmployerDashboard");
          ///redirect somewhere
        })
        .catch((error) => {
          console.log(error.message);
          if (error.message == "Firebase: Error (auth/invalid-email).") {
            // alert("Pretty error message!")
            this.alertColor = "warning";
            this.snackbar = true;
            this.text = "Please input fields!";
          }
        });
    },
    employerregister() {
      this.userReg();
      return;
      // this.loading = true;
      // let data = new FormData();
      // data.append("business_name", this.business_name);
      // data.append("first_name", this.first_name);
      // data.append("last_name", this.last_name);
      // data.append("middle_initial", this.middle_initial);
      // data.append("suffix", this.suffix);
      // data.append("email", this.email);
      // data.append("password", this.password);

      // if (this.first_name.length == 0) {
      //   this.snackbar = true;
      // } else {
      //   this.Registration(data);
      //   setTimeout(() => {
      //     this.loading = false;
      //     this.$router.push("/EmployerDashboard");
      //   }, 2000);

      //   this.business_name = "";
      //   this.first_name = "";
      //   this.last_name = "";
      //   this.middle_initial = "";
      //   this.email = "";
      //   this.password = "";
      //   this.pw2 = "";
      //   this.$refs.form.reset();

      //   this.loginCorrection = "Message";
      //   this.dialog = true;
      // }
    },
  },
};
</script>





