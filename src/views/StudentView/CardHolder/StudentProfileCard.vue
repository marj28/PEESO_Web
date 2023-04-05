<template>
  <div>
    <v-col>
      <v-card outlined color="#1B5E20">
        <v-card-title class="d-flex flex-column justify-space-between align-center">
          <v-avatar size="100">
            <img src="@/assets/download.png" />
          </v-avatar>
        </v-card-title>
        <v-card-text class="d-flex flex-column justify-space-between align-center" style="color: white">
          <p class="font-weight-black">Student Name</p>
        </v-card-text>
      </v-card>

      <v-stepper v-model="e1">
        <v-stepper-header style="font-size: 16px">
          <v-stepper-step :complete="e1 > 1" step="1" color="success">
            Personal Information
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" color="success">
            Student's Educational Attainment
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3" color="success">
            Other Information
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-form ref="formes" v-model="valid" lazy-validation>
            <!-- First Stepper -->
            <v-stepper-content step="1">
              <v-card>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="4">
                        <v-text-field label="Surname" required dense outlined autofocus color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="4">
                        <v-text-field label="First Name" outlined dense color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="4">
                        <v-text-field label="Middle Name" required dense outlined color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="3">
                        <v-text-field label="Date of Birth" type="date" required dense outlined color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="3">
                        <v-text-field label="Citizenship" required outlined dense color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="3">
                        <v-text-field label="Contact Details / Mobile No." type="number" required dense outlined
                          color="success" clearable :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="3">
                        <v-text-field label="Email Address" required outlined dense color="success" clearable type="email"
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="6">
                        <v-text-field label="Present Address" required outlined dense color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="6">
                        <v-text-field label="Permanent Address" required outlined dense color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="3">
                        <v-text-field label="Last School Year Attended 2021-2022" required outlined dense color="success"
                          clearable type="number" :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="3">
                        <v-text-field label="Grade Level S.Y. 2021-2022" required dense outlined color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="3">
                        <v-text-field label="School Attended for S.Y. 2022-2023" required dense outlined color="success"
                          clearable :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="3">
                        <v-text-field label="Grade Level for S.Y. 2022-2023" required outlined dense color="success"
                          clearable :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-select :items="parentsStatus" label="Current Status of Parents" outlined dense multiple
                          small-chips color="success" :rules="rules">
                        </v-select>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-spacer></v-spacer>
                      <v-col cols="12" sm="12" md="7">
                        <v-text-field label="Father's Full Name" required outlined dense color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="2">
                        <v-text-field label="Contact No." required outlined dense color="success" clearable type="number"
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="Occupation" required outlined dense color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="7">
                        <v-text-field label="Mother's Full Name" required outlined dense color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="2">
                        <v-text-field label="Contact No." required outlined dense color="success" clearable type="number"
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="Occupation" required outlined dense color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="7">
                        <v-text-field label="Guardian's Full Name" required outlined dense color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="2">
                        <v-text-field label="Contact No." required outlined dense color="success" clearable type="number"
                          :rules="rules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="Occupation" required outlined dense color="success" clearable
                          :rules="rules"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>

              <v-btn id="v-btn-c" color="success" @click="validate">
                Continue
              </v-btn>
            </v-stepper-content>

            <!-- Second Stepper -->
            <v-stepper-content step="2">
              <v-card>
                <v-card-text>
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <p class="font-weight-bold green--text" style="margin-top: -20px" autofocus>
                          ELEMENTARY
                        </p>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-text-field outlined autofocus dense color="success" clearable label="Name of School">
                      </v-text-field>
                      <v-text-field outlined dense label="Year / Level" color="success" clearable>
                      </v-text-field>
                      <v-text-field outlined dense color="success" clearable label="Date of Attendance" type="date">
                      </v-text-field>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <p class="font-weight-bold green--text" style="margin-top: -20px" autofocus>
                          JUNIOR HIGH SCHOOL
                        </p>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-text-field outlined dense color="success" clearable label="Name of School">
                      </v-text-field>
                      <v-text-field outlined dense label="Year / Level" color="success" clearable>
                      </v-text-field>
                      <v-text-field outlined dense color="success" clearable label="Date of Attendance" type="date">
                      </v-text-field>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <p class="font-weight-bold green--text" style="margin-top: -20px">
                          SENIOR HIGH SCHOOL
                        </p>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-text-field outlined dense color="success" clearable label="Name of School">
                      </v-text-field>
                      <v-text-field outlined dense label="Year / Level" color="success" clearable>
                      </v-text-field>
                      <v-text-field outlined dense color="success" clearable label="Date of Attendance" type="date">
                      </v-text-field>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>

              <v-btn id="v-btn-c" color="success" @click="e1 = 3">
                Continue
              </v-btn>
              <v-btn @click="e1 = 1" class="ma-2" text color="warning"> Back </v-btn>
            </v-stepper-content>

            <!-- Third Stepper -->
            <v-stepper-content step="3">
              <v-card>
                <v-card-text>
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" sm="12" md="6">
                        <p>
                          Do you have brother's & sister's enjoying the same
                          scholarship program?
                        </p>
                        <v-radio-group mandatory>
                          <v-radio label="Yes" value="Yes" color="success"></v-radio>
                          <v-radio label="No" value="No" color="success"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="12" sm="12" md="6">
                        <p>If yes, kindly state their name(s):</p>
                        <v-text-field hint="Names here" outlined dense color="success"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <p class="text-subtitle-2 text-center green--text">
                          We hereby certify the correctness of the above
                          information.
                        </p>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col cols="12" sm="12" md="4">
                        <v-file-input label="Attached ID here" dense color="success" outlined
                          prepend-icon="mdi-camera"></v-file-input>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>

              <v-btn @click="e1 = 2" class="ma-2" text color="warning"> Back </v-btn>
              <v-btn class="ma-2" color="success" @click="dialog = true" value="save">
                Save
              </v-btn>
            </v-stepper-content>
          </v-form>
        </v-stepper-items>
      </v-stepper>
      <v-row>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="text-h5"> UNSAVED CHANGES </v-card-title>
            <v-divider color="success"></v-divider>
            <v-card-text class="mt-2">
              You have made changes in your profile. Do you want to save or
              discard it?
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="orange darken-1" text @click="dialog = false">
                Discard
              </v-btn>

              <v-btn color="green darken-1" text @click="$router.push({ name: 'StudentDashboard' })" type="submit">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-col>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => ({
    valid: true,
    rules: [
      v => !!v || 'Required',
    ],
    e1: 1,
    dialog: false,
    activePicker: null,
    date: null,
    menu: false,
    includeFiles: true,
    enabled: false,

    parentsStatus: [
      "Living Together",
      "Senior Citizen",
      "Solo Parent",
      "OFW",
      "Separated",
      "4Ps",
      "Indigenous People",
      "Person with Disability",
    ],
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    validate() {
      this.$refs.formes.validate()
      let v = this.$refs.formes.validate()
      if (v) {
        this.e1 = this.e1 + 1
      }
    },
    scrollup() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
    