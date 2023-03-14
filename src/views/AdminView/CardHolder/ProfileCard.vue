<template>
    <div>
      <v-col>
        <v-card outlined color="#1B5E20">
          <v-card-title
            class="d-flex flex-column justify-space-between align-center"
          >
            <v-avatar size="100">
              <img src="@/assets/download.png" />
            </v-avatar>
          </v-card-title>
          <v-card-text
            class="d-flex flex-column justify-space-between align-center"
            style="color: white"
          >
            <p class="font-weight-black">Admin Name</p>
            <p class="font-weight-bold">Admin Position</p>
            <p class="font-weight-medium">Admin Office</p>
          </v-card-text>
        </v-card>
        <v-card class="">
          <h3 class="ma-2 pa-2 green--text">User Profile</h3>
          <v-spacer></v-spacer>
          <v-row>
            <v-col cols="5">
              <v-subheader class="ml-5">Full Name</v-subheader>
              
            </v-col>
            <v-col cols="6">
              <v-text-field outlined dense color="success"></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -35px">
            <v-col cols="5">
              <v-subheader class="ml-5">Designation</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined dense color="success"></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -35px">
            <v-col cols="5">
              <v-subheader class="ml-5">Email Address</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined dense color="success"></v-text-field>
              <v-btn color="success" dark small  right="true" class="ma-2 "> SAVE </v-btn>
            </v-col>
          </v-row>
          
          <v-row>
            
          </v-row>
        </v-card>
      </v-col>
    </div>
  </template>
  <script>
  export default {
    components: {},
    data: () => ({
      
    }),
  };
  </script>
    