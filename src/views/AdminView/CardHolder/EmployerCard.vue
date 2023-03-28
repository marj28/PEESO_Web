<template>
    <div>
      <v-col md="12" class="pa-4">
        <v-card color="#1B5E20">
          <v-card-title class="subtitle-2">
            EMPLOYER LIST
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
              @click:row="editItem"
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
                            <v-col cols="12" sm="12" md="12">
                              <b class="green--text">Business Name:</b>  {{ editedItem.business_name }}
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                              <b class="green--text">Business Location:</b>  {{ editedItem.location }}
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                              <b class="green--text">Business Email:</b>  {{ editedItem.email_address }}
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                              <b class="green--text">Business Contact Number:</b>  {{ editedItem.contact_number }}
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
  
                      <v-card-actions class="mt-n6">
                        <v-spacer></v-spacer>
                        <v-btn color="orange darken-1" text @click="close">
                          Back
                        </v-btn>
                        <v-btn color="green darken-1"  dark @click="save">
                          Accept
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
              </template>
              <!-- <template v-slot:item.actions="{ item }">
                <v-icon small class="" @click="editItem(item)">
                  mdi-eye
                </v-icon>
              </template> -->
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
          text: "BUSINESS NAME",
          align: "start",
          sortable: false,
          value: "business_name",
        },
        { text: "LOCATION", value: "location",
        sortable: false, },
        { text: "EMAIL ADDRESS", value: "email_address",
        sortable: false, },
        { text: "CONTACT NUMBER", value: "contact_number",
        sortable: false, },
        // { text: "Action", value: "actions", sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
      },
    }),
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "New Item" : "View Employer";
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
            business_name: "Go Marketing",
            location: "Tagum City",
            email_address: "go@gmail.com",
            contact_number: "0921125545",
          },
          {
            business_name: "Rey Enterprise",
            location: "Davao City",
            email_address: "a@a.com",
            contact_number: "09123456789",
          },
          {
            business_name: "Joe Lending Corp.",
            location: "Mati City",
            email_address: "v@v.com",
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
    
    
    