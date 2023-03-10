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
          <p class="font-weight-black">Applicant Name</p>
        </v-card-text>
      </v-card>
      <v-stepper v-model="e1">
        <v-stepper-header style="font-size: 14px">
          <v-stepper-step :complete="e1 > 1" step="1" style="height=" color="warning">
            Personal
            <v-spacer></v-spacer>
            Information
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" style="height=" color="warning">
            Employment
            <v-spacer></v-spacer>
            Information
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3" color="warning">
            Educational
            <v-spacer></v-spacer>
            Background
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 4" step="4" color="warning">
            Client's
            <v-spacer></v-spacer>
            Classification
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 5" step="5" color="warning">
            Technical/Vocational
            <v-spacer></v-spacer>
            and Other Training
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 6" step="6" color="warning">
            Eligibility/
            <v-spacer></v-spacer>
            Professional License
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 7" step="7" color="warning">
            Other Skills
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 8" step="8" color="warning">
            Requirements
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
                      <v-text-field label="Surname" outlined dense color="success" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-text-field label="First Name" outlined dense color="success" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-text-field label="Middle Name" required outlined dense color="success"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-select :items="['Jr.', 'Sr.', 'III', 'etc']" label="Suffix" required outlined dense
                        color="success">
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field v-model="date" label="Date of Birth" outlined type="date" dense color="success"
                        required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field label="Age" outlined dense color="success" required type="number">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                      <v-select :items="civilstatus" label="Civil Status" required outlined dense color="success">
                      </v-select>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                      <v-select :items="gender" label="Gender" required outlined dense color="success">
                      </v-select>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                      <v-select :items="religion" label="Religion" required outlined dense color="success">
                      </v-select>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                      <v-select :items="disabilities" label="Disability" required outlined multiple dense color="success"
                        small-chips>
                      </v-select>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                      <v-select :items="ethnicity" label="Ethnic Group" required outlined dense color="success">
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-file-input label="Attached ID here" outlined append-icon="mdi-camera" dense
                        color="success"></v-file-input>
                    </v-col>
                    <v-col cols="12" md="12" sm="12">
                      <p class="font-weight-bold" style="margin-top: -35px">
                        Home Address
                      </p>
                    </v-col>
                    <v-col cols="12" md="2" sm="12">
                      <v-text-field label="Region" required outlined dense color="success"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="2" sm="12">
                      <v-text-field label="Province" required outlined dense color="success"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="2" sm="12">
                      <v-text-field label="Municipality / City" required outlined dense color="success"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="2" sm="12">
                      <v-text-field label="Barangay" required outlined dense color="success"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="12">
                      <v-text-field label="House No. / Street / Village" required outlined dense
                        color="success"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="3" sm="12">
                      <v-text-field label="Contact Number" required outlined dense color="success"
                        type="number"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                      <v-text-field label="E-mail" required outlined dense color="success" type="email"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                      <v-text-field label="SSS" required outlined dense color="success"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                      <v-text-field label="TIN" required outlined dense color="success"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 2">
              Continue
            </v-btn>

            <v-btn id="v-btn-c" class="ma-4" @click="dialog = false">
              Cancel
            </v-btn>
          </v-stepper-content>

          <!-- Second Stepper -->
          <v-stepper-content step="2">
            <v-card id="step2">
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <p class="font-weight-bold">Employment Status:</p>
                    </v-col>
                    <v-col cols="12" sm="12" md="3" id="step2">
                      <v-radio-group row>
                        <v-radio label="Employed" color="success" value="Employed" hide-details class="font-weight-bold"
                          @click="(employed = true), (unemployed = false)">
                        </v-radio>

                        <v-container v-show="employed">
                          <v-radio-group row>
                            <v-radio class="ma-2 pa-2; font-weight-bold" label="Wage Employed" color="success"
                              value="Wage Employed" hide-details @change="
                                (wage_employed = true), (self_employed = false)
                              "></v-radio>
                            <v-container v-show="wage_employed">
                              <v-text-field class="pa-2" style="margin-top: -10px; margin-left: 20px" outlined
                                label="Name of Company" dense color="success"></v-text-field>
                              <v-text-field class="pa-2" style="margin-top: -30px; margin-left: 20px" outlined
                                label="Company Address" dense color="success"></v-text-field>
                              <v-text-field class="pa-2" style="margin-top: -30px; margin-left: 20px" outlined
                                label="Occupation" dense color="success"></v-text-field>
                            </v-container>
                            <v-radio v-model="ex4" class="ma-2 pa-2; font-weight-bold" label="Self-Employed"
                              color="success" value="Self-Employed" style="margin-top: -30px" hide-details @change="
                                (wage_employed = false), (self_employed = true)
                              "></v-radio>
                            <v-container v-show="self_employed">
                              <v-select class="pa-2" style="margin-left: 20px" dense color="success" multiple small-chips
                                :items="selfemployed" label="Please Specify" required outlined>
                              </v-select>
                            </v-container>
                          </v-radio-group>
                        </v-container>

                        <v-radio label="Unemployed" color="success" value="Unemployed" hide-details
                          class="font-weight-bold" style="" @change="(unemployed = true), (employed = false)"></v-radio>

                        <v-container v-show="unemployed">
                          <v-checkbox v-model="ex4" class="ma-2 pa-2" label="Fresh Graduate" color="secondary"
                            value="Fresh Graduate" hide-details></v-checkbox>
                          <v-checkbox v-model="ex4" class="ma-2 pa-2" label="Finished Contract" color="secondary"
                            value="Finished Contract" hide-details></v-checkbox>
                          <v-checkbox v-model="ex4" class="ma-2 pa-2" label="Resigned" color="secondary" value="Resigned"
                            hide-details></v-checkbox>
                          <v-checkbox v-model="ex4" class="ma-2 pa-2" label="Terminated" color="secondary"
                            value="Terminated" hide-details></v-checkbox>
                          <v-checkbox v-model="ex4" class="ma-2 pa-2" label="Retiree" color="secondary" value="Retiree"
                            hide-details></v-checkbox>
                          <v-text-field label="Others: " class="ma-2 pa-2" outlined dense color="success">
                          </v-text-field>
                        </v-container>
                      </v-radio-group>
                    </v-col>

                    <v-col cols="12" sm="12" md="3">
                      <p class="font-weight-bold">
                        Have you attended Pre-Employment Seminar for Local
                        Applicants (PESLA)?
                      </p>
                      <v-radio-group row>
                        <v-radio label="Yes" value="yes" @click="pesla = false" class="ma-2 pa-2"
                          color="success"></v-radio>

                        <v-radio label="No" value="no" @click="pesla = true" class="ma-2 pa-2" color="success"></v-radio>
                        <v-container v-show="pesla">
                          <p class="font-weight-bold">PESLA DETAILS</p>
                          <p>
                            We encourage you to attend PESLA. PEESO conducts
                            free PESLA every Frida, 1pm at Pagbabago Hall, 2nd
                            Floor, Center for Justice and Transformation
                            Building (Old SP Building), Tagum City. For more
                            information, message PEESO Tagum City Facebook page.
                          </p>
                          <p class="font-weight-bold">
                            Willing to attend PESLA?
                          </p>
                          <v-radio-group row>
                            <v-radio label="Yes" value="yes" color="success">
                            </v-radio>
                            <v-radio label="No" value="no" color="success">
                            </v-radio>
                          </v-radio-group>
                        </v-container>
                      </v-radio-group>
                    </v-col>

                    <v-col cols="12" sm="12" md="3">
                      <v-row>
                        <v-col>
                          <p class="font-weight-bold">Are you an OFW?</p>
                          <v-radio-group row>
                            <v-radio label="Yes" value="yes" @click="specify_country = true" class="ma-2 pa-2"
                              color="success"></v-radio>
                            <v-container v-show="specify_country">
                              <v-text-field label="Specify Country: " outlined color="success" dense></v-text-field>
                            </v-container>

                            <v-radio label="No" value="no" @click="specify_country = false" style="margin-top: -15px"
                              class="ma-2 pa-2" color="success"></v-radio>
                          </v-radio-group>
                          <p style="" class="font-weight-bold">
                            Are you a former OFW?
                          </p>
                          <v-radio-group row>
                            <v-radio label="Yes" value="yes" @click="former_ofw = true" class="ma-2 pa-2"
                              color="success"></v-radio>
                            <v-container v-show="former_ofw">
                              <v-text-field label="Latest Country of Deployment: " outlined dense
                                color="success"></v-text-field>
                              <v-text-field label="Month and Year of Return to Philippines: " outlined dense
                                color="success" type="date"></v-text-field>
                            </v-container>

                            <v-radio label="No" value="no" style="margin-top: -15px" class="ma-2 pa-2"
                              @click="former_ofw = false" color="success"></v-radio>
                          </v-radio-group>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" sm="12" md="3">
                      <p class="font-weight-bold">Are you a 4Ps beneficiary?</p>
                      <v-radio-group row>
                        <v-radio label="Yes" value="yes" @click="fourPs_beneficiary = true" color="success"
                          class="ma-2 pa-2"></v-radio>
                        <v-container v-show="fourPs_beneficiary">
                          <v-text-field label="Please provide Household ID No.: " outlined dense
                            color="success"></v-text-field>
                        </v-container>
                        <v-radio label="No" value="no" style="margin-top: -15px" @click="fourPs_beneficiary = false"
                          color="success" class="ma-2 pa-2"></v-radio>
                      </v-radio-group>
                      <v-spacer></v-spacer>
                      <v-col>
                        <p class="font-weight-bold">First Time Job Seeker?</p>
                        <v-radio-group row>
                          <v-radio label="Yes" value="yes" color="success"></v-radio>
                          <v-radio label="No" value="no" color="success"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 3">
              Continue
            </v-btn>
            <v-btn @click="e1 = 1" class="ma-2"> Back </v-btn>
          </v-stepper-content>

          <!-- Second Stepper -->
          <v-stepper-content step="3">
            <v-card>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="6" md="3">
                      <h3>Currently in School?</h3>
                      <v-radio-group row>
                        <v-radio label="Yes" value="yes" @click="highest_education = false" color="success"></v-radio>
                        <v-radio label="No" value="no" @click="highest_education = true" color="success"></v-radio>
                        <v-container v-show="highest_education">
                          <v-text-field outlined label="Please specify Highest Educational Attainment"
                            style="margin-top: 5px" dense color="success"></v-text-field>
                        </v-container>
                      </v-radio-group>
                    </v-col>
                    <p></p>
                    <v-col cols="12" sm="6" md="3">
                      <h3>Literacy Indicators:</h3>

                      <v-checkbox label="Can Read?" color="success"></v-checkbox>
                      <v-checkbox label="Can Write?" color="success"></v-checkbox>

                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                      <v-checkbox label="Can Perform Mathematical Operation?" color="success"
                        @click="mathematical_operation = true"></v-checkbox>
                      <v-container v-show="mathematical_operation" style="margin-top: -35px">
                        <v-checkbox label="Addition" value="a" color="success" style="margin-top: -10px"></v-checkbox>
                        <v-checkbox label="Multiplication" value="m" color="success"
                          style="margin-top: -10px"></v-checkbox>
                        <v-checkbox label="Subtraction" value="s" color="success" style="margin-top: -10px"></v-checkbox>
                      </v-container>
                    </v-col>
                    <!-- Elementary -->
                    <v-col cols="12" sm="12" md="6" lg="6">
                      <p class="font-weight-bold" style="margin-top: -20px">
                        ELEMENTARY
                      </p>

                      <v-spacer></v-spacer>
                      <v-radio-group row>
                        <v-radio label="Graduate" @click="(graduate = true), (undergraduate = false)" color="success"
                          value="graduate">
                        </v-radio>

                        <v-container v-show="graduate">
                          <v-row>
                            <v-col cols="12" md="12" sm="12" lg="12">
                              <v-text-field outlined label="Year Graduated" dense color="success"></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>

                        <v-radio label="Undergraduate" @click="(graduate = false), (undergraduate = true)" color="success"
                          value="undergraduate"></v-radio>
                        <v-container v-show="undergraduate">
                          <v-row>
                            <v-col cols="12" md="6" sm="6" lg="6">
                              <v-text-field outlined label="Level Reached" dense color="success">
                              </v-text-field>
                            </v-col>
                            <v-col cols="12" md="6" sm="6" lg="6">
                              <v-text-field outlined label="Year Last Attended" dense color="success">
                              </v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-radio-group>
                    </v-col>

                    <!-- Secondary -->
                    <v-col cols="12" sm="12" md="6" lg="6">
                      <p class="font-weight-bold" id="move">SECONDARY</p>

                      <v-spacer></v-spacer>
                      <v-radio-group row>
                        <v-radio label="Graduate" color="success" @click="
                          (sec_graduate = true), (sec_undergraduate = false)
                        " value="sec_graduate">
                        </v-radio>
                        <v-radio label="Undergraduate" color="success" @click="
                          (sec_graduate = false), (sec_undergraduate = true)
                        " value="sec_ungraduate">
                        </v-radio>
                        <v-container v-show="sec_graduate">
                          <v-radio-group>
                            <v-radio label="Secondary (Non-K12)" id="move" value="non_K" color="success"
                              @click="(non_K = true), (K = false)"></v-radio>
                            <v-container v-show="non_K">
                              <v-text-field outlined label="Year Graduated" dense color="success"
                                type="number"></v-text-field>
                            </v-container>
                            <v-radio label="Secondary (K12)" value="K" color="success"
                              @click="(non_K = false), (K = true)"></v-radio>
                          </v-radio-group>
                          <v-container v-show="K">
                            <v-text-field outlined label="Senior High Strand" dense color="success">
                            </v-text-field>
                            <v-text-field outlined label="Year Graduated" dense color="success">
                            </v-text-field>
                          </v-container>
                        </v-container>
                        <v-container v-show="sec_undergraduate">
                          <v-text-field outlined label="If Undergraduate (Level Reached)" dense color="success">
                          </v-text-field>
                          <v-text-field outlined label="If Undergraduate (Year Last Attended)" dense color="success">
                          </v-text-field>
                        </v-container>
                      </v-radio-group>
                    </v-col>

                    <!-- Tertiary -->
                    <v-col cols="12" sm="12" md="6" lg="6">
                      <p class="font-weight-bold">TERTIARY</p>

                      <v-spacer></v-spacer>

                      <v-radio-group row>
                        <v-radio label="Graduate" color="success" @click="
                          (ter_graduate = true), (ter_undergraduate = false)
                        " value="ter_graduate">
                        </v-radio>
                        <v-radio label="Undergraduate" color="success" @click="
                          (ter_graduate = false), (ter_undergraduate = true)
                        " value="ter_undergraduate">
                        </v-radio>
                        <v-container v-show="ter_graduate">
                          <v-text-field outlined label="Course" dense color="success">
                          </v-text-field>
                          <v-text-field outlined label="Year Graduated" dense color="success">
                          </v-text-field>
                        </v-container>
                        <v-container v-show="ter_undergraduate">
                          <v-text-field outlined label="Level Reached" dense color="success">
                          </v-text-field>
                          <v-text-field outlined label="Year Last Attended" dense color="success">
                          </v-text-field>
                        </v-container>
                      </v-radio-group>
                    </v-col>

                    <!-- Post-Graduate -->
                    <v-col cols="12" sm="12" md="6" lg="6">
                      <p class="font-weight-bold">
                        GRADUATE STUDIES/POST-GRADUATE
                      </p>
                      <v-spacer></v-spacer>
                      <v-radio-group row>
                        <v-radio label="Graduate" color="success" @click="
                          (post_graduates = true),
                          (post_undergraduate = false)
                        " value="post_graduates">
                        </v-radio>
                        <v-container v-show="post_graduates">
                          <v-text-field outlined label="Course" dense color="success">
                          </v-text-field>
                          <v-text-field outlined label="Year Graduated" dense color="success"></v-text-field>
                        </v-container>
                        <v-radio label="Undergraduate" color="success" @click="
                          (post_graduates = false),
                          (post_undergraduate = true)
                        " value="post_graduate">
                        </v-radio>

                        <v-container v-show="post_undergraduate">
                          <v-text-field outlined label="Level Reached" dense color="success">
                          </v-text-field>
                          <v-text-field outlined label="Year Last Attended" dense color="success">
                          </v-text-field>
                        </v-container>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 4">
              Continue
            </v-btn>
            <v-btn @click="e1 = 2" class="ma-2"> Back </v-btn>
          </v-stepper-content>

          <!-- Fourth Stepper -->
          <v-stepper-content step="4">
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

                    </v-col>
                    <v-col cols="12" sm="12" md="3" class="ma-2">

                      <v-checkbox label="Parent w/ malnourished children" color="success"></v-checkbox>
                      <v-checkbox label="Person Deprived with Liberty (PDL)" style="margin-top: -10px"
                        color="success"></v-checkbox>
                      <v-checkbox label="Former PDL" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Rebel Returnee" style="margin-top: -10px" color="success"></v-checkbox>

                    </v-col>
                    <v-col cols="12" sm="12" md="3" class="ma-2">

                      <v-checkbox label="Enumerated as Child Laborer" color="success"></v-checkbox>
                      <v-checkbox label="Child Laborer Parent" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Agrarian Reform Beneficiaries (ARB)" style="margin-top: -10px"
                        color="success"></v-checkbox>
                      <v-checkbox label="4Ps" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-text-field label="Others" outlined color="success" dense></v-text-field>

                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 5">
              Continue
            </v-btn>
            <v-btn @click="e1 = 3" class="ma-2"> Back </v-btn>
          </v-stepper-content>

          <!-- Fifth Stepper -->
          <v-stepper-content step="5">
            <v-card class="mb-6">
              <v-col cols="12" md="12" sm="12">
                <h4 class="green--text">
                  Technical / Vocational and Other Trainings
                </h4>
                <div v-for="(item, index) in form" :key="item">
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-text-field outlined label="Training / Vocational Course" dense color="success"
                        v-model="item.training_course" autofocus>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field outlined label="Hours of Training" type="number" dense color="success"
                        v-model="item.hours_training">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field outlined label="Training Institition" dense color="success"
                        v-model="item.training_institution">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field outlined label="Skills Acquired" dense color="success" v-model="item.skills_acquired">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field outlined label="Certificate Acquired" dense color="success"
                        v-model="item.certificate_acquired">
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
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 6">
              Continue
            </v-btn>
            <v-btn @click="e1 = 4" class="ma-2" outlined color="success">
              Back
            </v-btn>
          </v-stepper-content>

          <!-- Sixth Stepper -->
          <v-stepper-content step="6">
            <v-card class="mb-6">
              <v-col cols="12" md="12" sm="12">
                <h4 class="green--text">Eligibility</h4>
                <div v-for="(item, index) in forms" :key="item">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field outlined label="Eligibility Name" dense color="success" v-model="item.eligibility"
                        autofocus>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field outlined label="Date Taken" type="date" dense color="success"
                        v-model="item.Elgbtdate_taken">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-btn color="error" outlined @click="ElgbtRemoveRow(index)">
                        Remove
                      </v-btn>
                      <v-btn color="warning" @click="ElgbtAddRow"> Add </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
              <v-col cols="12" md="12" sm="12">
                <h4 class="green--text">Professional License</h4>
                <div v-for="(item, index) in forms2" :key="item">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field outlined label="Professional License" dense color="success"
                        v-model="item.professional" autofocus>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field outlined label="Date Taken" type="date" dense color="success"
                        v-model="item.PLdate_taken">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-btn color="error" outlined @click="PLRemoveRow(index)">
                        Remove
                      </v-btn>
                      <v-btn color="warning" @click="PLAddRow"> Add </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 7">
              Continue
            </v-btn>
            <v-btn @click="e1 = 5" class="ma-2"> Back </v-btn>
          </v-stepper-content>

          <!-- Seventh Stepper -->
          <v-stepper-content step="7">
            <v-card>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <p class="font-weight-bold">
                      Other Skills Acquired without Certificate
                    </p>
                    <v-col cols="12" sm="12" md="3" class="ma-2">

                      <v-checkbox label="Auto Mechanic" color="success"></v-checkbox>
                      <v-checkbox label="Beautician" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Carpentry Work" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Computer Literate" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Domestic Chores" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Driver" style="margin-top: -10px" color="success"></v-checkbox>

                    </v-col>
                    <v-col cols="12" sm="12" md="3" class="ma-2">

                      <v-checkbox label="Electrician" color="success"></v-checkbox>
                      <v-checkbox label="Embroidery" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Gardening" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Masonry" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Painter/Artist" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Painting Jobs" style="margin-top: -10px" color="success"></v-checkbox>

                    </v-col>
                    <v-col cols="12" sm="12" md="3" class="ma-2">

                      <v-checkbox label="Photography" color="success"></v-checkbox>
                      <v-checkbox label="Plumbing" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Sewing Dresses" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Stenography" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-checkbox label="Tailoring" style="margin-top: -10px" color="success"></v-checkbox>
                      <v-text-field label="Others" outlined dense color="success"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="6" sm="6">
                      <v-select :items="employability_skills" label="Employability Skills" required outlined dense
                        multiple color="success" persistent-hint hint="Top 3 skills that you possess">
                      </v-select>
                    </v-col>
                    <v-col cols="12" md="6" sm="6">
                      <v-select :items="employability_skills" label="Employability Skills" required outlined dense
                        multiple color="success" persistent-hint hint="Skills you don't have/least possess">
                      </v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 8">
              Continue
            </v-btn>
            <v-btn @click="e1 = 6" class="ma-2"> Back </v-btn>
          </v-stepper-content>

          <!-- Eighth Stepper -->
          <v-stepper-content step="8">
            <v-card>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-file-input v-model="files" color="green accent-4" counter label="Resume" multiple dense
                        placeholder="Select your files" prepend-icon="mdi-paperclip" outlined :show-size="1000">
                        <template v-slot:selection="{ index, text }">
                          <v-chip v-if="index < 2" color="green accent-4" dark label small>
                            {{ text }}
                          </v-chip>

                          <span v-else-if="index === 2" class="text-overline grey--text text--darken-3 mx-2">
                            +{{ files.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-file-input v-model="files" color="green accent-4" counter label="Application Letter" multiple
                        dense placeholder="Select your files" prepend-icon="mdi-paperclip" outlined :show-size="1000">
                        <template v-slot:selection="{ index, text }">
                          <v-chip v-if="index < 2" color="green accent-4" dark label small>
                            {{ text }}
                          </v-chip>

                          <span v-else-if="index === 2" class="text-overline grey--text text--darken-3 mx-2">
                            +{{ files.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click.stop="dialog = true">
              Save
            </v-btn>
            <v-btn @click="e1 = 7" class="ma-2"> Back </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
      <v-row>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="text-h5"> UNSAVED CHANGES </v-card-title>

            <v-card-text>
              You have made changes in your profile. Do you want to save or
              discard it?
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog = false">
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
import { reactive } from "vue";
export default {
  components: {
    reactive,
  },
  setup() {
    const form = reactive([
      {
        training_course: "",
        hours_training: "",
        training_institution: "",
        skills_acquired: "",
        certificate_acquired: "",
      },
    ]);
    const VocationalTrainingAddRow = () => {
      form.push({
        training_course: "",
        hours_training: "",
        training_institution: "",
        skills_acquired: "",
        certificate_acquired: "",
      });
    };
    const VocationalTrainingRemoveRow = (index) => {
      if (form.length > 1) {
        form.splice(index, 1);
      }
    };
    const forms = reactive([{ eligibility: "", date_taken: "" }]);
    const ElgbtAddRow = () => {
      forms.push({ eligibility: "", Elgbtdate_taken: "" });
    };
    const ElgbtRemoveRow = (index) => {
      if (forms.length > 1) {
        forms.splice(index, 1);
      }
    };
    const forms2 = reactive([{ professional: "", date_taken: "" }]);
    const PLAddRow = () => {
      forms2.push({ professional: "", PLdate_taken: "" });
    };
    const PLRemoveRow = (index) => {
      if (forms2.length > 1) {
        forms2.splice(index, 1);
      }
    };
    return {
      form,
      forms,
      forms2,
      VocationalTrainingAddRow,
      VocationalTrainingRemoveRow,
      PLAddRow,
      PLRemoveRow,
      ElgbtAddRow,
      ElgbtRemoveRow,
    };
  },
  data: () => ({
    e1: 1,
    pesla: false,
    employed: false,
    unemployed: false,
    wage_employed: false,
    self_employed: false,
    specify_country: false,
    former_ofw: false,
    highest_education: false,
    fourPs_beneficiary: false,
    mathematical_operation: false,
    graduate: false,
    undergraduate: false,
    sec_graduate: false,
    sec_undergraduate: false,
    non_K: false,
    K: false,
    ter_graduate: false,
    ter_undergraduate: false,
    post_graduates: false,
    post_undergraduate: false,

    dialog: false,
    activePicker: null,
    date: null,
    menu: false,
    includeFiles: true,
    enabled: false,
    samewithaddress: true,

    employability_skills: [
      "Planning and Organizing",
      "Social Perceptiveness",
      "Innovation",
      "Multi-Tasking",
      "Work Standards/Ethics",
      "Stress Tolerance",
      "Self-Motivation",
      "Problem Sensitivity",
      "Creative Problem Solving",
      "Teamwork",
      "Decision Making",
      "Critical Thinking",
      "Math Function Skills",
      "English Function Skills",
      "English Comprehension",
    ],
    disabilities: [
      "None",
      "Visual",
      "Hearing",
      "Speech",
      "Physical",
      "Mental",
      "Others (Please Specify)",
    ],
    ethnicity: [
      "None",
      "Mandaya",
      "Lumad",
      "Waray",
      "Bicolano",
      "Aeta",
      "Others (Please Specify)",
    ],
    civilstatus: ["Single", "Married", "Widowed"],
    gender: ["Female", "Male", "LGBTQ"],
    religion: [
      "Roman Catholic",
      "Islam",
      "Iglesia ni Cristo",
      "Seventh-day Adventist",
    ],
    selfemployed: [
      "Fisherman/Fisherfolk",
      "Vebdor/Retailer",
      "Home-based worker",
      "Transport",
      "Domestic Worker",
      "Freelancer",
      "Artisan/Craft Worker",
      "Farmer",
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
  },
};
</script>
    