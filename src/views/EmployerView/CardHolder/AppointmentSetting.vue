<template>
    <v-app>
        <div>
            <employer-navbar />
        </div>
        <v-main>
            <v-card class="mt-4 ml-4 mr-4" outlined v-for="items in selected" :key="id">
                <v-card-title class="green darken-4 white--text"> <v-icon small class="mr-2"
                        @click="$router.push({ name: 'EmployerAppointments' })" color="white">
                        mdi-arrow-left
                    </v-icon>APPOINTMENT DETAILS
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
                                    {{ items.jobpost }}
                                </div>
                                <v-list-item-title class="text-h6 mb-1 green--text">
                                    {{ items.appointment_title }}
                                </v-list-item-title>
                                <p class="pl-12 pr-12 pt-5" justify="center">{{ items.details }}</p>
                                <v-list-item-title class="text-h8 mb-1 mt-4">
                                    <b color="#1B5E20">Date:</b> {{ items.date }}
                                </v-list-item-title>
                                <v-list-item-title class="text-h8 mb-1">
                                    <b color="#1B5E20">Time:</b> {{ items.time }}
                                </v-list-item-title>
                                <v-list-item-title class="text-h8 mb-1">
                                    <b color="#1B5E20">Location:</b> {{ items.location }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-card>
            <v-row>
                <v-col lg="12" cols="12" md="12" class="pa-6">
                    <v-card color="#1B5E20">
                        <v-card-title class="subtitle-2">
                            FOR INTERVIEW LIST
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
                                outlined rounded dark dense></v-text-field>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table :headers="headers" :items="desserts2" :search="search" @click:row="viewItem"
                                v-model="selected" class="btn-hover elevation-1 pa-4" item-key="id">
                                <template v-slot:top>
                                    <v-dialog v-model="dialog2" max-width="800px" tile>
                                        <v-card>
                                            <v-card-title>
                                                <span class="text-h5">View Applicant</span>
                                            </v-card-title>
                                            <v-divider color="success"></v-divider>

                                            <v-card-text>

                                                <v-row>
                                                    <v-col cols="12" sm="12" md="12">
                                                        <h4 class="green--text"> Applicant Details</h4>
                                                        <p>{{ editedItem.firstname }} {{ editedItem.lastname }}</p>
                                                        <p>{{ editedItem.contact_number }}</p>
                                                    </v-col>
                                                    <v-col cols="12" sm="12" md="12">
                                                        <h4 class="green--text mt-n3 "> Job Application</h4>
                                                        <p class="mb-12">{{ editedItem.jobpostingapplied }}</p>
                                                    </v-col>
                                                    <v-col cols="12" sm="12" md="12">
                                                        <h4 class="green--text mt-n12 "> Additional Details</h4>
                                                        <p class="mb-12">{{ editedItem.details }}</p>
                                                    </v-col>
                                                    <v-col cols="12" sm="12" md="12">
                                                        <h4 class="green--text mt-n12 "> Interviewers Remarks</h4>
                                                        <v-text-field v-model="editedItem.remark" maxlength="20" outlined color="success" dense></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="12" md="12" class="mt-2">
                                                        <h4 class="green--text mt-n12 "> Interviewers Recommendation</h4>
                                                        <v-text-field outlined color="success" dense></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>

                                            <v-card-actions class="mt-n12">
                                                <v-spacer></v-spacer>
                                                <v-btn color="green darken-1" text @click="save2">
                                                    Save
                                                </v-btn>
                                                <v-btn color="orange darken-1" text @click="close2">
                                                    Back
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-main>
        <!-- dialog for edit -->
        <v-dialog v-model="dialog" max-width="700px" persistent>
            <v-card>
                <v-card-title>
                    <span class="text-h5" color="green">{{ formTitle }}</span>
                </v-card-title>
                <v-divider color="green"></v-divider>

                <v-card-text>
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <v-select :items="jobpost" label="Choose Job Post" outlined dense color="green"
                                    v-model="editedItem.jobpost" readonly></v-select>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field label="Appointment Title" required outlined dense color="green"
                                    v-model="editedItem.appointment_title" class="mt-n6">
                                </v-text-field>
                            </v-col>
                            <v-col cols="6" sm="6" md="6">
                                <v-text-field label="Date" type="date" required outlined dense color="green"
                                    v-model="editedItem.date" class="mt-n6">
                                </v-text-field>
                            </v-col>
                            <v-col cols="6" sm="6" md="6">
                                <v-text-field label="Time" type="time" required outlined dense color="green"
                                    v-model="editedItem.time" class="mt-n6">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field label="Location" type="text" required outlined dense color="green"
                                    v-model="editedItem.location" class="mt-n6">
                                </v-text-field>
                            </v-col>
                            <!-- <v-col cols="12" sm="12" md="12">
                      <v-select :items="applicants" v-model="editedItem.applicants" class="mt-n6"
                        label="Target Applicants" outlined small-chips multiple dense color="green">
                      </v-select>
                    </v-col> -->
                            <v-col cols="12" sm="12" md="12">
                                <v-textarea label="Details" type="text" required outlined dense color="green"
                                    v-model="editedItem.details" class="mt-n6" auto-grow clearable>
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container style="margin-top: -80px">
                        <v-btn id="v-btn-c" color="success" @click=save>
                            Save
                        </v-btn>
                        <v-btn @click="dialog = false" class="ma-2" text color="warning"> Cancel </v-btn>
                    </v-container>

                </v-card-text>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        applicantlist: false,
        dialog: false,
        dialog2: false,
        selected: [],
        singleSelect: false,
        headers: [
            {
                text: 'First Name',
                align: 'left',
                sortable: false,
                value: 'firstname',
            },

            {
                text: 'Last Name',
                align: 'left',
                sortable: false,
                value: 'lastname',
            },
            {
                text: 'Contact Number',
                align: 'center',
                sortable: false,
                value: 'contact_number',
            },
            // {
            //     text: 'Appointment Schedule',
            //     align: 'center',
            //     sortable: false,
            //     value: 'schedule',
            // },
            {
                text: 'Remarks',
                align: 'center',
                sortable: false,
                value: 'remark',
            },
            // {
            //     text: 'Action',
            //     align: 'center',
            //     sortable: false,
            //     value: 'remove',
            // },
        ],
        editedItem: [],
        applicants: [],
        search: '',
        desserts: [
            {
                id: 1,
                appointment_title: "Applicant Training",
                jobpost: "Data Analyst",
                details: "Need nata mag training ataya ka",
                date: "2024-09-12",
                time: "08:00",
                location: "Tagum City"
            },
            {
                id: 2,
                appointment_title: "Applicant Orientation",
                jobpost: "Data Programmer",
                details: "Orient kay wa kay hotdog hahhaha",
                date: "2024-06-12",
                time: "13:00",
                location: "Tagum City"
            },
            {
                id: 3,
                appointment_title: "Applicant Meeting",
                jobpost: "Data Contoller",
                details: "Meeting na ta hhahhaa",
                date: "2023-06-12",
                time: "01:00",
                location: "Tagum City"
            },
        ],
        desserts2: [
            {
                id: 1,
                firstname: "Joemarie",
                lastname: "Rendon",
                jobpostingapplied: "Data Controller",
                contact_number: "09123456789",
                remark: "For Final Decision",
                details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue."
            },
            {
                id: 2,
                firstname: "Rey",
                lastname: "Alcala",
                jobpostingapplied: "Computer Programmer",
                contact_number: "09123456789",
                remark: "For Final Decision",
                details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue."
            },
            {
                id: 3,
                firstname: "Honey",
                lastname: "Curay",
                jobpostingapplied: "Computer Programmer",
                contact_number: "09123456789",
                remark: "",
                details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue."
            },

            {
                id: 4,
                firstname: "Neil",
                lastname: "Roble",
                jobpostingapplied: "Computer Programmer",
                contact_number: "09123456789",
                remark: "",
                details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue."
            },
        ],
        jobpost: [
            'Data Programmer',
            'Data Analyst',
            'Data Controller',
        ],
        selected: [],
        editedItem: [],
    }),
    created() {
        this.selected.push(this.desserts.find(e => e.id == this.$route.params.id));
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Appointment" : "Edit Appointment";
        },
    },
    methods: {
        goToAppointmentPost(item) {
            this.$router.push(`/AppointmentId/${item.id}`)
        },
        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        viewItem(item){
            this.editedIndex = this.desserts2.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog2 = true;
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
        close2() {
            this.dialog2 = false;
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
            this.dialog = false
        },
        save2() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts2[this.editedIndex], this.editedItem);
            } 
            this.close();
            this.dialog2 = false
        },
    }


}
</script>