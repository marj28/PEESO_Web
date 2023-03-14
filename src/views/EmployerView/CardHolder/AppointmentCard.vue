<template>
  <v-data-table :headers="headers" :items="desserts" :search="search" class="">
    <template v-slot:top>
      <v-card flat dark color="#1B5E20">
        <v-card-title>APPOINTMENT POST
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details outlined
            rounded dense></v-text-field>
          <v-divider class="mx-4" vertical inset></v-divider>

          <v-dialog v-model="dialog" max-width="550px" persistent>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="success" dark class="mt-1" v-bind="attrs" v-on="on">
                <v-icon> mdi-plus </v-icon> NEW APPOINTMENT
              </v-btn>
            </template>

            <v-card>
              <v-card-title>
                <span class="text-h5" color="green">{{ formTitle }}</span>
              </v-card-title>
              <v-divider color="green"></v-divider>

              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field label="Appointment Title" required outlined dense color="green"
                        v-model="editedItem.appointment_title">
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
                    <v-col cols="12" sm="12" md="12">
                      <v-select :items="applicants" v-model="editedItem.applicants" class="mt-n6" label="Target Applicants" outlined small-chips multiple dense color="green">
                      </v-select>
                    </v-col>
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
            <!-- <v-dialog v-model="dialog1" max-width="290">
                      <v-card>
                          <v-card-title class="text-h5"> UNSAVED CHANGES </v-card-title>

                          <v-card-text>
                              You have created an Appointment. Do you want to save or
                              discard it?
                          </v-card-text>

                          <v-card-actions>
                              <v-spacer></v-spacer>

                              <v-btn color="green darken-1" text @click="dialog = false">
                                  Discard
                              </v-btn>

                              <v-btn color="green darken-1" text @click="dialog = false, show = false" type="submit">
                                  Save
                              </v-btn>
                          </v-card-actions>
                      </v-card>
                  </v-dialog> -->
          </v-dialog>

        </v-card-title>

        <v-dialog v-model="dialog1" max-width="550px" persistent>
          <v-card>
            <v-card-title>
              <span class="text-h5" color="green">View Appointment</span>
            </v-card-title>
            <v-divider color="green"></v-divider>

            <v-card-text>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <b class="green--text">Appointment Title:</b> {{ editedItem.appointment_title }}
                  </v-col>
                  <v-col cols="6" sm="6" md="6">
                    <b class="green--text">Date:</b> {{ editedItem.date }}
                  </v-col>
                  <v-col cols="6" sm="6" md="6">
                    <b class="green--text">Time:</b> {{ editedItem.time }}
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <b class="green--text">Location:</b> {{ editedItem.location }}
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <b class="green--text">Target Applicants:</b> {{ editedItem.applicants }}                    
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <b class="green--text">Details:</b> {{ editedItem.details }}
                  </v-col>
                </v-row>
              </v-container>
              <v-container class="mt-n6">
                <v-btn @click="dialog1 = false" color="success" block> Exit </v-btn>
              </v-container>

            </v-card-text>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h6">Are you sure to delete this Appointment?</v-card-title>
            <v-divider color="success"></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="orange darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="green darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="viewItem(item)" color="success">
        mdi-eye
      </v-icon>
      <v-icon small class="mr-2" @click="editItem(item)" color="warning">
        mdi-pencil
      </v-icon>

      <v-icon small @click="deleteItem(item)" color="error"> mdi-delete </v-icon>
    </template>
    <template slot="item.switch1" slot-scope="{ item }">
      <v-switch v-model="item.switch1" color="success" dense></v-switch>
    </template>
  </v-data-table>
</template>

<script>
/* eslint-disable */

export default {
  components: {},

  data: () => ({
    search: "",
    dialog: false,
    dialog1: false,
    dialogDelete: false,
    applicants: [
      'Honey Curay',
      'Rey Alcala',
      "Joemarie Rendon",
      "Neil Roble",
      "Jograd Mahusay",
      "John Gerber Ungcad",
    ],
    headers: [
      { text: "Appointment Title", value: "appointment_title", sortable: false, },
      { text: "Target Applicants", value: "applicants", sortable: false, },
      { text: "Actions", value: "actions", sortable: false, },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {

    },
    defaultItem: {

    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Appointment" : "Edit Appointment";
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
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          appointment_title: "Applicant Training",
          applicants: ['Rey Alcala' , 'Honey Curay'],
          details: "ASASASA",
          date: "2024-06-12",
          time: "08:00",
          location: "Tagum City"
        },
        {
          appointment_title: "Applicant Orientation",
          applicants: 'Neil Roble',
          details: "ASASASA",
          date: "2024-06-12",
          time: "13:00",
          location: "Tagum City"
        },
        {
          appointment_title: "Applicant Meeting",
          applicants: 'Joemarie Rendon',
          details: "ASASASA",
          date: "2024-06-12",
          time: "01:00 AM",
          location: "Tagum City"
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    viewItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog1 = true;
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

