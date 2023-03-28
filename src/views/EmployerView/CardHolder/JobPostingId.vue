<template>
    <v-app>
        <div class="div">
            <admin-navbar v-if="this.$route.params.admin === 'true'"></admin-navbar>
            <employer-navbar v-else></employer-navbar>
        </div>
        <v-main>

            <v-card class="mt-4 ml-4 mr-4" outlined v-for="items in selected" :key="id">

                <v-card-title class="green darken-4 white--text">
                    <v-icon small class="mr-2" @click="$router.push({ name: 'EmployerJobPosts' })" color="white">
                        mdi-arrow-left
                    </v-icon>JOB POSTING DETAILS
                    <v-spacer></v-spacer>
                    <v-icon small class="mr-2" @click="editItem(items)" :key="id" color="white">
                        mdi-pencil
                    </v-icon>
                </v-card-title>
                <v-row>
                    <v-col cols="12" md="12" lg="12">
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="text-overline mb-4">
                                    {{ items.salary }} // {{ items.natureofwork }}
                                </div>
                                <v-list-item-title class="text-h5 mb-1 green--text">
                                    {{ items.position_title }}
                                </v-list-item-title>
                                <p class="pl-12 pr-12 pt-5" justify="center">{{ items.job_description }}</p>
                                <v-list-item-title class="text-h8 mb-1 mt-4">
                                    <b color="#1B5E20">Purpose of Vacancy:</b> {{ items.purposeofvacancy }}
                                </v-list-item-title>
                                <v-list-item-title class="text-h8 mb-1">
                                    <b>Classification of Vacancy:</b> {{ items.classificationofvacancy }}
                                </v-list-item-title>
                                <v-list-item-title class="text-h8 mb-2">
                                    <b>Place of Work:</b> {{ items.placeofwork }}
                                </v-list-item-title>
                                <v-divider></v-divider>
                                <h3 class="mt-2 green--text">PREFERENCES:</h3>
                                <v-row>
                                    <v-col cols="12" md="6" lg="6" sm="12">
                                        <v-list-item-title class="text-h8 mb-1 mt-2">
                                            <b>Educational Level:</b> {{ items.educational_level }}
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Course Requirement:</b> {{ items.course_requirement }}
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Sex Preference:</b> {{ items.sex_preference }}
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Work Experience:</b> {{ items.work_experience }} months
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Required License:</b> {{ items.required_license }}
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Other Qualifications:</b> {{ items.other_qualification }}
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Employability Skills:</b> {{ items.employability_skills }}
                                        </v-list-item-title>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="6">
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Posting Date:</b> {{ }}
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Valid Until:</b> {{ items.valid_until }}
                                        </v-list-item-title>
                                    </v-col>
                                </v-row>

                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-card>

            <v-row>
                <v-col cols="12" md="12" lg="12" class="pa-6">
                    <applicant-card />
                </v-col>
            </v-row>

        </v-main>
        <v-dialog v-model="dialog" max-width="700px" persistent>
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
                                            <v-select :items="purposeofvacancy" label="Purpose of Vacancy" outlined dense
                                                color="green" v-model="editedItem.purposeofvacancy">
                                            </v-select>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-select :items="classificationofvacancy" label="Classification of Vacancy"
                                                outlined dense v-model="editedItem.classificationofvacancy" color="green">
                                            </v-select>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field label="Position Title" v-model="editedItem.position_title"
                                                required outlined dense color="green">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-textarea label="Job Description" v-model="editedItem.job_description"
                                                required outlined dense auto-grow color="green">
                                            </v-textarea>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-select :items="natureofwork" v-model="editedItem.natureofwork"
                                                label="Nature of Work" outlined dense color="green">
                                            </v-select>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field label="Place of Work" v-model="editedItem.placeofwork" required
                                                outlined dense color="green"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field label="Salary" v-model="editedItem.salary" type="text" required
                                                outlined dense color="green"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field label="Vacancy Count" v-model="editedItem.vacancy_count"
                                                type="number" required outlined dense color="green"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-text-field label="Posting Date: (mm/dd/year) "
                                                v-model="editedItem.posting_date" type="date" required dense outlined
                                                color="green">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-text-field label="Valid Until: (mm/dd/year) "
                                                v-model="editedItem.valid_until" type="date" required dense outlined
                                                color="green">
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
                                            <v-select :items="educational_level" label="Educational Level" outlined dense
                                                color="green" v-model="editedItem.educational_level">
                                            </v-select>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field label="Course Requirement" v-model="editedItem.course_requirement"
                                                required outlined dense color="green">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12" style="margin-top: -30px">
                                            <v-radio-group label="Accepts persons with disabilities (PWD):" row
                                                v-model="editedItem.pwd">
                                                <v-radio label="Yes" value="yes" color="green">
                                                </v-radio>
                                                <v-radio label="No" value="no" color="green">
                                                </v-radio>
                                            </v-radio-group>
                                            <v-col cols="12" sm="12" md="12" style="margin-top: -30px">
                                                <v-select :items="pwd" label="If 'yes': " multiple dense color="green"
                                                    outlined small-chips v-model="editedItem.pwd_1">
                                                </v-select>
                                            </v-col>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-select :items="sex_preference" label="Sex Preference" outlined dense
                                                color="green" v-model="editedItem.sex_preference">
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
                                            <v-text-field label="Work Experience (month/s): "
                                                v-model="editedItem.work_experience" required outlined dense color="green"
                                                type="number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field label="Required License: " v-model="editedItem.required_license"
                                                required outlined dense color="green"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field label="Other qualifications: "
                                                v-model="editedItem.other_qualification" required outlined dense
                                                color="green"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-select :items="employability_skills" label="Employability Skills" outlined
                                                multiple small-chips dense color="green"
                                                v-model="editedItem.employability_skills">
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
            </v-card>
        </v-dialog>
    </v-app>
</template>
<script>

export default {
    data: () => ({
        dialog: false,
        e1: 1,
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
                pwd_1: "Hearing",
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

        selected: [],
        editedItem: [],

    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Job Post" : "Edit Job Post";
        },
    },
    created() {
        this.selected.push(this.desserts.find(e => e.id == this.$route.params.id));
    },
    methods: {
        goToJobposting(item) {
            this.$router.push(`/JobPostingId/${item.id}/${this.admin}`);
        },


        editItem(desserts) {
            this.editedIndex = this.desserts.indexOf(desserts);
            this.editedItem = Object.assign({}, desserts);
            this.dialog = true;
        },

        close() {
            this.dialog = false;
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
}
</script>