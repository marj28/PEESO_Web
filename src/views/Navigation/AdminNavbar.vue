<template>
  <div>
    <v-navigation-drawer v-model="drawer" color="#1B5E20" dark app height="1200" width="280">
      <v-container>
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-avatar size="100">
              <img src="@/assets/download.png" alt="" />
            </v-avatar>
            <p class="white--text subheading mt-1 text-center">Administrator</p>
          </v-flex>
          <v-flex class="mt-3">
            <h3 class="white--text subheading mt-1 text-center">PEESO Personnel</h3>
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
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" route :to="child.route" active-class="orange--text">
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" active-class="orange--text" route :to="item.route">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
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
        <v-btn text @click="$router.push({ name: 'AdminDashboard' })">
          <span class="font-weight-bold"> CPEESO Admin </span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-text-field hide-details append-icon="mdi-magnify" single-line outlined dense rounded></v-text-field>
        <!-- <v-icon class="button" dark>mdi-notif </v-icon> -->
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
export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-home", text: "Dashboard", route: "/AdminDashboard" },
      {
        icon: "mdi-form-select",
        text: "Forms",
        route: "/AdminForms",
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        "icon-ctr": "mdi-clipboard-check-outline",
        text: "To Do's",
        model: false,
        children: [
          {
            icon: "mdi-clipboard-check-outline",
            text: "For Approval",
            route: "/ApprovalList",
          },
          {
            icon: "mdi-clipboard-file-outline",
            text: "For Recommendation",
            route: "/RecommendationList",
          },
          {
            icon: "mdi-clipboard-clock-outline",
            text: "For Processing",
            route: "/ProcessingList",
          },
        ],
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        "icon-ctr": "mdi-clipboard-file-outline",
        text: "Listing",
        model: false,
        children: [
          {
            icon: "mdi-clipboard-check-outline",
            text: "Student Programs",
            route: "/StudentProgram",
          },
          {
            icon: "mdi-clipboard-check-outline",
            text: "Training Offering",
            route: "/TrainingOffer",
          },
          {
            icon: "mdi-clipboard-file-outline",
            text: "Job Posting",
            route: "/AdminJobPost",
          },
          {
            icon: "mdi-clipboard-clock-outline",
            text: "Announcement",
            route: "/AdminAnnouncement",
          },
        ],
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        "icon-ctr": "mdi-clipboard-file-outline",
        text: "Users",
        model: false,
        children: [
          {
            icon: "mdi-clipboard-check-outline",
            text: "Students",
            route: "/StudentList",
          },
          {
            icon: "mdi-clipboard-file-outline",
            text: "Job Applicant",
            route: "/ApplicantList",
          },
          {
            icon: "mdi-clipboard-clock-outline",
            text: "Employers",
            route: "/EmployerList",
          },
        ],
      },
      { icon: "mdi-account", text: "Profile", route: "/AdminProfile" },
      { icon: "", text: "", route: "" },
      { icon: "mdi-logout", text: "Log Out", route: "/" },
    ],
  }),
};
</script>