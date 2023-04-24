<template>
  <div>
    <v-navigation-drawer v-model="drawer" color="#1B5E20" dark app height="1200" width="310">
      <v-container>
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-avatar size="100">
              <img src="@/assets/download.png" alt="" />
            </v-avatar>
            <p class="white--text subheading mt-1 text-center">Member</p>
            <h5 class="yellow--text mt-n4 ml-4">{{ JobStatus }}</h5>
          </v-flex>
          <v-flex class="mt-3">
            <h3 class="white--text subheading mt-1 text-center">Member 1</h3>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider dark></v-divider>

      <v-list shaped class="clickable">
        <template v-for="item in items">
          <v-list-group v-if="item.children" :key="item.text" v-model="item.model" :prepend-icon="item['icon-ctr']"
            :append-icon="item.model ? item.icon : item['icon-alt']" active-class="orange--text">
            <template v-slot:activator>
              <v-list-item-content>
                {{ item.text }}
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" route :to="child.route" active-class="orange--text"
              @click="closeAllOpen(item.text)">
              <v-list-item-content v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-content>
              <v-list-item-content class="ml-n12">
                {{ child.text }}
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else=":key='item.text'" active-class="orange--text" route :to="item.route"
            @click="closeAllOpen(item.text)">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title > 
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#388E3C" dark app elevate-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <v-btn text @click="$router.push({ name: 'ApplicantDashboard' })">
          <span class="font-weight-bold"> CPEESO Member Module </span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-text-field hide-details append-icon="mdi-magnify" single-line outlined dense rounded></v-text-field>
      </div>
      <div class="ml-4">
        <v-icon class="button" dark>mdi-bell-badge-outline </v-icon>
      </div>
      <div class="ml-4">
        <v-icon class="button" dark>mdi-message-badge-outline </v-icon>
      </div>
    </v-app-bar>
  </div>
</template>
    
    
<script>
import { mapGetters } from 'vuex';
export default {
  methods: {
    closeAllOpen(name) {
      if (name == 'Dashboard') {
        this.items[1].model = false
        this.items[2].model = false
        this.items[3].model = false
        this.items[4].model = false
        this.items[5].model = false
        this.items[6].model = false
        this.items[7].model = false
        console.log(name)
      }
      else if (name == 'Profile') {
        this.items[1].model = false
        this.items[2].model = false
        this.items[3].model = false
        this.items[4].model = false
        this.items[5].model = false
        this.items[6].model = false
        this.items[7].model = false
        console.log(name)
      }
      else if (name == 'Announcement') {
        this.items[1].model = false
        this.items[2].model = false
        this.items[3].model = false
        this.items[4].model = false
        this.items[5].model = false
        this.items[6].model = false
        this.items[7].model = false
      }  
    }
  },

  data: () => ({

    drawer: null,
    JobStatus: '',
    items: [
      { icon: "mdi-home", text: "Dashboard", route: "/MemberPage/ApplicantDashboard" },
      {
        icon: "mdi-chevron-down", "icon-ctr": "mdi-briefcase", text: "Employment", model: false,
        children: [
          { icon: "mdi-crosshairs-gps", text: "Job Hunt", route: "/MemberPage/AvailableJobs" },
          { icon: "mdi-application-settings", text: "Jobs Applied", route: "/MemberPage/AppliedJobs" }
        ]
      },
      {
        icon: "mdi-chevron-down", "icon-ctr": "mdi-book-education", text: "Education", model: false,
        children: [
          { icon: "mdi-clipboard-file-outline", text: "Available Programs", route: "/MemberPage/ScholarshipAvail" },
          { icon: "mdi-clipboard-check-outline", text: "Programs Applied", route: "/MemberPage/ScholarshipApplied" },
        ]
      },
      {
        icon: "mdi-chevron-down", "icon-ctr": "mdi-human-male-board", text: "Training / Livelihood", model: false,
        children: [
          { icon: "mdi-crosshairs", text: "Available Trainings", route: "/MemberPage/AvailableTraining" },
          { icon: "mdi-application-settings-outline", text: "Trainings Applied", route: "/MemberPage/AppliedTraining", },
        ]
      },
      { icon: "mdi-message", text: "Announcement", route: "/MemberPage/ApplicantAnnouncement" },
      { icon: "mdi-printer-outline", text: "Print PDS", route: "/MemberPage/PrintLayout" },

      // { icon: "mdi-crosshairs-gps", text: "Job Hunt", route: "/AvailableJobs" },
      // { icon: "mdi-application-settings", text: "Jobs Applied", route: "/AppliedJobs" },
      // {
      //   icon: "mdi-application-settings-outline",
      //   text: "Trainings Applied",
      //   route: "/AppliedTraining",
      // },
      // {
      //   icon: "mdi-crosshairs",
      //   text: "Available Trainings",
      //   route: "/AvailableTraining",
      // },
      // { icon: "mdi-printer-outline", text: "Print PDS", route: "/PrintDocument" },
      {icon: "mdi-account-box",text: "Profile",route: "/MemberPage/ApplicantProfile",},
      { icon: "", text: "", route: "" },
      {icon: "mdi-logout",text: "Log Out",route: "/",},
    ],
  }),
  computed: {
    ...mapGetters('users', { users: 'getUsers' }),
    changeStatus() {
      console.log("jobstatus=>", this.JobStatus)
      this.JobStatus = this.users.status

    }

  },
  created() {
    this.JobStatus = this.users.status

    console.log("users=>", this.users.status)
  },

};
</script>


<style></style>