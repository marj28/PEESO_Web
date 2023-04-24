<template>
  <div>
    <v-col>
      <v-card outlined color="#1B5E20">
        <v-card-title class="d-flex flex-column justify-space-between align-center white--text" color="success">
          Skills Training Section
        </v-card-title>
        <v-card-text class="d-flex flex-column justify-space-between align-center" style="color: white">
        </v-card-text>
      </v-card>
      <v-card class="mx-auto">
        <v-list lines="three">
          <v-list-item-group active-class="green--text" multiple>
            <template v-for="(item, index) in items" lines="three">
              <v-list-item :key="item.subtitle" router :to="item.route" class="text-justify">
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" class="font-weight-bold"
                      style="color: green"></v-list-item-title>

                    <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>

              <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
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
        title: "CBTED",
        headline: "Community-based Training for Enterprise Development (CBTED)",
        route: '/MemberPage/CBTEDForm_Page',
      },
      {
        title: "CEE-O Star Program",
        headline: "Community-based Training for Economic Opportunity (CEE-O Star Program)",
        route: "/MemberPage/CEEOForm_Page",
      },
      {
        title: "Project UPDATE",
        headline: "Virtual and Digital Training",
        route: "/MemberPage/UpdateForm_Page",
      },
    ],
  }),
};
</script>
    
    
    