<template>
  <div>
    <v-col md="12" class="pa-4">
      <v-card outlined color="#1B5E20">
        <v-card-title class="subtitle-2">
          APPOINTMENTS
          <v-spacer></v-spacer> <v-spacer></v-spacer> <v-spacer></v-spacer><v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
            hide-details outlined rounded dark dense></v-text-field>
         <v-divider inset vertical class="mx-2" dark></v-divider>
          <template>
            <v-dialog v-model="show" max-width="600px" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="success" dark v-bind="attrs" v-on="on">
                  <v-icon> mdi-plus </v-icon>

                  New Appointment
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5" color="green">Create Appointment</span>
                </v-card-title>
                <v-divider color="green"></v-divider>

                <v-card-text>
                  <v-container fluid class="mb-n8">
                    <v-row>
                      <v-col cols="3" sm="6" md="3">
                        Job Posts:
                      </v-col>
                      <v-col cols="9" sm="6" md="9">
                        <v-select :items="job_post" outlined dense color="green">
                        </v-select>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field label="Appointment Title" required outlined dense color="green">
                        </v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field label="Date" type="date" required outlined dense color="green">
                        </v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field label="Time" type="time" required outlined dense color="green">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field label="Location" type="text" required outlined dense color="green">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        Target Applicants

                        <v-select :items="applicants" outlined small-chips multiple dense color="green">
                        </v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-btn id="v-btn-c" color="success" @click.stop="dialog = true">
                    Create
                  </v-btn>
                  <v-btn @click="show = false" class="ma-2" text color="warning"> Cancel </v-btn>
                </v-card-text>
              </v-card>
              <v-dialog v-model="dialog" max-width="290">
                <v-card>
                  <v-card-title class="text-h5"> UNSAVED CHANGES </v-card-title>
                  <v-divider color="success"></v-divider>
                  <v-card-text class="mt-2">
                    You have created an Appointment. Do you want to save or
                    discard it?
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="orange darken-1" text @click="dialog = false">
                      Discard
                    </v-btn>

                    <v-btn color="green darken-1" text @click="dialog = false, show = false" type="submit">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-dialog>
          </template>
        </v-card-title>
        <v-card-text>
          <v-data-table class="" :headers="headers" :items="pending">
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>
<script>

export default {
  components: {
  },
  data: () => ({
    search: "",
    show: false,
    dialog: false,
    applicants: [
      "Honey Curay",
      "Rey Alcala",
      "Joemarie Rendon",
      "Neil Roble",
      "Jograd Mahusay",
      "John Gerber Ungcad",
    ],
    job_post: [
      "Computer Programmer",
      "Computer Technician",
      "Network Technician"
    ],
    headers: [
      {
        text: "JOB POST",
        align: "left",
        value: "name",
      },
      { text: "APPOINTMENT", value: "type_appointment" },
      { text: "DATE", value: "date" },
      { text: "TIME", value: "time" },
      { text: "LOCATION", value: "location" },
      { text: "NUMBER OF APPLICANTS", value: "no_applicants" },
    ],
    pending: [
      {
        name: "Computer Programmer",
        type_appointment: "Initial Interview",
        date: "January 31, 2023",
        time: "8:00 AM - 9:00 AM",
        location: "City Hall of Tagum - Atrium",
        no_applicants: "45",
      },
      {
        name: "Computer Programmer",
        type_appointment: "Initial Interview",
        date: "January 31, 2023",
        time: "8:00 AM - 9:00 AM",
        location: "City Hall of Tagum - Atrium",
        no_applicants: "45",
      },
      {
        name: "Computer Programmer",
        type_appointment: "Initial Interview",
        date: "January 31, 2023",
        time: "8:00 AM - 9:00 AM",
        location: "City Hall of Tagum - Atrium",
        no_applicants: "45",

      },
      {
        name: "Computer Programmer",
        type_appointment: "Initial Interview",
        date: "January 31, 2023",
        time: "8:00 AM - 9:00 AM",
        location: "City Hall of Tagum - Atrium",
        no_applicants: "45",

      },
      {
        name: "Computer Programmer",
        type_appointment: "Initial Interview",
        date: "January 31, 2023",
        time: "8:00 AM - 9:00 AM",
        location: "City Hall of Tagum - Atrium",
        no_applicants: "45",

      },
    ],
  }),
};
</script>
  