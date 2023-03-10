<template>
  <div>
    <v-col>
      <v-card outlined color="#1B5E20">
        <v-card-title
          class="d-flex flex-column justify-space-between align-center"
        >
          <v-avatar size="100">
            <img src="@/assets/form2.png" />
          </v-avatar>
        </v-card-title>
        <v-card-text
          class="d-flex flex-column justify-space-between align-center"
          style="color: white"
        >
        </v-card-text>
      </v-card>
      <v-card class="mx-auto">
        <v-list two-line>
          <v-list-item-group
            
            active-class="green--text"
            multiple
          >
            <template v-for="(item, index) in items">
              <v-list-item
                :key="item.subtitle"
                router
                :to="item.route"
                class="text-justify"
              >
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="item.title"
                      class="font-weight-bold"
                      style="color: green"
                    ></v-list-item-title>

                    <v-list-item-subtitle
                      class="text--primary"
                      v-text="item.headline"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>

              <v-divider
                v-if="index < items.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        headline: "For Job Applicants",
        title: "Skills Survey Form",
        route: "/SsForm",
      },
      {
        headline: "For Students ",
        title: "Scholarship Application Form",
        route: "/ScholarAppForm",
      },
      {
        headline: "For Job Applicants",
        title:
          "Community-Based Training for Enterprise Development Program Registration Form",
        route: "/EnterpriseDevelopment",
      },
      {
        headline: "For Employer",
        title: "Establishment Survey Form",
        route: "/EstablishmentSurvey",
      },
      {
        headline: "For Entrepreneurs",
        title: "Entrepreneurial Program Registration Form",
        route: "/EntrepreneurialProgram",
      },
    ],
  }),
};
</script>