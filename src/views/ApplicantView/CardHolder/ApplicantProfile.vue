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
          <p class="font-weight-black">Applicant Name:</p>
        </v-card-text>
      </v-card>

      <v-stepper v-model="e1">

        <v-stepper-header style="font-size: 14px">
          <v-stepper-step :complete="e1 > 1" step="1" style="height=" color="success">
            Personal
            <v-spacer></v-spacer>
            Information
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" style="height=" color="success">
            Employment
            <v-spacer></v-spacer>
            Information
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3" color="success">
            Educational
            <v-spacer></v-spacer>
            Background
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 4" step="4" color="success">
            Client's
            <v-spacer></v-spacer>
            Classification
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 5" step="5" color="success">
            Technical/Vocational
            <v-spacer></v-spacer>
            and Other Training
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 6" step="6" color="success">
            Eligibility/
            <v-spacer></v-spacer>
            Professional License
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 7" step="7" color="success">
            Other Skills
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 8" step="8" color="success">
            Requirements
          </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <!-- First Stepper -->
          <v-form ref="formes" v-model="valid" lazy-validation>


            <v-stepper-content step="1">

              <v-card id="step1">
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field label="Surname" v-model="value.surname" outlined dense color="success" required
                        :rules="[rules.required]" autofocus></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field label="First Name" v-model="value.firstname" outlined dense color="success" required
                        :rules="[rules.required]"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field label="Middle Name" v-model="value.middlename" :rules="[rules.required]" outlined
                        dense color="success"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-select :items="suffix" :rules="[rules.required]" label="Suffix" v-model="value.suffix" required
                        outlined dense color="success">
                      </v-select>
                    </v-col>

                    <v-col cols="12" sm="6" md="3">
                      <v-text-field v-model="value.birthDate" @input="calculateAge(birthDate)" label="Date of Birth"
                        outlined type="date" dense color="success" :rules="[rules.required]"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field label="Age" dense outlined color="success" readonly :value="years"
                        :rules="[rules.required]" v-model="value.age">
                      </v-text-field>

                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                      <v-select :items="civilstatus" v-model="value.civilstatus" label="Civil Status" required outlined
                        dense color="success" :rules="[rules.required]">
                      </v-select>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                      <v-select :items="sex" label="Sex" v-model="value.sex" required outlined dense color="success"
                        :rules="[rules.required]">
                      </v-select>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                      <v-select :items="religion" label="Religion" v-model="value.religion" required outlined dense
                        color="success">
                      </v-select>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                      <v-select :items="disabilities" label="Disability" v-model="value.disability" required outlined
                        dense color="success">
                      </v-select>
                    </v-col>
                    <v-col cols=" 12" md="3" sm="6">
                      <v-select :items="ethnicity" label="Ethnic Group" required v-model="value.ethnicity" outlined dense
                        color="success">
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-file-input label="Attached ID here" accept="image/x-png,image/gif,image/jpeg" outlined
                        v-model="value.id" append-icon="mdi-camera" dense color="success"
                        :rules="[rules.required]"></v-file-input>
                    </v-col>
                    <v-col cols="12" md="12" sm="12">
                      <p class="font-weight-bold" style="margin-top: -35px">
                        Home Address
                      </p>
                    </v-col>
                    <v-col cols="12" md="2" sm="12">
                      <v-select v-model="region" :items="address" item-text="region_name" outlined dense color="success"
                        label="Region" @change="formattype('REGION')" return-object single-line>
                      </v-select>

                    </v-col>
                    <v-col cols="12" md="2" sm="12">
                      <v-select v-model="province" :items="provincename" :disabled="region == '' ? true : false" outlined
                        dense color="success" label="Province" @change="formattype('PROVINCE')" return-object single-line>

                      </v-select>
                    </v-col>
                    <v-col cols="12" md="2" sm="12">
                      <v-select v-model="city" :items="cityname" :disabled="province == '' ? true : false" outlined dense
                        label="Municipality / City" @change="formattype('CITY')" return-object color="success"
                        single-line>

                      </v-select>
                    </v-col>
                    <v-col cols="12" md="2" sm="12">
                      <v-select label="Baranggay" :disabled="city == '' ? true : false" outlined dense color="success"
                        :items="brgyname" :rules="[rules.required]"></v-select>
                    </v-col>
                    <v-col cols="12" md="4" sm="12">
                      <v-text-field label="House No. / Street / Village" required outlined dense color="success"
                        :rules="[rules.required]"  v-model="value.house"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="3" sm="12">
                      <v-text-field label="Contact Number" required outlined dense color="success" type="number"
                        hide-spin-buttons maxlength="11" oninput="this.value=this.value.slice(0,this.maxLength)"
                        :rules="[rules.required, rules.counter]" v-model="value.number"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                      <v-text-field label="E-mail" required outlined dense color="success" type="email"
                        :rules="[rules.required, rules.email]" v-model="value.email"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                      <v-text-field label="SSS" required outlined dense color="success" v-model="value.sss"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                      <v-text-field label="TIN" required outlined dense color="success" v-model="value.tin"></v-text-field>
                    </v-col>
                  </v-row>
                  <!-- </v-form> -->
                  <small>*indicates required field</small>
                </v-card-text>
              </v-card>


              <v-btn id="v-btn-c" color="success" @click="validate()" class="mt-2">
                Continue
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
                            @change="(employed = true), (unemployed = false)">
                          </v-radio>
                          <v-radio label="Unemployed" color="success" value="Unemployed" hide-details
                            class="font-weight-bold" style="" @change="(unemployed = true), (employed = false)">
                          </v-radio>

                          <v-container v-show="employed">
                            <v-radio-group row>
                              <v-radio class="ma-2 pa-2; font-weight-bold" label="Wage Employed" color="success"
                                value="Wage Employed" hide-details @change="
                                  (wage_employed = true), (self_employed = false)
                                "></v-radio>
                              <v-radio class="ma-2 pa-2; font-weight-bold" label="Self-Employed" color="success"
                                value="Self-Employed" style="margin-top: -30px" hide-details @change="
                                  (wage_employed = false), (self_employed = true)
                                "></v-radio>
                              <v-container v-show="wage_employed">
                                <v-text-field class="pa-2" style="margin-top: -10px; margin-left:" outlined
                                  label="Name of Company" dense color="success"></v-text-field>
                                <v-text-field class="pa-2" style="margin-top: -30px; margin-left: " outlined
                                  label="Company Address" dense color="success"></v-text-field>
                                <v-text-field class="pa-2" style="margin-top: -30px; margin-left: " outlined
                                  label="Occupation" dense color="success"></v-text-field>
                              </v-container>

                              <v-container v-show="self_employed">
                                <v-select class="pa-2" style="margin-left:" dense color="success" multiple small-chips
                                  :items="selfemployed" label="Please Specify" required outlined>
                                </v-select>
                              </v-container>
                            </v-radio-group>
                          </v-container>



                          <v-container v-show="unemployed">
                            <v-checkbox class="ma-2 pa-2" label="Fresh Graduate" color="secondary" value="Fresh Graduate"
                              hide-details></v-checkbox>
                            <v-checkbox class="ma-2 pa-2" label="Finished Contract" color="secondary"
                              value="Finished Contract" hide-details></v-checkbox>
                            <v-checkbox class="ma-2 pa-2" label="Resigned" color="secondary" value="Resigned"
                              hide-details></v-checkbox>
                            <v-checkbox class="ma-2 pa-2" label="Terminated" color="secondary" value="Terminated"
                              hide-details></v-checkbox>
                            <v-checkbox class="ma-2 pa-2" label="Retiree" color="secondary" value="Retiree"
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

                          <v-radio label="No" value="no" @click="pesla = true" class="ma-2 pa-2"
                            color="success"></v-radio>
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
                              <v-radio label="No" value="no" @click="specify_country = false" style="margin-top: -15px"
                                class="ma-2 pa-2" color="success"></v-radio>
                              <v-container v-show="specify_country">
                                <v-text-field label="Specify Country: " outlined color="success" dense></v-text-field>
                              </v-container>
                            </v-radio-group>
                            <p style="" class="font-weight-bold">
                              Are you a former OFW?
                            </p>
                            <v-radio-group row>
                              <v-radio label="Yes" value="yes" @click="former_ofw = true" class="ma-2 pa-2"
                                color="success"></v-radio>
                              <v-radio label="No" value="no" style="margin-top: -15px" class="ma-2 pa-2"
                                @click="former_ofw = false" color="success"></v-radio>
                              <v-container v-show="former_ofw">
                                <v-text-field label="Latest Country of Deployment: " outlined dense
                                  color="success"></v-text-field>
                                <v-text-field label="Month and Year of Return to Philippines: " outlined dense
                                  color="success" type="date"></v-text-field>
                              </v-container>
                            </v-radio-group>
                          </v-col>
                        </v-row>
                      </v-col>

                      <v-col cols="12" sm="12" md="3">
                        <p class="font-weight-bold">Are you a 4Ps beneficiary?</p>
                        <v-radio-group row>
                          <v-radio label="Yes" value="yes" @click="fourPs_beneficiary = true" color="success"
                            class="ma-2 pa-2"></v-radio>
                          <v-radio label="No" value="no" style="margin-top: -15px" @click="fourPs_beneficiary = false"
                            color="success" class="ma-2 pa-2"></v-radio>
                          <v-container v-show="fourPs_beneficiary">
                            <v-text-field label="Please provide Household ID No.: " outlined dense
                              color="success"></v-text-field>
                          </v-container>
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

            <!-- Third
             Stepper -->
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
                          <v-text-field outlined label="Specify Highest Educational Attainment" style="margin-top: 10px"
                            v-show="highest_education" dense color="success"></v-text-field>
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
                          <v-checkbox label="Subtraction" value="s" color="success"
                            style="margin-top: -10px"></v-checkbox>
                        </v-container>
                      </v-col>
                      <!-- Elementary -->
                      <v-col cols="12" sm="12" md="6" lg="6" v-show="elementarylvl">
                        <p class="font-weight-bold" style="margin-top: 0px">
                          ELEMENTARY
                        </p>

                        <v-spacer></v-spacer>
                        <v-radio-group row>
                          <v-radio label="Graduate"
                            @click="(graduate = true), (undergraduate = false), (secondarylvl = true), (tertiarylvl = true), (graduatelvl = true)"
                            color="success" value="graduate">
                          </v-radio>
                          <v-radio label="Undergraduate"
                            @click="(graduate = false), (undergraduate = true), (secondarylvl = false), (tertiarylvl = false), (graduatelvl = false)"
                            color="success" value="undergraduate">
                          </v-radio>
                          <v-container v-show="graduate">
                            <v-row>
                              <v-col cols="12" md="12" sm="12" lg="12">
                                <v-text-field outlined label="Year Graduated" dense color="success"
                                  type="number"></v-text-field>
                                <v-text-field outlined label="School Graduated" dense color="success"
                                  type="text"></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                          <v-container v-show="undergraduate">
                            <v-row>
                              <v-col cols="12" md="6" sm="6" lg="6">
                                <v-select :items="levelreachedElem" label="Level reached" required outlined dense
                                  color="success">
                                </v-select>
                              </v-col>
                              <v-col cols="12" md="6" sm="6" lg="6">
                                <v-text-field outlined label="Year Last Attended" dense color="success" type="number">
                                </v-text-field>
                              </v-col>
                              <v-text-field outlined label="School Graduated" dense color="success"
                                type="text"></v-text-field>
                            </v-row>
                          </v-container>
                        </v-radio-group>
                      </v-col>

                      <!-- Secondary -->
                      <v-col cols="12" sm="12" md="6" lg="6" v-show="secondarylvl">
                        <p class="font-weight-bold" id="move">SECONDARY</p>

                        <v-spacer></v-spacer>
                        <v-radio-group row>
                          <v-radio label="Graduate" color="success" @click="
                            (sec_graduate = true), (sec_undergraduate = false), (elementarylvl = true), (tertiarylvl = true), (graduatelvl = true)
                          " value="sec_graduate">
                          </v-radio>
                          <v-radio label="Undergraduate" color="success" @click="
                            (sec_graduate = false), (sec_undergraduate = true), (elementarylvl = true), (tertiarylvl = false), (graduatelvl = false)
                          " value="sec_ungraduate">
                          </v-radio>
                          <v-container v-show="sec_graduate">
                            <v-radio-group>
                              <v-radio label="Secondary (Non-K12)" id="move" value="non_K" color="success"
                                @click="(non_K = true), (K = false)"></v-radio>
                              <v-radio label="Secondary (K12)" value="K" color="success"
                                @click="(non_K = false), (K = true)"></v-radio>
                              <div v-show="non_K">
                                <v-text-field outlined label="Year Graduated" dense color="success"
                                  type="number"></v-text-field>
                                <v-text-field outlined label="School Graduated" dense color="success"
                                  type="text"></v-text-field>
                              </div>
                              <div v-show="K">
                                <v-select :items="strand" label="SHS Strand" required outlined dense color="success">
                                </v-select>
                                <v-text-field outlined label="Year Graduated" dense color="success" type="number">
                                </v-text-field>
                                <v-text-field outlined label="School Graduated" dense color="success"
                                  type="text"></v-text-field>
                              </div>
                            </v-radio-group>

                          </v-container>
                          <v-container v-show="sec_undergraduate">
                            <!-- <v-radio-group>
                            <v-radio label="Secondary (Non-K12)" id="move" value="non_K" color="success"
                              @click="(non_K = true), (K = false)"></v-radio>
                            <v-radio label="Secondary (K12)" value="K" color="success"
                              @click="(non_K = false), (K = true)"></v-radio>
                            <div v-show="non_K">
                              <v-text-field outlined label="Year Graduated" dense color="success"
                                type="number"></v-text-field>
                            </div>
                            <div v-show="K">
                              <v-select :items="strand" label="SHS Strand" required outlined dense color="success">
                              </v-select>
                              <v-text-field outlined label="Year Graduated" dense color="success" type="number">
                              </v-text-field>
                            </div>
                          </v-radio-group> -->
                            <v-select :items="levelreachedSec" label="Level Reached" required outlined dense
                              color="success">
                            </v-select>
                            <v-text-field outlined label="Year Last Attended" dense color="success" type="number">
                            </v-text-field>
                            <v-text-field outlined label="School Graduated" dense color="success"
                              type="text"></v-text-field>
                          </v-container>
                        </v-radio-group>
                      </v-col>

                      <!-- Tertiary -->
                      <v-col cols="12" sm="12" md="6" lg="6" v-show="tertiarylvl">
                        <p class="font-weight-bold">TERTIARY</p>

                        <v-spacer></v-spacer>

                        <v-radio-group row>
                          <v-radio label="Graduate" color="success" @click="
                            (ter_graduate = true), (ter_undergraduate = false), (secondarylvl = true), (elementarylvl = true), (graduatelvl = true)
                          " value="ter_graduate">
                          </v-radio>
                          <v-radio label="Undergraduate" color="success" @click="
                            (ter_graduate = false), (ter_undergraduate = true), (secondarylvl = true), (elementarylvl = true), (graduatelvl = false)
                          " value="ter_undergraduate">
                          </v-radio>
                          <v-container v-show="ter_graduate">
                            <v-select :items="course" label="Course" required outlined dense color="success">
                            </v-select>
                            <v-text-field outlined label="Year Graduated" dense color="success" type="number">
                            </v-text-field>
                            <v-text-field outlined label="School Graduated" dense color="success"
                              type="text"></v-text-field>
                          </v-container>
                          <v-container v-show="ter_undergraduate">
                            <v-select :items="levelreachedTer" label="Level Reached" required outlined dense
                              color="success">
                            </v-select>
                            <v-text-field outlined label="Year Last Attended" dense color="success" type="number">
                            </v-text-field>
                            <v-text-field outlined label="School Graduated" dense color="success"
                              type="text"></v-text-field>
                          </v-container>
                        </v-radio-group>
                      </v-col>

                      <!-- Post-Graduate -->
                      <v-col cols="12" sm="12" md="6" lg="6" v-show="graduatelvl">
                        <p class="font-weight-bold">
                          GRADUATE STUDIES/POST-GRADUATE
                        </p>
                        <v-spacer></v-spacer>
                        <v-radio-group row>
                          <v-radio label="Graduate" color="success" @click="
                            (post_graduates = true),
                            (post_undergraduate = false), (elementarylvl = true), (tertiarylvl = true), (secondarylvl = true)
                          " value="post_graduates">
                          </v-radio>
                          <v-radio label="Undergraduate" color="success" @click="
                            (post_graduates = false),
                            (post_undergraduate = true), (elementarylvl = true), (tertiarylvl = true), (secondarylvl = true)
                          " value="post_graduate">
                          </v-radio>
                          <v-container v-show="post_graduates">
                            <v-select :items="courseGraduateStudies" label="Course" required outlined dense
                              color="success">
                            </v-select>
                            <v-text-field outlined label="Year Graduated" dense color="success"
                              type="number"></v-text-field>
                            <v-text-field outlined label="School Graduated" dense color="success"
                              type="text"></v-text-field>
                          </v-container>
                          <v-container v-show="post_undergraduate">
                            <v-select :items="courseGraduateStudies" label="Course" required outlined dense
                              color="success">
                            </v-select>
                            <v-text-field outlined label="Year Last Attended" dense color="success" type="number">
                            </v-text-field>
                            <v-text-field outlined label="School Graduated" dense color="success"
                              type="text"></v-text-field>
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
                  <v-form ref="formsTech" v-model="valid" lazy-validation>


                    <div v-for="(item, index) in form" :key="item" v-if="item != null">
                      <v-row>
                        <v-col cols="12" md="2">
                          <v-text-field outlined label="Training / Vocational Course" dense color="success"
                            v-model="item.training_course" autofocus :rules="[rules.required]">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-text-field outlined label="Hours of Training" type="number" dense color="success"
                            v-model="item.hours_training" :rules="[rules.required]">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-text-field outlined label="Training Institition" dense color="success"
                            v-model="item.training_institution" :rules="[rules.required]">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-text-field outlined label="Skills Acquired" dense color="success"
                            v-model="item.skills_acquired" :rules="[rules.required]">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-text-field outlined label="Certificate Acquired" dense color="success"
                            v-model="item.certificate_acquired" :rules="[rules.required]">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-btn color="error" icon @click="validaterow(index)">
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </div>
                  </v-form>
                  <v-btn color="warning" @click="validaterow">
                    <v-icon>mdi-plus</v-icon> Add
                  </v-btn>
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
                  <v-form ref="formsEligibility" v-model="valid" lazy-validation>
                    <div v-for="(item, index) in forms" :key="item">
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-select :items="eligibilitylist" label="Eligibility Name" required outlined dense
                            color="success" autofocus :rules="[rules.required]">
                          </v-select>
                        </v-col>
                        <v-col cols="12" md="3">
                          <v-file-input label="Attach Picture" accept="image/x-png,image/gif,image/jpeg" outlined
                            prepend-icon="mdi-camera" dense color="success" :rules="[rules.required]"></v-file-input>
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-text-field outlined label="Date Taken" type="date" dense color="success"
                            v-model="item.Elgbtdate_taken" :rules="[rules.required]">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" md="1">
                          <v-btn color="error" icon @click="ElgbtRemoveRow(index)">
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </div>
                  </v-form>
                  <v-btn color="warning" @click="validateroweligibility"> <v-icon>mdi-plus</v-icon>Add </v-btn>
                </v-col>
                <v-col cols="12" md="12" sm="12">
                  <h4 class="green--text">Professional License</h4>
                  <v-form ref="formsProfessional" v-model="valid" lazy-validation>
                    <div v-for="(item, index) in forms2" :key="item">
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-select :items="licenselist" :rules="[rules.required]" label="License Name" required outlined
                            dense color="success">
                          </v-select>
                        </v-col>
                        <v-col cols="12" md="3">
                          <v-text-field outlined label="License Number" type="" :rules="[rules.required]" dense
                            color="success">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-text-field outlined label="Valid Until" :rules="[rules.required]" type="date" dense
                            color="success" v-model="item.PLdate_taken">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" md="1">
                          <v-btn icon color="error" @click="PLRemoveRow(index)">
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </div>
                  </v-form>
                  <v-btn color="warning" @click="validaterowprofessional"> <v-icon>mdi-plus</v-icon> Add
                  </v-btn>
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
                    <p class="font-weight-bold">
                      Other Skills Acquired without Certificate
                    </p>
                    <v-row>

                      <v-col cols="12" sm="4" md="4">

                        <v-checkbox label="Auto Mechanic" color="success"></v-checkbox>
                        <v-checkbox label="Beautician" style="margin-top: -10px" color="success"></v-checkbox>
                        <v-checkbox label="Carpentry Work" style="margin-top: -10px" color="success"></v-checkbox>
                        <v-checkbox label="Computer Literate" style="margin-top: -10px" color="success"></v-checkbox>
                        <v-checkbox label="Domestic Chores" style="margin-top: -10px" color="success"></v-checkbox>
                        <v-checkbox label="Driver" style="margin-top: -10px" color="success"></v-checkbox>

                      </v-col>
                      <v-col cols="12" sm="4" md="4">

                        <v-checkbox label="Electrician" color="success"></v-checkbox>
                        <v-checkbox label="Embroidery" style="margin-top: -10px" color="success"></v-checkbox>
                        <v-checkbox label="Gardening" style="margin-top: -10px" color="success"></v-checkbox>
                        <v-checkbox label="Masonry" style="margin-top: -10px" color="success"></v-checkbox>
                        <v-checkbox label="Painter/Artist" style="margin-top: -10px" color="success"></v-checkbox>
                        <v-checkbox label="Painting Jobs" style="margin-top: -10px" color="success"></v-checkbox>

                      </v-col>
                      <v-col cols="12" sm="4" md="4">

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
                        <v-select :items="employability_skills"
                          label="Employability Skills (Top 3 skills that you possess)" required outlined dense multiple
                          color="success" v-on:input="limiter">
                        </v-select>
                      </v-col>
                      <v-col cols="12" md="6" sm="6">
                        <v-select :items="employability_skills"
                          label="Employability Skills (Top 3 skills you don't have/least possess)" required outlined dense
                          multiple color="success" v-on:input="limiter">
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
                      <v-col cols="12" sm="6" md="6">
                        <v-file-input v-model="value.resume" color="green accent-4" counter label="Resume" dense
                          prepend-icon="mdi-paperclip" outlined accept=".pdf, .docx" :show-size="1000" autofocus>
                          <!-- <template v-slot:selection="{ index, text }">
                            <v-chip v-if="index < 2" color="green accent-4" dark label small>
                              {{ text }}
                            </v-chip>

                            <span v-else-if="index === 2" class="text-overline grey--text text--darken-3 mx-2">
                              +{{ files.length - 2 }} File(s)
                            </span>
                          </template> -->
                        </v-file-input>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-file-input v-model="value.applicationletter" color="green accent-4" counter label="Application Letter" dense
                          prepend-icon="mdi-paperclip" outlined accept=".pdf, .docx" :show-size="1000">
                          <!-- <template v-slot:selection="{ index, text }">
                            <v-chip v-if="index < 2" color="green accent-4" dark label small>
                              {{ text }}
                            </v-chip>

                            <span v-else-if="index === 2" class="text-overline grey--text text--darken-3 mx-2">
                              +{{ files.length - 2 }} File(s)
                            </span>
                          </template> -->
                        </v-file-input>


                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="12" md="4">
                        <v-file-input v-model="value.certificate" color="green accent-4" counter label="Certificate" dense
                          prepend-icon="mdi-paperclip" outlined :show-size="1000" autofocus>
                        </v-file-input>
                      </v-col>
                      <!-- <v-col cols="12" sm="12" md="4">
                        <v-file-input v-model="files" color="green accent-4" counter label="Application Letter" dense
                          prepend-icon="mdi-paperclip" outlined accept=".pdf, .docx" :show-size="1000">
                        </v-file-input>
                      </v-col> -->
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>

              <v-btn id="v-btn-c" color="success" @click.stop="dialog = true">
                Save
              </v-btn>
              <v-btn @click="e1 = 7" class="ma-2"> Back </v-btn>
            </v-stepper-content>
          </v-form>
        </v-stepper-items>

      </v-stepper>

      <v-row>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <p class="pa-6"> You have made changes in your profile. Do you want to save or
              discard it? </p>
            <v-divider color="success"></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="orange darken-1" text @click="dialog = false">
                Discard
              </v-btn>

              <v-btn color="green darken-1" text @click="$router.push({ name: 'ApplicantDashboard' })" type="submit">
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
import { mapGetters, mapActions } from "vuex";
// import {ref} from "vue";
export default {
  components: {
    reactive,
    // ref
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
    disable: '',
    provincename: {},
    cityname: {},
    brgyname: {},
    region: '',
    province: '',
    city: '',
    brgy: '',
    valid: true,
    number: '',
    email: '',
    value: {
      surname: '',
      firstname: '',
      middlename: '',
      suffix: '',
      birthDate: '',
      age: '',
      civilstatus: '',
      sex: '',
      religion: '',
      disability: '',
      ethnicity: '',
      id: '',
      house:'',
      number:'',
      email:'',
      sss:'',
      tin:'',
      resume: '',
      applicationletter: '',
      certificate: '',
    },
    rules: {
      required: v => !!v || 'Required',
      email: v => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(v) || 'Invalid e-mail.'
      },
      counter: v => v.length <= 11 || 'Max 11 digits',
    },
    e1: 1,
    altLabels: true,
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

    //education
    elementarylvl: true,
    secondarylvl: true,
    tertiarylvl: true,
    graduatelvl: true,

    dialog: false,
    activePicker: null,
    date: null,
    menu: false,
    includeFiles: true,
    enabled: false,
    samewithaddress: true,


    eligibilitylist: [
      " Bar/Board Eligibility (RA 1080)",
      " Barangay Health Worker Eligibility (RA 7883)",
      " Barangay Nutrition Scholar Eligibility (PD 1569)",
      " Barangay Official Eligibility (RA  7160)",
      " Electronic Data Processing Specialist Eligibility (CSC Res. 90-083)",
      " Foreign School Honor Graduate Eligibility (CSC Res. 1302714)",
      " Honor Graduate Eligibility (PD 907)",
      " Sanggunian Member Eligibility (RA 10156)",
      " Scientific and Technological Specialist Eligibility (PD 997)",
      " Skills Eligibility - Category II (CSC MC 11, s. 1996, as Amended)",
      " Veteran Preference Rating (EO 132/790)",
    ],
    licenselist: [
      "Driver's License",
      "PRC License",
      "Others"
    ],
    suffix: [
      'N/A', 'Jr.', 'Sr.', 'III'
    ],
    levelreachedSec: [
      "Grade 7",
      "Grade 8",
      "Grade 9",
      "Grade 10",
      "Grade 11",
      "Grade 12",
      "1st Year",
      "2nd Year",
      "3rd Year",
      "4th Year",
    ],
    levelreachedElem: [
      "Grade 1",
      "Grade 2",
      "Grade 3",
      "Grade 4",
      "Grade 5",
      "Grade 6",
    ],
    levelreachedTer: [
      "1st Year College",
      "2nd Year College",
      "3rd Year College",
      "4th Year College",
      "4th Year College",
      "5th Year College",
    ],
    course: [
      " Bachelor of Arts in History (AB History)",
      " Bachelor of Arts in Philosophy (AB Philosophy)",
      " Bachelor of Fine Arts Major in Industrial Design (BFA)",
      " Bachelor of Fine Arts Major in Painting (BFA)",
      " Bachelor of Fine Arts Major in Sculpture (BFA)",
      " Bachelor of Fine Arts Major in Visual Communication (BFA)",
      " Bachelor of Arts in Economics (AB Economics)",
      " Bachelor of Science in Economics (BS Economics)",
      " Bachelor of Arts in Psychology (AB Psychology)",
      " Bachelor of Science in Psychology (BS Political Science)",
      " Bachelor of Science in Criminology (BS Criminology)",
      " Bachelor of Arts in Political Science (AB Political Science)",
      " Bachelor of Arts in English (AB English)",
      " Bachelor of Arts in Linguistics (AB Linguistics)",
      " Bachelor of Arts in Literature (AB Literature)",
      " Bachelor of Arts in Anthropology (AB Anthropology)",
      " Bachelor of Arts in Sociology (AB Sociology)",
      " Bachelor of Arts in Filipino (AB Filipino)",
      " Bachelor of Science in Forensic Science (BSFS)",
      " Bachelor of Arts in Islamic Studies (AB Islamic Studies)",
      " Bachelor of Science in Environmental Science (BSES)",
      " Bachelor of Science in Forestry (BS Forestry)",
      " Bachelor of Science in Fisheries (BSFi)",
      " Bachelor of Science in Geology (BS Geology)",
      " Bachelor of Science in Biology (BS Biology)",
      " Bachelor of Science in Molecular Biology (BS Molecular Biology)",
      " Bachelor of Science in Physics (BS Physics)",
      " Bachelor of Science in Applied Physics (BS Applied Physics)",
      " Bachelor of Science in Chemistry (BS Chemistry)",
      " Bachelor of Science in Computer Science (BSCS)",
      " Bachelor of Science in Information Technology (BSIT)",
      " Bachelor of Science in Information Systems (BSIS)",
      " Bachelor of Science in Mathematics (BS Mathematics)",
      " Bachelor of Science in Applied Mathematics (BS Applied Math)",
      " Bachelor of Science in Statistics (BS Stat)",
      " Bachelor of Science in Agriculture",
      " Bachelor of Science in Agribusiness (BS Agribusiness)",
      " Bachelor of Science in Agroforestry (BS Agroforestry)",
      " Bachelor of Science in Architecture (BS Architecture)",
      " Bachelor in Landscape Architecture (BLA)",
      " Bachelor of Science in Interior Design (BS in Interior Design)",
      " Bachelor of Science in Accountancy (BSA)",
      " Bachelor of Science in Accounting Technology (BSAcT)",
      " Bachelor of Science in Business Administration",
      " Bachelor of Science in Business Administration Major in Business Economics (BSBA)",
      " Bachelor of Science in Business Administration Major in Financial Management (BSBA major in FM)",
      " Bachelor of Science in Business Administration Major in Human Resource Development (BSBA major in HRDM)",
      " Bachelor of Science in Business Administration Major in Marketing Management (BSBA major in MM)",
      " Bachelor of Science in Business Administration Major in Operations Management (BSBA major in OM)",
      " Bachelor of Science in Hotel and Restaurant Management (BS HRM)",
      " Bachelor of Science in Entrepreneurship (BS Entrep)",
      " Bachelor of Science in Office Administration (BSOA)",
      " Bachelor of Science in Real Estate Management (BS REM)",
      " Bachelor of Science in Tourism Management (BSTM)",
      " Bachelor of Science in Medical Technology (BS Med Tech)",
      " Bachelor of Science in Midwifery (BS Midwifery)",
      " Bachelor of Science in Nursing (BSN)",
      " Bachelor of Science in Occupational Therapy (BSOT)",
      " Bachelor of Science in Pharmacy (BS Pharmacy)",
      " Bachelor of Science in Physical Therapy (BSPT)",
      " Bachelor of Science in Radiologic Technology (BS Rad Tech)",
      " Bachelor of Science in Respiratory Therapy (BSRT)",
      " Bachelor of Science in Speech-Language Pathology",
      " Bachelor of Science in Sports Science",
      " Bachelor in Secondary Education (BSED)",
      " Bachelor in Elementary Education (BEED)",
      " Bachelor in Secondary Education Major in Technology and Livelihood Education (BSED)",
      " Bachelor in Secondary Education Major in Biological Sciences (BSED)",
      " Bachelor in Secondary Education Major in English (BSED)",
      " Bachelor in Secondary Education Major in Filipino (BSED)",
      " Bachelor in Secondary Education Major in Mathematics (BSED)",
      " Bachelor in Secondary Education Major in Islamic Studies (BSED)",
      " Bachelor in Secondary Education Major in Music, Arts, Physical and Health Education (BSED)",
      " Bachelor in Secondary Education Major in Physical Sciences (BSED)",
      " Bachelor in Secondary Education Major in Social Studies (BSED)",
      " Bachelor in Secondary Education Major in Values Education (BSED)",
      " Bachelor in Elementary Education Major in Preschool Education (BEED)",
      " Bachelor in Elementary Education Major in Special Education (BEED)",
      " Bachelor of Library and Information Science in the Philippines (BLIS)",
      " Bachelor of Physical Education (BPE)",
      " Bachelor of Science in Aeronautical Engineering (BS AeroE)",
      " Bachelor of Science in Ceramic Engineering (BSCerE)",
      " Bachelor of Science in Chemical Engineering (BSChE)",
      " Bachelor of Science in Civil Engineering (BSCE)",
      " Bachelor of Science in Computer Engineering (BSCpE)",
      " Bachelor of Science in Electrical Engineering (BSEE)",
      " Bachelor of Science in Electronics and Communications Engineering (BSECE)",
      " Bachelor of Science in Geodetic Engineering (BSGE)",
      " Bachelor of Science in Geological Engineering (BSGeoE)",
      " Bachelor of Science in Industrial Engineering (BSIE)",
      " Bachelor of Science in Marine Engineering in (BSMarE)",
      " Bachelor of Science in Materials Engineering (BSMatE)",
      " Bachelor of Science in Mechanical Engineering (BSME)",
      " Bachelor of Science in Metallurgical Engineering (BSMetE)",
      " Bachelor of Science in Mining Engineering (BSEM)",
      " Bachelor of Science in Petroleum Engineering (BSPetE)",
      " Bachelor of Science in Sanitary Engineering (BSSE)",
      " Bachelor of Arts in Broadcasting (AB Broadcasting) ",
      " Bachelor of Arts in Communication (AB Communication) ",
      " Bachelor of Science in Development Communication (BS DevComm)",
      " Bachelor of Arts in Journalism (AB Journalism)",
      " Bachelor of Arts in Mass Communication",
      " Bachelor of Science in Community Development(BS Community Development)",
      " Bachelor of Science in Customs Administration (BSCA)",
      " Bachelor of Science in Foreign Service (BS Foreign Service)",
      " Bachelor of Science in International Studies(BSIS)",
      " Bachelor of Public Administration (BPA)",
      " Bachelor of Science in Public Safety (BSPS)",
      " Bachelor of Science in Social Work (BS Social Work)",
      " Bachelor of Science in Marine Transportation (BSMT)",
      " Bachelor of Science in Food Technology (BS Food Tech)",
      " Bachelor of Science in Nutrition and Dietetics (BS ND)",

    ],
    courseGraduateStudies: [
      " Anthropology (MA, PhD)",
      " Applied Mathematics (MS, PhD)",
      " Applied Mathematics/Actuarial Science (PM)",
      " Araling Pilipino (MA)",
      " Archaeology (Dip, MA, MS, PhD)",
      " Architecture (M)",
      " Archives and Records Management (M)",
      " Art History, Art Theory and Criticism, Curatorial Studies (MA)",
      " Artificial Intelligence (MEng, PhD)",
      " Asian Studies (M, MA)",
      " Biology (Dip, MS, PhD)",
      " Business Administration (MBA, DBA)",
      " Chemical Engineering (MS, PhD)",
      " Chemistry (Dip, MS, PhD)",
      " Chemical Education (MS, PhD)",
      " Civil Engineering (MS, PhD)",
      " Communication (MA, PhD)",
      " Community Development (Dip, M)",
      " Comparative Literature (MA, PhD)",
      " Computer Science (MS, PhD)",
      " Creative and Musical Performing Arts (Dip)",
      " Creative Writing (MA, PhD)",
      " Data Science (PhD)",
      " Demography (MA)",
      " Development Economics (M)",
      " Early Childhood Development (Dip)",
      " Economics (MA, PhD)",
      " Education (MA, PhD)",
      " Electrical Engineering (M, MS, PhD)",
      " English Studies: Anglo-American Literature (MA, PhD)",
      " English Studies: Language (MA, PhD)",
      " Environmental Engineering (MS, PhD)",
      " Environmental Science (MS, PhD)",
      " European Languages (MA French, German, Spanish)",
      " Exercise and Sport Science (Dip)",
      " Family Life and Child Development (MA)",
      " Filipino: Pagsasalin, Wika (MA, PhD)",
      " Finance (MS)",
      " Fine Arts (M)",
      " Food Science (MS, PhD),/p",
      " Geomatics Engineering (MS: Remote Sensing and Photogrammetry, Applied Geodesy, Geoinformatics)",
      " Geography (MS)",
      " Hispanic Literature (PhD)",
      " History (MA, PhD)",
      " Home Economics (MA, PhD)",
      " Hotel, Restaurant and Institution Management (M)",
      " Human Movement Science (MS)",
      " Industrial Engineering (Dip, MS)",
      " Industrial Relations (Dip, M)",
      " Interior Design (MA)",
      " International Studies (MA)",
      " Islamic Studies (MA)",
      " Journalism (MA)",
      " Librarianship (Dip)",
      " Library and Information Science (M, MS)",
      " Linguistics (MA, PhD)",
      " Malikhaing Pagsulat (MA, PhD)",
      " Management (M)",
      " Marine Science (MS, PhD)",
      " Materials Science and Engineering (MS, PhD)",
      " Mathematics (MS, PhD)",
      " Media Studies (MA, PhD)",
      " Mechanical Engineering (MS, PhD)",
      " Metallurgical Engineering (MS)",
      " Meteorology (MS, PhD)",
      " Microbiology (MS)",
      " Molecular Biology and Biotechnology (MS, PhD)",
      " Music (MA, PhD)",
      " Nutrition (MA)",
      " Pagsasalin (MA)",
      " Panitikan (MA)",
      " Panitikan ng Pilipinas (MA)",
      " Performance Studies (PhD)",
      " Philippine Studies (MA, PhD)",
      " Philosophy (MA, PhD)",
      " Physics (MA, MS, PhD)",
      " Political Science (MA, PhD)",
      " Population Studies (M)",
      " Psychology (MA, PhD)",
      " Public Administration (MPA, DPA)",
      " Public Management (Dip)",
      " Regional Development Planning (MS)",
      " Social Development (DSD)",
      " Social Work (Dip, MA)",
      " Sociology (MA, PhD)",
      " Speech Communication (MA)",
      " Statistics (M, MS, PhD)",
      " Technology Management (M)",
      " Theatre Arts (MA)",
      " Tourism Development and Management (Dip, MS)",
      " Tropical Landscape Architecture (M)",
      " Urban and Regional Planning (Dip, MA, PhD)",
      " Voluntary Sector Management (Dip)",
      " Women and Development (Dip, MA)",
      " Wika (MA, PhD)",
      " M = Graduate Program (Master)",
      " MA = Graduate Program (Master of Arts)",
      " MS = Graduate Program (Master of Science)",
      " Dip = Post-Baccalaureate Program (Diploma)",
      " PhD = Postgraduate Program (Doctor of Philosophy)",
    ],
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
    civilstatus: ["Single", "Married", "Widowed", "Separated"],
    sex: ["Female", "Male"],
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
    strand: [
      "General Academic Strand (GAS)",
      "Humanities and Social Sciences Strand (HUMSS)",
      "Science, Technology, Engineering, and Mathematics Strand (STEM)",
      "Accountancy, Business and Management Strand (AMB)",
      "Technical-Vocational-Livelihood (TVL) Track",
      "Sports Track",
      "Arts and Design Track",
    ],
    birthDate: '',
    years: null,
    months: null,
    days: null
  }),
  created() {
    this.fetchaddress();

    // setTimeout(function() { console.log("address=>", this.address) }, 3000),
    //   setTimeout(() => this.isHidden = false, 500),




    // this.address=this.getaddress;
    // console.log("address=>", this.address)
  },
  computed: {
    ...mapGetters('users', { address: 'getadd' })
  },
  methods: {
    formattype(type) {
      if (type == "REGION") {
        let res = this.region

        this.provincename = Object.keys(res.province_list)
      }
      if (type == "PROVINCE") {


        let res = this.region.province_list[this.province]

        this.cityname = Object.keys(res.municipality_list)
      }
      if (type == "CITY") {
        let res = this.region.province_list[this.province].municipality_list[this.city]
        // console.log("province=>",res.barangay_list)
        this.brgyname = Object.values(res.barangay_list)
      }


    },
    ...mapActions('users', ['fetchaddress']),
    calculateAge(birthDate) {
      if (!birthDate) return;
      const currentDate = new Date();
      if (new Date(birthDate) > currentDate) {
        this.birthDate = null
        this.years = null;
        this.months = null;
        this.days = null;
        alert('Invalid Date of Birth')
      }
      const diffTime = currentDate - new Date(birthDate);
      const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      this.years = Math.floor(totalDays / 365.25);
      this.months = Math.floor((totalDays % 365.25) / 30.4375);
      this.days = Math.floor((totalDays % 365.25) % 30.4375);
    },
    validate() {
      // this.region=this.address\\
      console.log("address=>", this.address)
      console.log("region=>", this.region)


      this.$refs.formes.validate();

      let v = this.$refs.formes.validate();

      if (v) {
        this.e1 = this.e1 + 1
      }
    },
    validaterow() {
      this.$refs.formsTech.validate();
      let v = this.$refs.formsTech.validate();
      if (v) {
        this.form.push({
          training_course: "",
          hours_training: "",
          training_institution: "",
          skills_acquired: "",
          certificate_acquired: "",
        });
      }
    },
    validateroweligibility() {
      this.$refs.formsEligibility.validate();
      let v = this.$refs.formsEligibility.validate();
      if (v) {
        this.forms.push({
          eligibility: "", date_taken: ""
        });
      }
    },
    validaterowprofessional() {
      this.$refs.formsProfessional.validate();
      let v = this.$refs.formsProfessional.validate();
      if (v) {
        this.forms2.push({
          professional: "", PLdate_taken: ""
        });
      }
    },
    // validated(){
    //   this.$refs.formsTech.validate();
    //   let v = this.$refs.formsTech.validate();
    //   if (v) {
    //     this.e1 = this.e1 + 1
    //   }
    // },
    //limiter for the top 3 skills in stepper 7
    limiter(e) {
      if (e.length > 3) {
        this.hint = "You can only choose 3"
        e.pop()
      }
    }
  },
};
</script>
    