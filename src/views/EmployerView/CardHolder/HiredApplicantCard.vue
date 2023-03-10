<template>
    <div>
      <v-col md="12" class="pa-4">
        <v-card color="#1B5E20">
          <v-card-title class="subtitle-2">
            APPLICANT LIST
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              outlined
              rounded
              dark
              dense
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
              class="btn-hover elevation-1 pa-4"
            >
              <template v-slot:top>
                  <v-dialog v-model="dialog" max-width="550px" tile>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                      </v-card-title>
                      <v-divider color="success"></v-divider>
  
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field
                                v-model="editedItem.firstname"
                                label="First Name"
                                outlined
                                readonly
                                color="success"
                                dense
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field
                                v-model="editedItem.lastname"
                                label="Last Name" outlined
                                readonly
                                color="success"
                                dense
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field
                                v-model="editedItem.jobpostingapplied"
                                label="Job Posting Applied" outlined
                                readonly
                                color="success"
                                dense
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field
                                v-model="editedItem.contact_number"
                                label="Contact Number" outlined
                                readonly
                                color="success"
                                dense
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
  
                      <v-card-actions class="mt-n12">
                        <v-spacer></v-spacer>
                        <v-btn color="orange darken-1" text @click="close">
                          Back
                        </v-btn>
                        <v-btn color="green darken-1"  dark @click="save">
                          Hire
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon small class="" @click="editItem(item)">
                  mdi-eye
                </v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </div>
  </template>
      
    <script>
  export default {
    data: () => ({
      search: "",
      dialog: false,
      headers: [
        {
          text: "FIRST NAME",
          align: "start",
          sortable: false,
          value: "firstname",
        },
        { text: "LAST NAME", value: "lastname" },
        { text: "JOB POSTING APPLIED", value: "jobpostingapplied" },
        { text: "CONTACT NUMBER", value: "contact_number" },
        { text: "Action", value: "actions", sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        firstname: "",
        lastname: "",
        jobpostingapplied: "",
        contact_number: "",
      },
    }),
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "New Item" : "View Applicant";
      },
    },
    watch: {
      dialog(val) {
        val || this.close();
      },
    },
    created() {
      this.initialize();
    },
    methods: {
      initialize() {
        this.desserts = [
          {
            firstname: "Joemarie",
            lastname: "Rendon",
            jobpostingapplied: "Computer Programmer",
            contact_number: "09123456789",
          },
          {
            firstname: "Joemarie",
            lastname: "Rendon",
            jobpostingapplied: "Computer Programmer",
            contact_number: "09123456789",
          },
          {
            firstname: "Joemarie",
            lastname: "Rendon",
            jobpostingapplied: "Computer Programmer",
            contact_number: "09123456789",
          },
          {
            firstname: "Joemarie",
            lastname: "Rendon",
            jobpostingapplied: "Computer Programmer",
            contact_number: "09123456789",
          },
          {
            firstname: "Joemarie",
            lastname: "Rendon",
            jobpostingapplied: "Computer Programmer",
            contact_number: "09123456789",
          },
          {
            firstname: "Joemarie",
            lastname: "Rendon",
            jobpostingapplied: "Computer Programmer",
            contact_number: "09123456789",
          },
          {
            firstname: "Joemarie",
            lastname: "Rendon",
            jobpostingapplied: "Computer Programmer",
            contact_number: "09123456789",
          },
          {
            firstname: "Rey",
            lastname: "Alcala",
            jobpostingapplied: "Computer Programmer",
            contact_number: "09123456789",
          },
          {
            firstname: "Joemarie",
            lastname: "Rendon",
            jobpostingapplied: "Computer Programmer",
            contact_number: "09123456789",
          },
  
          {
            firstname: "Joemarie",
            lastname: "Rendon",
            jobpostingapplied: "Computer Programmer",
            contact_number: "09123456789",
          },
        ];
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
      },
    },
  };
  </script>
    
    
    