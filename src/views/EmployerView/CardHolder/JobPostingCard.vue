<template>
  <v-data-table :headers="headers" :items="desserts" :search="search" class="">
    <template v-slot:top>
      <v-toolbar flat dark color="#1B5E20">
        <v-toolbar-title>JOB POSTING </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details outlined rounded
          dense></v-text-field>
        <v-divider vertical class="mx-2" inset></v-divider>

        <v-dialog v-model="dialog" max-width="700px" persistent>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark class="mb-2" v-bind="attrs" v-on="on">
              <v-icon> mdi-plus </v-icon> New Job Post
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-divider color="success"></v-divider>
            <v-stepper v-model="e1">
              <v-stepper-header style="font-size: 14px">
                <v-stepper-step :complete="e1 > 1" step="1" style="height=" color="warning">
                  Vacancy Details
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2" color="warning">
                  Preferrence
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 3" step="3" color="warning">
                  Qualification Requirements
                </v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <!-- First Stepper -->
                <v-stepper-content step="1">
                  <v-card class="">
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" sm="12" md="6">
                          <v-select :items="purposeofvacancy" label="Purpose of Vacancy" outlined dense color="green" v-model="editedItem.purposeofvacancy" >
                          </v-select>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                          <v-select :items="classificationofvacancy" label="Classification of Vacancy" outlined dense v-model="editedItem.classificationofvacancy"
                            color="green">
                          </v-select>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-text-field label="Position Title" v-model="editedItem.position_title" required outlined dense
                            color="green">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-textarea label="Job Description" v-model="editedItem.job_description" required outlined dense auto-grow
                            color="green">
                          </v-textarea>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-select :items="natureofwork" v-model="editedItem.natureofwork" label="Nature of Work"
                            outlined dense color="green">
                          </v-select>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-text-field label="Place of Work" v-model="editedItem.placeofwork" required outlined dense
                            color="green"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="Salary" v-model="editedItem.salary" type="text" required outlined dense
                            color="green"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="Vacancy Count" v-model="editedItem.vacancy_count" type="number" required
                            outlined dense color="green"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                          <v-text-field label="Posting Date: (mm/dd/year) " v-model="editedItem.posting_date" type="date"
                            required dense outlined color="green">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                          <v-text-field label="Valid Until: (mm/dd/year) " v-model="editedItem.valid_until" type="date"
                            required dense outlined color="green">
                          </v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>

                  <v-btn id="v-btn-c" color="success" @click="e1 = 2">
                    Continue
                  </v-btn>
                  <v-btn @click="dialog = false" class="ma-2" color="warning" text>
                    Cancel
                  </v-btn>
                </v-stepper-content>

                <!-- Second Stepper -->
                <v-stepper-content step="2">
                  <v-card class="">
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" sm="12" md="12">
                          <v-select :items="educational_level" label="Educational Level" outlined dense color="green" v-model="editedItem.educational_level">
                          </v-select>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-text-field label="Course Requirement" v-model="editedItem.course_requirement" required
                            outlined dense color="green">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" style="margin-top: -30px">
                          <v-radio-group label="Accepts persons with disabilities (PWD):" row v-model="editedItem.pwd">
                            <v-radio label="Yes" value="yes" color="green">
                            </v-radio>
                            <v-radio label="No" value="no" color="green">
                            </v-radio>
                          </v-radio-group>
                          <v-col cols="12" sm="12" md="12" style="margin-top: -30px">
                            <v-select :items="pwd" label="If 'yes': " multiple dense color="green" outlined small-chips
                              v-model="editedItem.pwd_1">
                            </v-select>
                          </v-col>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-select :items="sex_preference" label="Sex Preference" outlined dense color="green" v-model="editedItem.sex_preference">
                          </v-select>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                  <v-btn @click="e1 = 1" class="ma-2" color="warning" text> Back </v-btn>
                  <v-btn class="ma-2" color="success" @click="e1 = 3">
                    Continue
                  </v-btn>
                </v-stepper-content>

                <!-- Third Stepper -->
                <v-stepper-content step="3">
                  <v-card class="">
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                          <v-radio-group label="Accepts Additional Qualification Requirements: " row
                            v-model="editedItem.requirements">
                            <v-radio label="Required" value="required" color="green">
                            </v-radio>
                            <v-radio label="Optional" value="optional" color="green">
                            </v-radio>
                          </v-radio-group>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="ma-2">
                          For each identified vacant position.
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-text-field label="Work Experience (month/s): " v-model="editedItem.work_experience" required
                            outlined dense color="green" type="number"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-text-field label="Required License: " v-model="editedItem.required_license" required outlined
                            dense color="green"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-text-field label="Other qualifications: " v-model="editedItem.other_qualification" required
                            outlined dense color="green"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-select :items="employability_skills" label="Employability Skills" outlined multiple
                            small-chips dense color="green" v-model="editedItem.employability_skills">
                          </v-select>
                        </v-col>


                        <v-col cols="12" sm="12" md="12" style="margin-top: -30px">
                          <v-radio-group label="Accepts returning OFWs: " row v-model="editedItem.ofw">
                            <v-radio label="Yes" value="yes" color="green">
                            </v-radio>
                            <v-radio label="No" value="no" color="green">
                            </v-radio>
                          </v-radio-group>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>

                  <v-btn @click="e1 = 2" class="ma-2" color="warning" text> Back </v-btn>
                  <v-btn class="ma-2" color="success" @click="save">
                    Save
                  </v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>

            <!-- <v-dialog v-model="dialog1" max-width="290">
              <v-card>
                <v-card-title class="text-h5">
                  UNSAVED CHANGES
                </v-card-title>

                <v-card-text>
                  You have created a Job Post. Do you want to save or
                  discard it?
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="green darken-1" text @click="dialog = false">
                    Discard
                  </v-btn>

                  <v-btn color="green darken-1" text @click="save, (dialog1 = false), (dialog = false)" type="submit">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog> -->
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h6">Are you sure to delete this Job Posting?</v-card-title>
            <v-divider color="success"></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="orange darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="green darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <!-- <v-icon small class="mr-2" @click="viewItem(item)">
        mdi-eye
      </v-icon> -->

      <v-icon small class="mr-2" @click="goToJobposting(item)" color="success">
        mdi-eye
      </v-icon>

      <v-icon small class="mr-2" @click="editItem(item)" color="warning">
        mdi-pencil
      </v-icon>


      <v-icon @click="deleteItem(item)" color="error" small> mdi-delete </v-icon>
    </template>
    <template slot="item.switch1" slot-scope="{ item }">
      <v-switch v-model="item.switch1" color="success" dense></v-switch>
    </template>
  </v-data-table>
</template>

<script>
/* eslint-disable */

export default {
  props:{
    admin: Boolean
  },
  components: {},

  data: () => ({
    search: "",
    dialog: false,
    dialog1: false,
    dialogDelete: false,
    elementary: false,
    high_school: false,
    strand: false,
    course: false,
    college: false,
    e1: 1,
    employability_skills: [
      "Planning and Organizing",
      "Social Perceptiveness",
      "Innovation",
      "Multi-tasking",
      "Work Standards/Ethics",
      "Stress Tolerance",
      "Self Motivation",
      "Problem Sensitivity",
      "Creative Problem Solving",
      "Teamwork",
      "Decision Making",
      "Critical Thinking",
      "Math Function Skill",
      "English Function Skill",
      "English Comprehension",
    ],
    sex_preference: [
      "Male",
      "Female",
      "No preference"
    ],
    educational_level: [
      "Elementary Level",
      "Elementary Graduate",
      "Junior High School Level",
      "Junior High School Level Graduate",
      "Senior High School Level",
      "Junior High School Graduate",
      "TechVoc Level",
      "TechVoc Graduate",
      "College Level",
      "College Graduate",
      "Graduate/Post Graduate Studies"
    ],
    purposeofvacancy: ["Additional Manpower", "Replacement", "Expansion"],
    classificationofvacancy: [
      "Administrative",
      "Clerical",
      "Managerial",
      "Manual Labour",
      "Supervisory",
      "Technical",
    ],
    headers: [
      { text: "Position Title", value: "position_title", sortable: false, },
      { text: "Place of Work", value: "placeofwork", sortable: false, },
      { text: "Nature of Work", value: "natureofwork", sortable: false, },
      { text: "Vacancy Count", value: "vacancy_count", sortable: false, },
      { text: "Job Post Status", value: "switch1", sortable: false, },
      { text: "Actions", value: "actions", sortable: false },
    ],
    natureofwork: [
      "Permanent",
      "Contractual",
      "Part-time",
      "Project-based",
      "Internship/OJT",
    ],
    stranditems: [
      "Accountancy, Business and Management (ABM) Strand",
      "Science, Technology, Engineering, and Mathematics (STEM) Strand",
      "Humanities and Social Science (HUMSS) Strand",
      "General Academic Strand (GAS)",
      "Arts and Design Track",
      "Sports Track",
      "Agricultural-Fishery Arts (AFA) Strand",
      "Home Economics (HE) Strand",
      "Industrial Arts (IA) Strand",
      "Information and Communications Technology (ICT) Strand",
    ],
    pwd: ["Visual", "Hearing", "Speech", "Physical", "Mental", "Others"],
    courseitems: [
      "Business Administration",
      "Education",
      "Engineering",
      "Information Technology",
      "Medicine",
      "Agriculture",
      "Psychology",
      "Maritime",
      "Service Trades",
      "Architecture",
    ],

    editedIndex: -1,
    editedItem: {
    },
    defaultItem: [],
    desserts: [
            {
                id: 1,
                position_title: "Data Programmer",
                placeofwork: "Tagum City",
                vacancy_count: "21",
                natureofwork: "Permanent",
                vacancy_count: "57",
                switch1: true,
                purposeofvacancy: "Replacement",
                classificationofvacancy: "Clerical",
                job_description: "A database programmer specializes in developing and maintaining database programs, modifying them according to their clients' needs. They design and write codes for different programs, establish and implement test systems, troubleshoot problems, solve concerns or issues, and upgrade systems as necessary. They may also establish data security plans and implement protocols to protect company and client data. Moreover, a database programmer maintains an active communication line with co-workers, working together to ensure a smooth workflow and provide optimal services to clients.",
                salary: "PHP 45,000",
                valid_until: "2023-03-05",
                educational_level: 'Elementary Level',
                course_requirement: "IT",
                pwd: "yes",
                pwd_1: "Hearing" ,
                sex_preference: "Female",
                requirements: "optional",
                work_experience: "12",
                required_license: "None",
                other_qualification: "None",
                employability_skills: "Teamwork",
                ofw: "yes",
            },
            {
                id: 2,
                position_title: "Data Controller",
                placeofwork: "Tagum City",
                vacancy_count: "21",
                natureofwork: "Part-time",
                vacancy_count: "57",
                switch1: false,
                purposeofvacancy: "Expansion",
                classificationofvacancy: "Managerial",
                job_description: "The data controller is the person or company that determines what purposes for which and how the data will be processed. Therefore, if your company decides ‘why’ and ‘how’ the data should be processed, it is the data controller.",
                salary: "45",
                valid_until: "2023-03-05",
                educational_level: "College Level",
                course_requirement: "IT",
                pwd: "yes",
                pwd_1: "Hearing",
                sex_preference: "Female",
                requirements: "optional",
                work_experience: "8",
                required_license: "None",
                other_qualification: "None",
                employability_skills: "Innovation",
                ofw: "yes",
            },
            {
                id: 3,
                position_title: "Data Analyst",
                placeofwork: "Tagum City",
                vacancy_count: "21",
                natureofwork: "Contractual",
                vacancy_count: "57",
                switch1: false,
                purposeofvacancy: "Additional Manpower",
                classificationofvacancy: "Technical",
                job_description: "A data analyst collects and stores data on sales numbers, market research, logistics, linguistics, or other behaviors. They bring technical expertise to ensure the quality and accuracy of that data, then process, design, and present it in ways to help people, businesses, and organizations make better decisions.",
                salary: "45",
                valid_until: "2023-03-05",
                educational_level: "Senior High School Level",
                course_requirement: "IT",
                pwd: "yes",
                pwd_1: "Hearing",
                sex_preference: "Female",
                requirements: "optional",
                work_experience: "2",
                required_license: "None",
                other_qualification: "None",
                employability_skills: "Multi-tasking",
                ofw: "yes",
            },
        ],
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Job Post" : "Edit Job Post";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    // this.defaultItem.push(this.desserts.find(e => e.id == this.$route.params.id));
    // console.log("defaultitem=>",this.defaultItem);
    console.log(this.employer);
  },
  methods: {
    goToJobposting(item) {      
      this.$router.push(`/JobPostingId/${item.id}/${this.admin}`);
    },

    
    editItem(item) {      
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

