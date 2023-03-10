<template>
  <div>
    <v-col>
      <v-stepper v-model="e1">
        <v-stepper-header style="font-size: 14px">
          <v-stepper-step
            :complete="e1 > 1"
            step="1"
            style="height="
            color="warning"
          >
            Establishment Details
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" color="warning">
            Establishment Contact Details
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3" color="warning">
            Requirements
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <!-- First Stepper -->
          <v-stepper-content step="1">
            <v-card>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="8">
                      <v-text-field
                        label="Establishment Name"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        label="Acronym / Abbreviation"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field
                        label="Tax Identification Number"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-select
                        :items="etype"
                        label="Employer Type"
                        required
                        small-chips
                        outlined
                        dense
                        color="green"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-select
                        :items="totalworkforce"
                        label="Total Work Force"
                        outlined
                        dense
                        color="green"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-select
                        :items="industry"
                        label="Industry"
                        outlined
                        dense
                        color="green"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field
                        label="Province"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field
                        label="Municipal/City"
                        type="address"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field
                        label="Barangay"
                        type="address"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field
                        label=" Street/Village"
                        type="address"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 2">
              Continue
            </v-btn>

            <v-btn id="v-btn-c" class="ma-4" @click="dialog = false" text color="warning">
              Cancel
            </v-btn>
          </v-stepper-content>

          <!-- Second Stepper -->
          <v-stepper-content step="2">
            <v-card>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="2" md="2">
                      <v-select
                        :items="title"
                        label="Title"
                        outlined
                        dense
                        multiple
                        small-chips
                        color="green"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="10" md="10">
                      <v-text-field
                        label="Contact Person (Full Name)"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3">
                      <v-text-field
                        label="Position"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3">
                      <v-text-field
                        label="Telephone Number"
                        required
                        type="number"
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3">
                      <v-text-field
                        label="Mobile Number"
                        required
                        outlined
                        dense
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3">
                      <v-text-field
                        label="E-mail Address"
                        required
                        outlined
                        dense
                        type="email"
                        color="green"
                      ></v-text-field>
                    </v-col>
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
                      <v-file-input
                        v-model="files"
                        color="green accent-4"
                        counter
                        label="Business License"
                        multiple
                        dense
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="green accent-4"
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                            v-else-if="index === 2"
                            class="text-overline grey--text text--darken-3 mx-2"
                          >
                            +{{ files.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-file-input
                        v-model="files"
                        color="green accent-4"
                        counter
                        label="Business License"
                        multiple
                        dense
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="green accent-4"
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                            v-else-if="index === 2"
                            class="text-overline grey--text text--darken-3 mx-2"
                          >
                            +{{ files.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-file-input
                        v-model="files"
                        color="green accent-4"
                        counter
                        label="Business License"
                        multiple
                        dense
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="green accent-4"
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                            v-else-if="index === 2"
                            class="text-overline grey--text text--darken-3 mx-2"
                          >
                            +{{ files.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-file-input
                        v-model="files"
                        color="green accent-4"
                        counter
                        label="Business License"
                        multiple
                        dense
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="green accent-4"
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                            v-else-if="index === 2"
                            class="text-overline grey--text text--darken-3 mx-2"
                          >
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
            <v-btn @click="e1 = 2" class="ma-2" text color="warning"> Back </v-btn>
          </v-stepper-content>
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

              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
                type="submit"
              >
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
    e1: 1,
    dialog: false,

    title: [
      "Mr.",
      "Mrs."
    ],
    etype: [
      "Private",
      "Recruitment & Placement Agency (Local)",
      "Licensed Recruitment Agency (Overseas)",
    ],
    totalworkforce: [
      "Micro (1-9)",
      "Small (10-99)",
      "Medium (100-199)",
      "Large (200 and up)",
    ],
    industry: [
      "Agriculture",
      "Automotive",
      "BPO/IT",
      "Construction",      
      "Education",      
      "Electricity, Gas and Water Supply",
      "Financial Intermediation",
      "Fishing",
      "Health and Social Work",      
      "Hotels and Restaurants",      
      "Manufacturing",      
      "Mining and Quarrying",
      "Other Community, Social and Personal Service Activities",
      "Security and Defense",      
      "Real Estate, Renting and Business Activities",      
      "Transport, Storage and Communication",
      "Wholesale and Retail",
    ],
  }),
};
</script>
  