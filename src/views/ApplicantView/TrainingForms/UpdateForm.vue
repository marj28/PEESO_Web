<template>
  <v-card id="Employer">
    <v-stepper v-model="e1">
      <v-stepper-header style="font-size: 14px">
        <v-stepper-step :complete="e1 > 1" step="1" color="warning">
          Personal
          <v-spacer></v-spacer>
          Information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2" color="warning">
          Client's
          <v-spacer></v-spacer>
          Classification
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3" color="warning">
          Employment
          <v-spacer></v-spacer>
          Information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4" color="warning">
          Work History
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 5" step="5" color="warning">
          Educational
          <v-spacer></v-spacer>
          Background
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 6" step="6" color="warning">
          Technical/Vocational
          <v-spacer></v-spacer>
          Training
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 7" step="7" color="warning">
          Entrepreneurial
          <v-spacer></v-spacer>
          Training
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <!-- First Stepper -->
        <v-stepper-content step="1">
          <v-card id="step1">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="3">
                    <v-text-field label="Surname" required outlined color="success" dense clearable
                      autofocus></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="3">
                    <v-text-field label="First Name" required outlined color="success" dense clearable></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="3">
                    <v-text-field label="Middle Name" required outlined color="success" dense></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="3">
                    <v-select :items="suffix" label="Suffix" required outlined color="success" dense>
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="3">
                    <v-text-field label="Date of Birth" required outlined color="success" dense
                      type="date"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="3">
                    <v-text-field label="Place of Birth" required outlined color="success" dense>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Cellphone Number" required outlined color="success" dense type="number">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Email Address" required outlined color="success" dense type="email">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="12">
                    <p class="font-weight-bold green--text">
                      Permanent Address
                    </p>
                  </v-col>
                  <v-col cols="12" md="2" sm="12">
                    <v-text-field label="Region" required outlined color="success" dense></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" sm="12">
                    <v-text-field label="Province" required outlined color="success" dense></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" sm="12">
                    <v-text-field label="Municipality / City" required outlined color="success" dense></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" sm="12">
                    <v-text-field label="Barangay" required outlined color="success" dense></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="12">
                    <v-text-field label="House No. / Street / Village" required outlined color="success"
                      dense></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-select :items="civilstatus" label="Civil Status" required outlined color="success" dense>
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-select :items="gender" label="Gender" required outlined color="success" dense>
                    </v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>

          <v-btn id="v-btn-c" color="warning" @click="e1 = 2"> Continue </v-btn>

          <v-btn id="v-btn-c" class="ma-4" @click="$router.push({ path: 'AvailableTraining' })" color="success" outlined>
            Cancel
          </v-btn>
        </v-stepper-content>

        <!-- Second Stepper -->
        <v-stepper-content step="2">
          <v-card>
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <p class="font-weight-bold">Client's Classification</p>
                  <v-col cols="12" sm="12" md="3" class="ma-2">

                    <v-checkbox label="Senior Citizen" color="success"></v-checkbox>
                    <v-checkbox label="Solo-Parent" style="margin-top: -10px" color="success"></v-checkbox>
                    <v-checkbox label="IP / Muslim" style="margin-top: -10px" color="success"></v-checkbox>
                    <v-checkbox label="OFW Returnee" style="margin-top: -10px" color="success"></v-checkbox>
                    <v-checkbox style="margin-top: -10px" color="success"
                      label="Parent w/ malnourished children"></v-checkbox>
                    <v-checkbox style="margin-top: -10px" color="success" label="Hugpong Serbisyo Member"></v-checkbox>

                  </v-col>
                  <v-col cols="12" sm="12" md="3" class="ma-2">

                    <v-checkbox label="Person with Disability" color="success"></v-checkbox>
                    <v-checkbox label="Person Deprived with Liberty (PDL)" style="margin-top: -10px"
                      color="success"></v-checkbox>
                    <v-checkbox label="Former PDL" style="margin-top: -10px" color="success"></v-checkbox>
                    <v-checkbox label="Rebel Returnee" style="margin-top: -10px" color="success"></v-checkbox>
                    <v-checkbox label="Enumerated as Child Laborer" style="margin-top: -10px"
                      color="success"></v-checkbox>
                    <v-checkbox style="margin-top: -10px" color="success" label="4ps"></v-checkbox>

                  </v-col>
                  <v-col cols="12" sm="12" md="3" class="ma-2">

                    <v-checkbox label="STAND" color="success"></v-checkbox>
                    <v-checkbox label="TADS" style="margin-top: -10px" color="success"></v-checkbox>
                    <v-checkbox label="Agrarian Reform Beneficiaries (ARB)" style="margin-top: -10px"
                      color="success"></v-checkbox>
                    <v-checkbox label="Child Laborer Parent" style="margin-top: -10px" color="success"></v-checkbox>
                    <v-text-field label="Others" required outlined color="success" dense></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>

          <v-btn id="v-btn-c" color="warning" @click="e1 = 3"> Continue </v-btn>
          <v-btn @click="e1 = 1" class="ma-2" outlined color="success">
            Back
          </v-btn>
        </v-stepper-content>

        <!-- Third Stepper -->
        <v-stepper-content step="3">
          <v-card id="step2">
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <p class="font-weight-bold">Employment Status:</p>
                  </v-col>
                  <v-col cols="12" sm="12" md="6" id="step2">
                    <v-radio-group row>
                      <v-radio label="Employed" color="success" value="Employed" hide-details class="font-weight-bold"
                        @click="(employed = true), (unemployed = false)">
                      </v-radio>

                      <v-container v-show="employed">
                        <v-radio-group row>
                          <v-radio class="ma-2 pa-2; font-weight-bold" label="Wage Employed" color="success"
                            value="Wage Employed" hide-details></v-radio>
                          <v-radio class="ma-2 pa-2; font-weight-bold" label="Self-Employed" color="success"
                            value="Self-Employed" style="margin-top: -30px" hide-details></v-radio>
                        </v-radio-group>
                      </v-container>

                      <v-radio label="Unemployed" color="success" value="Unemployed" hide-details class="font-weight-bold"
                        style="" @change="(unemployed = true), (employed = false)"></v-radio>

                      <v-container v-show="unemployed">
                        <v-checkbox class="ma-2 pa-2" label="Fresh Graduate" color="success" value="Fresh Graduate"
                          hide-details></v-checkbox>
                        <v-checkbox class="ma-2 pa-2" label="Finished Contract" color="success" value="Finished Contract"
                          hide-details></v-checkbox>
                        <v-checkbox class="ma-2 pa-2" label="Resigned" color="success" value="Resigned"
                          hide-details></v-checkbox>
                        <v-checkbox class="ma-2 pa-2" label="Terminated" color="success" value="Terminated"
                          hide-details></v-checkbox>
                        <v-checkbox class="ma-2 pa-2" label="Retiree" color="success" value="Retiree"
                          hide-details></v-checkbox>
                        <v-text-field label="Others: " class="ma-2 pa-2" outlined dense color="success">
                        </v-text-field>
                      </v-container>
                    </v-radio-group>
                  </v-col>

                  <v-col cols="12" sm="12" md="6">
                    <v-row>
                      <v-col>
                        <p class="font-weight-bold">
                          Are you looking for work (Local)?
                        </p>
                        <v-radio-group row>
                          <v-radio label="Yes" value="yes" @click="preffered_occupationLocal = true" class="ma-2 pa-2"
                            color="success"></v-radio>
                          <v-container v-show="preffered_occupationLocal">
                            <v-text-field label="Preffered occupation? " outlined color="success" dense></v-text-field>
                          </v-container>

                          <v-radio label="No" value="no" @click="specify_country = false" style="margin-top: -15px"
                            class="ma-2 pa-2" color="success"></v-radio>
                        </v-radio-group>
                        <p style="" class="font-weight-bold">
                          Are you looking for work (Abroad)?
                        </p>
                        <v-radio-group row>
                          <v-radio label="Yes" value="yes" @click="preffered_occupationAbroad = true" class="ma-2 pa-2"
                            color="success"></v-radio>
                          <v-container v-show="preffered_occupationAbroad">
                            <v-text-field label="Preffered occupation? " outlined color="success" dense></v-text-field>
                          </v-container>

                          <v-radio label="No" value="no" style="margin-top: -15px" class="ma-2 pa-2"
                            @click="former_ofw = false" color="success"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>

          <v-btn id="v-btn-c" color="warning" @click="e1 = 4"> Continue </v-btn>
          <v-btn @click="e1 = 2" class="ma-2" outlined color="success">
            Back
          </v-btn>
        </v-stepper-content>

        <!-- Fourth Stepper -->
        <v-stepper-content step="4">
          <v-card class="mb-6">
            <v-col cols="12" md="12" sm="12">
              <h4 class="green--text">
                Work History
              </h4>
              <div v-for="(item, index) in form" :key="item">
                <v-row>
                  <v-col cols="12" md="2">
                    <v-text-field outlined label="Company" dense color="success" v-model="item.company" autofocus>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field outlined label="Address" dense color="success" v-model="item.address">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field outlined label="Position" dense color="success" v-model="item.position">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field outlined label="Inclusive Dates" type="date" dense color="success"
                      v-model="item.inclusive_date">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field outlined label="Status" dense color="success" v-model="item.status">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-btn color="error" outlined @click="WorkHistoryRemoveRow(index)">
                      Remove
                    </v-btn>
                    <v-btn color="warning" @click="WorkHistoryAddRow">
                      Add
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
              <!-- <v-btn padding-top="3px"  @click="saveItem" color="success">
                Save Item
              </v-btn> -->
            </v-col>
          </v-card>

          <v-btn id="v-btn-c" color="warning" @click="e1 = 5"> Continue </v-btn>
          <v-btn @click="e1 = 3" class="ma-2" outlined color="success">
            Back
          </v-btn>
        </v-stepper-content>

        <!-- Fifth Stepper -->
        <v-stepper-content step="5">
          <v-card>
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <v-row cols="12" sm="2" md="12" class="ma-2" id="move">
                    <v-col cols="12" sm="12" md="12">
                      <p class="font-weight-bold green--text" style="margin-top: -20px">
                        ELEMENTARY
                      </p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-text-field outlined label="School" required color="success" clearable dense autofocus>
                    </v-text-field>
                    <v-text-field outlined label="Year Graduated" required color="success" clearable dense type="number">
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Level Reached)" required color="success" clearable
                      dense>
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Year Last Attended)" required color="success"
                      clearable dense type="number">
                    </v-text-field>
                  </v-row>
                  <v-row cols="12" sm="2" md="12" class="ma-2">
                    <v-col cols="12" sm="12" md="12" id="move">
                      <p class="font-weight-bold green--text">SECONDARY</p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-text-field outlined label="School" required color="success" clearable dense>
                    </v-text-field>
                    <v-text-field outlined label="Course" required color="success" clearable dense>
                    </v-text-field>
                    <v-text-field outlined label="Year Graduated" type="number" required color="success" clearable dense>
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Level Reached)" required color="success" clearable
                      dense>
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Year Last Attended)" required color="success"
                      clearable dense type="number">
                    </v-text-field>
                  </v-row>
                  <v-row cols="12" sm="2" md="12" class="ma-2">
                    <v-col cols="12" sm="12" md="12" id="move">
                      <p class="font-weight-bold green--text">TERTIARY</p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-text-field outlined label="School" required color="success" clearable dense>
                    </v-text-field>
                    <v-text-field outlined label="Course" required color="success" clearable dense>
                    </v-text-field>
                    <v-text-field outlined label="Year Graduated" type="number" required color="success" clearable dense>
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Level Reached)" required color="success" clearable
                      dense>
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Year Last Attended)" required color="success"
                      clearable dense type="number">
                    </v-text-field>
                  </v-row>
                  <v-row cols="12" sm="2" md="12" class="ma-2">
                    <v-col cols="12" sm="12" md="12" id="move">
                      <p class="font-weight-bold green--text">
                        GRADUATE STUDIES/POST-GRADUATE
                      </p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-text-field outlined label="School" required color="success" clearable dense>
                    </v-text-field>
                    <v-text-field outlined label="Course" required color="success" clearable dense>
                    </v-text-field>
                    <v-text-field outlined label="Year Graduated" type="number" required color="success" clearable dense>
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Level Reached)" required color="success" clearable
                      dense>
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Year Last Attended)" required color="success"
                      clearable dense type="number">
                    </v-text-field>
                  </v-row>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>

          <v-btn id="v-btn-c" color="warning" @click="e1 = 6"> Continue </v-btn>
          <v-btn @click="e1 = 4" class="ma-2" color="success" outlined>
            Back
          </v-btn>
        </v-stepper-content>

        <!-- Sixth Stepper -->
        <v-stepper-content step="6">
          <v-card>
            <v-card-text>
              <h4 class="green--text">
                Technical / Vocational and Other Training
              </h4>
              <v-col cols="12" md="12" sm="12">
                <div v-for="(item, index) in forms" :key="item">
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field outlined label="Training / Vocational Course" dense color="success"
                        v-model="item.training_course" autofocus>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field outlined label="Duration" dense color="success" v-model="item.duration">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field outlined label="Training Provider" dense color="success"
                        v-model="item.training_provider">
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" md="2">
                      <v-btn color="error" outlined @click="VocationalTrainingRemoveRow(index)">
                        Remove
                      </v-btn>
                      <v-btn color="warning" @click="VocationalTrainingAddRow">
                        Add
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
                <!-- <v-btn padding-top="3px"  @click="saveItem" color="success">
                Save Item
              </v-btn> -->
              </v-col>
            </v-card-text>
          </v-card>

          <v-btn id="v-btn-c" color="warning" @click="e1 = 7"> Continue </v-btn>
          <v-btn @click="e1 = 5" class="ma-2" color="success" outlined>
            Back
          </v-btn>
        </v-stepper-content>

        <!-- Seventh Stepper -->
        <v-stepper-content step="7">
          <v-card>
            <v-card-text>
              <h4 class="font-weight-bold">
                Entrepreneurial Training Application (Check your desired
                training)
              </h4>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="12" md="4">

                    <v-checkbox label="Call Center 101 Training" color="success"></v-checkbox>
                    <v-checkbox label="Visual Graphic Designing" color="success" style="margin-top: -10px"></v-checkbox>
                    <v-checkbox label="Social Media Marketing" color="success" style="margin-top: -10px"></v-checkbox>
                    <v-checkbox label="Appointment Setting Bookkeeping" color="success"
                      style="margin-top: -10px"></v-checkbox>
                    <v-checkbox label="Web Designing" color="success" style="margin-top: -10px"></v-checkbox>

                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>

          <v-btn id="v-btn-c" color="success" @click="dialogSave = true"> Save </v-btn>
          <v-btn @click="e1 = 6" class="ma-2" color="success" outlined>
            Back
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-row>
      <v-dialog v-model="dialogSave" max-width="290">
        <v-card>
          <v-card-title class="text-h5"> PROJECT UPDATE REGISTRATION </v-card-title>
          <v-divider />
          <v-card-text class="pa-4">
            You have registered your information in the CBTED Program. Do you want to save or
            discard it?
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialogSave = false">
              Discard
            </v-btn>

            <v-btn color="green darken-1" text @click="dialogSave = false" type="submit">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-card>
</template>
<script>
import { reactive } from "vue";

export default {
  components: {
    reactive,
  },
  setup() {
    const form = reactive([
      {
        company: "",
        address: "",
        position: "",
        inclusive_date: "",
        status: "",
      },
    ]);
    const WorkHistoryAddRow = () => {
      form.push({
        company: "",
        address: "",
        position: "",
        inclusive_date: "",
        status: "",
      });
    };
    const WorkHistoryRemoveRow = (index) => {
      if (form.length > 1) {
        form.splice(index, 1);
      }
    };
    const forms = reactive([
      { training_course: "", duration: "", training_provider: "" },
    ]);
    const VocationalTrainingAddRow = () => {
      forms.push({ training_course: "", duration: "", training_provider: "" });
    };
    const VocationalTrainingRemoveRow = (index) => {
      if (forms.length > 1) {
        forms.splice(index, 1);
      }
    };
    return {
      form,
      forms,
      WorkHistoryAddRow,
      VocationalTrainingAddRow,
      WorkHistoryRemoveRow,
      VocationalTrainingRemoveRow,
    };
  },

  data() {
    return {
      e1: 1,
      dialog: false,
      date: null,
      menu: false,
      includeFiles: true,
      enabled: false,

      employed: false,
      unemployed: false,
      preffered_occupationLocal: false,
      preffered_occupationAbroad: false,
      dialogSave: false,

      civilstatus: ["Single", "Married", "Widowed", "Separated", "Live-in"],
      gender: ["Female", "Male"],
      suffix: ["Jr.", "Sr.", "III", "etc"],
    };
  },
};
</script>

<style scoped>
#Employer .v-stepper-header {
  font-size: 10px;
}

#step1 .v-text-field {
  margin-top: -20px;
}

#move {
  margin-top: -50px;
}
</style>