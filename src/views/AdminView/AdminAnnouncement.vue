<template>
  <v-app>
    <admin-navbar />
    <v-main>
      <v-col md="12" class="pa-4">
        <v-card outlined color="#1B5E20">
          <v-spacer></v-spacer>
          <announcement-card />
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>
    
<script>

export default {
  components: {
  },
  data: () => ({

  }),
};
</script>
    