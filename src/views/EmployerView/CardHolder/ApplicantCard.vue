<template>
  <div>
    <v-row class="pa-2">
      <v-col lg="6" cols="12" md="6">
        <v-card color="#1B5E20">
          <v-card-title class="subtitle-2">
            APPLICANT LIST
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details outlined
              rounded dark dense></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-data-table :headers="headers" :items="desserts" :search="search"
              class="btn-hover elevation-1 pa-4" v-model="selected">
              <template v-slot:top>
                <v-dialog v-model="dialog" max-width="550px" tile>
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
                      </v-row>
                    </v-card-text>

                    <v-card-actions class="mt-n12">
                      <v-spacer></v-spacer>
                      <v-btn color="orange darken-1" text @click="close">
                        Back
                      </v-btn>
                      <v-btn color="green darken-1" dark @click="sinagmembro(editedItem)">
                        Hire
                      </v-btn>
                      <!-- <template slot="item.actions" slot-scope="props">
                        <v-btn color="green" dark @click="() => sinagmembro(props.item)">
                          Hire
                        </v-btn>
                      </template> -->
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon small @click="editItem(item)" color="green" >
                  mdi-eye
                </v-icon>
              </template>
              <!-- <template slot="item.actions" slot-scope="props">
                <v-btn color="green" dark @click="() => sinagmembro(props.item)">
                  Hire
                </v-btn>
              </template> -->
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- sinag -->
      <v-col md="6" cols="12">
        <v-card height="450" class="wrapper">
          <div class="text-center ">
            <v-alert dense dark color="#1B5E20">
              HIRED APPLICANTS
            </v-alert>
          </div>
          <v-data-table :headers="hireheaders" :items="hired" :hide-default-footer="true" :items-per-page="20" scrollable>
          </v-data-table>
          <!-- <template v-slot:item.actions="{ item }">
                <v-icon small class="" @click="editItem(item)">
                  mdi-eye
                </v-icon>
              </template> -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      dialog_for_input_hours: false,
      applicantlist: false,
      dialog: false,
      dialog1: false,
      dialog_sample: false,
      selected: [],
      hireheaders: [
        {
          text: 'First Name',
          sortable: false,
          value: 'firstname',
        },
        {
          text: 'Last Name',
          sortable: false,
          value: 'lastname',
        },
        {
          text: 'Contact Number',
          sortable: false,
          value: 'contact_number',
        },
        // { text: 'Actions', value: 'actions', align: 'center', sortable: false },
      ],
      hired: [],

      editedItem: [],
      sinagmembers: [],
      non_sinagmembers: [],
      selected: [],
      search: '',
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
          text: 'Job Posting Applied',
          align: 'left',
          sortable: false,
          value: 'jobpostingapplied',
        },
        {
          text: 'Contact Number',
          align: 'left',
          sortable: false,
          value: 'contact_number',
        },
        { text: 'Actions', value: 'actions', align: 'center', sortable: false },
      ],

      desserts: [
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
          firstname: "Honey",
          lastname: "Curay",
          jobpostingapplied: "Computer Programmer",
          contact_number: "09123456789",
        },

        {
          firstname: "Neil",
          lastname: "Roble",
          jobpostingapplied: "Computer Programmer",
          contact_number: "09123456789",
        },
      ],
    }
  },

  // computed: {
  //   formTitle() {
  //     return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
  //   },
  // },
  methods: {
    // 
    




    
    sinagmembro(item) {
      this.hired.push({ firstname: item.firstname, lastname: item.lastname, contact_number: item.contact_number })
      this.desserts = this.desserts.filter((nem) => nem.firstname !== item.firstname);
      this.dialog = false;
      console.log(item.firstname);// eslint-disable-line no-console
      console.log(this.selected);// eslint-disable-line no-console
      console.log("Na Hire Nani bai");// eslint-disable-line no-console
    },
    editItem(item) {
      this.editedIndex = this.sinagmembers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      console.log(this.editedItem)// eslint-disable-line no-console
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.sinagmembers[this.editedIndex], this.editedItem)
      } else {
        this.sinagmembers.push(this.editedItem)

      }
      this.close()
    },
  },
  deleteItem(item) {
    this.editedIndex = this.desserts.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialogDelete = true
  },
  deleteItemConfirm() {
    this.desserts.splice(this.editedIndex, 1)
    this.closeDelete()
  },
  closeDelete() {
    this.dialogDelete = false
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    })
  },
}
</script>


<style scoped>
.v-text-field .v-input__control .v-input__slot .v-input__append-inner {
  margin-top: 5px !important;
}

.theme--light.v-icon {
  color: blue !important;
}

.v-input--selection-controls__ripple.green--text {
  color: blue !important;
}

.wrapper {
  box-shadow: 0 0 8px rgb(0, 0, 0);
}

.brgy-hover {
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 20px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.brgy-hover:focus {
  outline: none;
}

.btn-hover.color-1 {
  /*  background-image: linear-gradient(to right, #186f94, #0e7e48,  #0c8a4d,  #078045);
 box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644); */
}
</style>