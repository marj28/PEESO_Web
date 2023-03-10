<template>
    <v-app>
        <div class="div">
            
            <!-- <v-if {{ employer }}="false" admin-navbar/>
            <v-else employer-navbar/> -->
            <admin-navbar v-if="this.$route.params.admin === 'true'"></admin-navbar>
            <employer-navbar v-else></employer-navbar>
        </div>
        <v-main>
            <v-card class="mt-4 ml-4 mr-4" outlined v-for="items in selected" :key="id">
                <v-card-title class="green darken-4 white--text"> JOB POSTING DETAILS</v-card-title>
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
    </v-app>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
       
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
        selected: [],
        
    }),
    created() {
        this.selected.push(this.desserts.find(e => e.id == this.$route.params.id));
        // this.employer=this.$route.params.employer;
        console.log("id=>",this.$route.params.id);
        console.log("admin=>",this.$route.params.admin);
        console.log("employer=>", this.employer);
        // console.log("selected=>", this.selected);
        // console.log("selected=>", this.$route.params.id);
    }
}
</script>