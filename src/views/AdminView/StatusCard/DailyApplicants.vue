<template>
    <v-app>
      <AdminNavbar />
      <v-main>
        <v-container >
          <div id="app">
            <v-app id="inspire">
              <v-card elevation="20" >
                <v-card-title>
                  Daily Applicants on {{ date }}
                  <v-spacer></v-spacer>
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-card-title>
                <v-data-table                                     
                  :headers="headers"
                  :items="desserts"
                  :search="search"
                ></v-data-table>
              </v-card>
            </v-app>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import AdminNavbar from "@/views/Navigation/AdminNavbar.vue";
  
  export default {
    components: {
      AdminNavbar,
    },
    data() {
      return {
        search: "",
        headers: [
          {
            text: "Complete Name",
            align: "start",
            sortable: false,
            value: "name",
          },
          { text: "Applied Position", sortable: false, value: "AppPosition" },
          { text: "Course Graduated (If Applicable)", sortable: false, value: "course" },
          { text: "Contact Number",  sortable: false, value: "contact" },
          { text: "Address", sortable: false, value: "address" },
        //   { text: "Iron (%)", value: "iron" },
        ],
        desserts: [
          {
            name: "Frozen Yogurt",
            AppPosition: 159,
            course: 6.0,
            contact: 24,
            address: 4.0,
            // iron: 1,
          },
          {
            name: "Ice cream sandwich",
            AppPosition: 237,
            course: 6.0,
            contact: 24,
            address: 4.0,
            // iron: 1,
          },
          {
            name: "Eclair",
            AppPosition: 262,
            course: 6.0,
            contact: 24,
            address: 4.0,
            // iron: 1,
          },
          {
            name: "Cupcake",
            AppPosition: 305,
            course: 6.0,
            contact: 24,
            address: 4.0,
            // iron: 1,
          },
          {
            name: "Gingerbread",
            AppPosition: 356,
            course: 6.0,
            contact: 24,
            address: 4.0,
            // iron: 1,
          },
          {
            name: "Jelly bean",
            AppPosition: 375,
            course: 6.0,
            contact: 24,
            address: 4.0,
            // iron: 1,
          },
          {
            name: "Lollipop",
            AppPosition: 392,
            course: 6.0,
            contact: 24,
            address: 4.0,
            // iron: 1,
          },
          {
            name: "Honeycomb",
            AppPosition: 408,
            course: 6.0,
            contact: 24,
            address: 4.0,
            // iron: 1,
          },
          {
            name: "Donut",
            AppPosition: 452,
            course: 6.0,
            contact: 24,
            address: 4.0,
            // iron: 1,
          },
          {
            name: "KitKat",
            AppPosition: 518,
            course: 6.0,
            contact: 24,
            address: 4.0,
            // iron: 1,
          },
        ],
      };
    },
  };
  </script>