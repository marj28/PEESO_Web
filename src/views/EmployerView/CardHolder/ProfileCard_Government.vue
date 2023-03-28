<template>
  <div>
    <v-col>
      <v-stepper v-model="e1">
        <v-stepper-header style="font-size: 14px">
          <v-stepper-step :complete="e1 > 1" step="1" style="height=" color="success">
            Agency Details
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" color="success">
            Agency Contact Details
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3" color="success">
            Requirements
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
                      <v-col cols="12" sm="12" md="8">
                        <v-text-field label="Agency Name" :rules=rules required outlined dense
                          color="green"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="12" md="4">
                        <v-text-field label="Acronym / Abbreviation" required outlined dense color="green" :rules=rules></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-select :items="agency_type" label="Agency Type" outlined dense color="green">
                        </v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-select :items="totalworkforce" label="Total Work Force" outlined dense color="green">
                        </v-select>
                      </v-col>
                      <v-col cols="12" md="3" sm="12">
                      <v-text-field label="Province" readonly outlined dense color="success" value="Davao del Norte"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="2" sm="12">
                      <v-text-field label="Municipality / City" readonly outlined dense color="success" value="Tagum City"
                        :rules="rules"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                      <v-select label="Baranggay" required outlined dense color="success" :items="baranggay"
                        :rules="rules"></v-select>
                    </v-col>
                    <v-col cols="12" md="4" sm="12">
                      <v-text-field label="House No. / Street / Village" required outlined dense color="success"
                        :rules="rules"></v-text-field>
                    </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
              </v-card>

              <v-btn id="v-btn-c" color="success" @click="validate(e1)">
                Continue
              </v-btn>
            </v-stepper-content>
          </v-form>
          <v-form ref="formes2" v-model="valid" lazy-validation>

            <!-- Second Stepper -->
            <v-stepper-content step="2">
              <v-card>
                <v-card-text>
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" sm="2" md="2">
                        <v-select :items="title" label="Title" outlined dense multiple small-chips color="green" :rules=rules>
                        </v-select>
                      </v-col>
                      <v-col cols="12" sm="10" md="10">
                        <v-text-field label="Contact Person (Full Name)" required outlined dense
                        :rules=rules color="green"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="3" md="3">
                        <v-text-field label="Position" required outlined dense color="green" :rules=rules></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="3" md="3">
                        <v-text-field label="Telephone Number" required type="number" outlined dense :rules=rules
                          color="green"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="3" md="3">
                        <v-text-field label="Mobile Number" required outlined dense type="number" :rules=rules
                          color="green"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="3" md="3">
                        <v-text-field label="E-mail Address" required outlined dense type="email" :rules=rules
                          color="green"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>

              <v-btn id="v-btn-c" color="success" @click="validate(e1)">
                Continue
              </v-btn>
              <v-btn @click="e1 = 1" class="ma-2" text color="warning"> Back </v-btn>
            </v-stepper-content>
          </v-form>
          <v-form ref="formes3" v-model="valid" lazy-validation>
            <!-- Third Stepper -->
            <v-stepper-content step="3">
              <v-card>
                <v-card-text>
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" sm="12" md="6">
                        <v-file-input v-model="files" color="green accent-4" counter label="Business License" multiple
                          dense placeholder="Select your files" prepend-icon="mdi-paperclip" outlined :show-size="1000"
                          :rules=rules>
                        </v-file-input>
                      </v-col>
                      <v-col cols="12" sm="12" md="6">
                        <v-file-input v-model="files_permit" color="green accent-4" counter label="Business Permit"
                          multiple dense placeholder="Select your files" prepend-icon="mdi-paperclip" outlined
                          :show-size="1000" :rules=rules>
                        </v-file-input>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>

              <v-btn id="v-btn-c" color="success" @click.stop="validate(e1)">
                Save
              </v-btn>
              <v-btn @click="e1 = 2" class="ma-2" text color="warning"> Back </v-btn>
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

              <v-btn color="green darken-1" text @click="dialog = false" type="submit">
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
    baranggay: [
      "APOKON",
      "BINCUNGAN",
      "BUSAON",
      "CANOCOTAN",
      "CUAMBOGAN",
      "LA FILIPINA",
      "LIBOGANON",
      "MADAUM",
      "MAGDUM",
      "MAGUGPO EAST",
      "MAGUGPO NORTH",
      "MAGUGPO POBLACION",
      "MAGUGPO SOUTH",
      "MAGUGPO WEST",
      "MANKILAM",
      "NEW BALAMBAN",
      "NUEVA FUERZA",
      "PAGSABANGAN",
      "PANDAPAN",
      "SAN AGUSTIN",
      "SAN ISIDRO",
      "SAN MIGUEL",
      "VISAYAN VILLAGE",
    ],
    title: [
      "Mr.",
      "Mrs."
    ],
    agency_type: [
      "State/Local University or College",
      "National Agency",
      "Government Office",
      "Government-owned and Controlled Corporation",
      "Government Financial Institution",
      "Infrastructure and Utilities Group",
    ],
    totalworkforce: [
      "Micro (1-9)",
      "Small (10-99)",
      "Medium (100-199)",
      "Large (200 and up)",
    ],
  }),
  methods: {
    validate(step) {
      // console.log(step)
      if (step == 1) {
        this.$refs.formes.validate()
        let v = this.$refs.formes.validate()
        if (v) {
          this.e1 = this.e1 + 1
        }
      }
      if (step == 2) {
        this.$refs.formes2.validate()
        let v = this.$refs.formes2.validate()
        if (v) {
          this.e1 = this.e1 + 1
        }
      }
      if (step == 3) {
        this.$refs.formes3.validate()
        let v = this.$refs.formes3.validate()
        if (v) {
          this.dialog = true
        }
      }

    },
  }
};
</script>
    