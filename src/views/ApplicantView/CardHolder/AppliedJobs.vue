<template>
  <div>
    <v-col md="12" class="pa-4">
      <v-card color="#1B5E20">
        <v-card-title class="subtitle-2">
          MY JOB APPLICATIONS
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details outlined
            rounded dark dense></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-data-table :headers="headers" :items="desserts" :search="search" class="btn-hover elevation-1 pa-4"
            @click:row="editItem">
            <template v-slot:top>
              <v-dialog v-model="dialog" max-width="700px" tile>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>
                  <v-divider color="success"></v-divider>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <b class="green--text">Company Name:</b> {{ editedItem.company_name }}
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <b class="green--text">Position:</b> {{ editedItem.position }}
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="mt-n4">
                          <b class="green--text">Job Location:</b> {{ editedItem.job_location }}
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="mt-n4">
                          <b class="green--text">Status of Employment:</b> {{ editedItem.statusofemployment }}
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="mt-n4">
                          <b class="green--text">Date of Application:</b> {{ editedItem.dateofapplication }}
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="mt-n4">
                          <b class="green--text">Job Details:</b>
                          <br>
                          {{ editedItem.job_details }}
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="mt-n4">
                          <b class="green--text">Status:</b> {{ editedItem.status }}
                          <v-divider class="mt-6"></v-divider>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="mt-n2" v-show="remarks">
                          <v-select label="Appointment Remarks" color="green" dense outlined :items="remark"
                            v-model="Remarks"></v-select>
                        </v-col>
                        <v-col cols="12" sm="12" lg="12" md=12>
                          <v-text-field outlined dense color="green" class="mt-n6" counter maxlength=50
                            v-if="Remarks == 'Others'" label="Reason"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="mt-n2" v-show="cancel">
                          <v-select label="Reason for Cancellation of Application" color="green" dense outlined
                            :items="withdraw" v-model="Withdraw"></v-select>
                        </v-col>
                        <v-col cols="12" sm="12" lg="12" md=12>
                          <v-dialog v-model="status">
                            "Do you want to change your Status ang Withdraw all Job Applications?
                            <v-btn label="Yes" @click="changestatus('YES')"></v-btn>
                            <v-btn label="No" @click=""></v-btn>
                          </v-dialog>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions class="mt-n12">
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="remarks = true, cancel = false"
                      v-if="editedItem.status == 'Appointment'">
                      REMARK
                    </v-btn>
                    <v-btn color="red darken-1" text v-if="editedItem.status == 'Pending'"
                      @click="cancel = true, remarks = false">
                      Cancel Application
                    </v-btn>
                    <v-btn color="green darken-1" @click="save" class="white--text">
                      Save

                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </template>
            <!-- <template v-slot:item.actions="{ item }">
                <v-icon small class="" @click="editItem(item)"> mdi-eye </v-icon>
              </template> -->
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>
      
<script>
import Vue from 'vue'
import { mapActions } from 'vuex';
export default {
  data: () => ({
    search: "",
    status: false,
    Withdraw: false,
    Remarks: false,
    dialog: false,
    remarks: false,
    cancel: false,
    // dialog1: false,
    withdrawItem: [
      "Yes",
      "No"
    ],
    headers: [
      {
        text: "COMPANY NAME",
        align: "start",
        sortable: false,
        value: "company_name",
      },
      {
        text: "POSITION", value: "position",
        sortable: false,
      },
      {
        text: "JOB LOCATION", value: "job_location",
        sortable: false,
      },
      {
        text: "STATUS OF EMPLOYMENT", value: "statusofemployment",
        sortable: false,
      },
      { text: "DATE OF APPLICATION", align: "center", value: "dateofapplication" },
      // { text: "Action", align: "center", value: "actions", sortable: false },
      { text: "STATUS", align: "center", value: "status" },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      company_name: "",
      position: "",
      job_location: "",
      dateofapplication: "",
      statusofemployment: "",
    },
    remark: [
      "Interested / Confirm",
      "Interested but not Available / Request for Reschedule",
      "Not Interested",
      "Others"
    ],
    withdraw: [
      "Not Interested Anymore",
      "Landed a Job",
    ],
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "View Job Application";
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
          company_name: "AlfaLink",
          position: "Computer Programmer",
          job_location: "Tagum City",
          dateofapplication: "11-28-2022",
          statusofemployment: "Full-Time",
          status: "Pending",
          job_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
        {
          company_name: "Nordeco",
          position: "Computer Programmer",
          job_location: "Tagum City",
          dateofapplication: "11-28-2022",
          statusofemployment: "Full-Time",
          status: "Pending",
          job_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
        {
          company_name: "MotoStar",
          position: "Computer Programmer",
          job_location: "Tagum City",
          dateofapplication: "11-28-2022",
          statusofemployment: "Full-Time",
          status: "Pending",
          job_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
        {
          company_name: "Binos Marketing",
          position: "Computer Programmer",
          job_location: "Tagum City",
          dateofapplication: "11-28-2022",
          statusofemployment: "Full-Time",
          status: "Pending",
          job_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
        {
          company_name: "Honda Motors",
          position: "Computer Programmer",
          job_location: "Tagum City",
          dateofapplication: "11-28-2022",
          statusofemployment: "Full-Time",
          status: "Appointment",
          job_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },

        {
          company_name: "Kawasaki",
          position: "Computer Programmer",
          job_location: "Tagum City",
          dateofapplication: "11-28-2022",
          statusofemployment: "Full-Time",
          status: "Appointment",
          job_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
      ];

    },
    ...mapActions('users', ['fetchUsers']),
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.remarks = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    changestatus(status){
      console.log(Vue.prototype.$status)
      if(status == 'YES')
      this.fetchUsers()
      
      this.status=false
      this.dialog=false
    },
    save() {
      if(this.Withdraw == 'Landed a Job')
        this.status=true
      // if (this.editedIndex > -1) {
      //   Object.assign(this.desserts[this.editedIndex], this.editedItem);
      // } else {
      //   this.desserts.push(this.editedItem);
      // }
      // this.close();

    },
  },
 
};
</script>
    
    
    