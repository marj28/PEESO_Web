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
                <v-col cols="12" md="12" lg="12" class="pa-6">
                    <appointment-applicant />
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
        dialog: false,
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
            this.dialog = false
        },
    }


}
</script>