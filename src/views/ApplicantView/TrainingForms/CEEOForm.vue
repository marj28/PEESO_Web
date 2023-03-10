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
          Educational
          <v-spacer></v-spacer>
          Background
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4" color="warning">
          Family
          <v-spacer></v-spacer>
          Information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 5" step="5" color="warning">
          Family
          <v-spacer></v-spacer>
          Income
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 5" step="6" color="warning">
          Emergency
          <v-spacer></v-spacer>
          Contacts
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <!-- First Stepper -->
        <v-stepper-content step="1">
          <v-card id="step1">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="4">
                    <v-text-field label="Surname" required outlined color="success" dense clearable
                      autofocus></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="4">
                    <v-text-field label="First Name" required outlined color="success" dense clearable></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="4">
                    <v-text-field label="Middle Name" required outlined color="success" dense></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="12">
                    <p class="font-weight-bold green--text">Home Address</p>
                  </v-col>
                  <v-col cols="12" md="2" sm="12">
                    <v-text-field label="Zip Code" required outlined color="success" dense></v-text-field>
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
                  <v-col cols="12" sm="12" md="3">
                    <v-text-field label="Length of Stay in the Address" required outlined color="success"
                      dense></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="3">
                    <v-text-field label="Age" required outlined color="success" dense type="number"></v-text-field>
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
                    <v-text-field label="Cellphone No. / Landline No." required outlined color="success" dense
                      type="number">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Email Address / Facebook Account" required outlined color="success" dense
                      type="email">
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" md="3" sm="12">
                    <v-select :items="civilstatus" label="Civil Status" required outlined color="success" dense>
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="3" sm="12">
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

                  </v-col>
                  <v-col cols="12" sm="12" md="3" class="ma-2">

                    <v-checkbox label="Person with Disability" color="success"></v-checkbox>
                    <v-checkbox label="OFW Returnee" style="margin-top: -10px" color="success"></v-checkbox>
                    <v-checkbox label="N/A" style="margin-top: -10px" color="success"></v-checkbox>

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
          <v-card>
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <p class="font-weight-bold green--text">
                      Antas ng Edukasyon:
                    </p>
                  </v-col>
                  <v-row>
                    <v-col cols="12" sm="12" md="3">
                      <v-radio-group>
                        <v-radio label="Elementary Undergraduate" color="success"
                          value="elementary_undergraduate"></v-radio>
                        <v-radio label="Elementary Graduate" color="success" value="elementary_graduate"></v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-radio-group>
                        <v-radio label="High School Undergraduate" color="success"
                          value="highschool_undergraduate"></v-radio>
                        <v-radio label="High School Graduate" color="success" value="highschool_graduate"></v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-radio-group>
                        <v-radio label="College Undergraduate" color="success" value="college_undergraduate" @click="
                          (HSundergraduate_course = true),
                          (HSgraduate_course = false)
                        "></v-radio>
                        <v-text-field dense color="success" outlined required label="Course"
                          v-show="HSundergraduate_course"></v-text-field>
                        <v-radio label="College Graduate" color="success" value="college_graduate" @click="
                          (HSundergraduate_course = false),
                          (HSgraduate_course = true)
                        "></v-radio>
                        <v-text-field dense color="success" outlined required label="Course"
                          v-show="HSgraduate_course"></v-text-field>
                      </v-radio-group>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-radio-group>
                        <v-radio label="Vocational Undergraduate" color="success" value="college_undergraduate" @click="
                          (Cundergraduate_course = true),
                          (Cgraduate_course = false)
                        "></v-radio>
                        <v-text-field dense color="success" outlined required label="Course"
                          v-show="Cundergraduate_course"></v-text-field>
                        <v-radio label="Vocational Graduate" color="success" value="college_graduate" @click="
                          (Cundergraduate_course = false),
                          (Cgraduate_course = true)
                        "></v-radio>
                        <v-text-field dense color="success" outlined required label="Course"
                          v-show="Cgraduate_course"></v-text-field>
                      </v-radio-group>
                      <v-radio-group>
                        <v-radio color="success" value="tcertified" @click="Tcertified = true"
                          label="TESDA Certified"></v-radio>
                        <v-text-field label="Course" v-show="Tcertified" color="success" required outlined
                          dense></v-text-field>
                      </v-radio-group>
                    </v-col>
                  </v-row>
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
              <v-row>
                <v-col cols="12" md="6" lg="6" sm="12">
                  <h4 class="green--text">Type of Family</h4>
                  <v-radio-group>
                    <v-radio color="success" label="Immediate Family / Asawa at Anak" value="immediate_family"></v-radio>
                    <v-radio color="success" label="Extended Family / Kasama ang Kamag-anak"
                      value="extended_family"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12" md="6" lg="6" sm="12">
                  <v-row>
                    <v-col cols="12" md="6" lg="6" sm="12">
                      <v-text-field outlined label="Number of Family Members (include yourself)" dense color="success"
                        type="number" class="mt-6"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="6" sm="12">
                      <v-select :items="home_status" label="Home Status" required outlined color="success" dense
                        class="mt-6">
                      </v-select>
                    </v-col>
                  </v-row>
                  <v-col cols="12" md="12" lg="12" sm="12">
                    <h5 class="green--text">
                      Are you a member of the following?
                    </h5>
                    <v-row>
                      <v-col cols="12" md="6" lg="6">

                        <v-checkbox label="SSS " color="success" @click="SSSNo = true"></v-checkbox>
                        <v-text-field label="SSS Number" v-show="SSSNo" outlined color="success" dense></v-text-field>
                        <v-checkbox label="PhilHealth" style="margin-top: -10px" color="success"
                          @click="PhilHealthNo = true"></v-checkbox>
                        <v-text-field label="PhilHealth Number" v-show="PhilHealthNo" outlined color="success"
                          dense></v-text-field>

                      </v-col>
                      <v-col cols="12" md="6" lg="6">

                        <v-checkbox label="GSIS" color="success" @click="GSISNo = true"></v-checkbox>
                        <v-text-field label="GSIS Number" v-show="GSISNo" outlined color="success" dense></v-text-field>
                        <v-checkbox label="PAG-IBIG" style="margin-top: -10px" color="success"
                          @click="PagIbigNo = true"></v-checkbox>
                        <v-text-field label="Pag-Ibig Number" v-show="PagIbigNo" outlined color="success"
                          dense></v-text-field>
                        <v-checkbox label="Not a member" style="margin-top: -10px" color="success"></v-checkbox>

                      </v-col>
                    </v-row>
                  </v-col>
                </v-col>
              </v-row>
              <v-col cols="12" md="12" lg="12" sm="12">
                <h4 class="green--text">Family Members</h4>
              </v-col>
              <div v-for="(item, index) in form" :key="item">
                <v-row>
                  <v-col cols="12" md="3">
                    <v-text-field outlined label="Family Members Name" dense color="success" v-model="item.FMname">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-select :items="gender" label="Gender" required outlined color="success" dense>
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="1">
                    <v-text-field outlined label="Age" dense color="success" v-model="item.age" type="number">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-select :items="studying" label="Studying / Nag-aaral" required outlined color="success" dense>
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field outlined label="Level of Education" dense color="success"
                      v-model="item.levelofeducation">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-btn color="error" outlined @click="FMRemoveRow(index)">
                      Remove
                    </v-btn>
                    <v-btn color="warning" @click="FMAddRow"> Add </v-btn>
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
          <v-card class="mb-6">
            <v-col cols="12" md="12" sm="12">
              <v-row>
                <v-col cols="12" md="6" lg="6" sm="12">
                  <v-row>
                    <v-col cols="12" md="12" lg="12" sm="12">
                      <h4 class="green--text">Family Income</h4>
                      <v-text-field outlined label="Monthly Income of the Family" dense color="success" type="number"
                        class="mt-6"></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="6" lg="6" sm="12">
                  <h4 class="green--text">
                    Are there any other earners of the Family?
                  </h4>
                  <v-radio-group>
                    <v-radio color="success" label="Yes" value="yes" @click="earning_members = true"></v-radio>
                    <v-radio color="success" label="No" value="no" @click="earning_members = false"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-col cols="12" md="12" lg="12" sm="12">
                <h4 class="green--text">Family Members</h4>
              </v-col>
              <div v-for="(item, index) in forms" :key="item" v-show="earning_members">
                <v-row>
                  <v-col cols="12" md="3">
                    <v-text-field outlined label="Family Members Name" dense color="success" v-model="item.FMname">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field outlined label="Relationship ( Wife, Daughter, Son, etc)" dense color="success"
                      v-model="item.relationship">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field outlined label="Livelihood / Hanapbuhay" dense color="success" v-model="item.FMname">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field outlined label="Montly Income" dense color="success" v-model="item.FMname">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-btn color="error" outlined @click="EarnerRemoveRow(index)">
                      Remove
                    </v-btn>
                    <v-btn color="warning" @click="EarnerAddRow"> Add </v-btn>
                  </v-col>
                </v-row>
              </div>
              <v-row>
                <v-col cols="12" md="6" lg="6" sm="12">
                  Total Montly Income
                </v-col>
                <v-col cols="12" md="6" lg="6" sm="12">
                  <v-text-field label="Total Monthly Income" outlined dense color="success"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-card>

          <v-btn id="v-btn-c" color="warning" @click="e1 = 6"> Continue </v-btn>
          <v-btn @click="e1 = 4" class="ma-2" outlined color="success">
            Back
          </v-btn>
        </v-stepper-content>

        <!-- Sixth Stepper -->
        <v-stepper-content step="6">
          <v-card class="mb-6">
            <v-col cols="12" md="12" sm="12">
              <v-row>
                <v-col cols="12" md="12" lg="12" sm="12">
                  <h4 class="green--text">Emergency Contact Details</h4>
                  <p>In case of emergency, maaring tawagan o puntahan</p>
                </v-col>
                <v-col cols="12" md="8" lg="8" sm="12">
                  <v-text-field outlined label="Name / Pangalan" dense color="success"></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4" sm="12">
                  <v-text-field outlined label="Cellphone / Landline No." dense color="success"
                    type="number"></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4" sm="12">
                  <v-text-field outlined label="Relayon sa iskolar / Relationship with the scholar" dense color="success"
                    type="number"></v-text-field>
                </v-col>
                <v-col cols="12" md="8" lg="8" sm="12">
                  <v-text-field outlined label="Address" dense color="success"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6" sm="12">
                  <v-file-input show-size counter outlined clearable dense
                    label="Applicants Signature / Signature ng Applicant" color="success"></v-file-input>
                </v-col>
                <v-col cols="12" md="6" lg="6" sm="12">
                  <v-text-field outlined label="Date of Application" dense color="success" type="date"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-card>

          <v-btn id="v-btn-c" color="warning" @click="dialogSave = true">
            SAVE
          </v-btn>
          <v-btn @click="e1 = 5" class="ma-2" outlined color="success">
            Back
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-row>
      <v-dialog v-model="dialogSave" max-width="290">
        <v-card>
          <v-card-title class="text-h5"> CEE-O REGISTRATION </v-card-title>
          <v-divider />
          <v-card-text class="pa-4">
            You have registered your information in the CEEO-Star Program. Do you want to save or
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
        FMname: "",
        gender: "",
        age: "",
        studying: "",
        levelofeducation: "",
      },
    ]);
    const FMAddRow = () => {
      form.push({
        FMname: "",
        gender: "",
        age: "",
        studying: "",
        levelofeducation: "",
      });
    };
    const FMRemoveRow = (index) => {
      if (form.length > 1) {
        form.splice(index, 1);
      }
    };
    const forms = reactive([
      { training_course: "", duration: "", training_provider: "" },
    ]);
    const EarnerAddRow = () => {
      forms.push({ training_course: "", duration: "", training_provider: "" });
    };
    const EarnerRemoveRow = (index) => {
      if (forms.length > 1) {
        forms.splice(index, 1);
      }
    };
    return {
      form,
      forms,
      FMAddRow,
      EarnerAddRow,
      FMRemoveRow,
      EarnerRemoveRow,
    };
  },

  data() {
    return {
      e1: 1,
      menu: false,
      includeFiles: true,
      enabled: false,
      HSundergraduate_course: false,
      HSgraduate_course: false,
      Cundergraduate_course: false,
      Cgraduate_course: false,
      Tcertified: false,
      SSSNo: false,
      PhilHealthNo: false,
      GSISNo: false,
      PagIbigNo: false,
      earning_members: false,
      dialogSave: false,

      civilstatus: ["Single", "Married", "Widowed", "Separated", "Live-in"],
      home_status: ["Owned", "Rent", "Living with Relatives"],
      studying: ["Yes", "No"],
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