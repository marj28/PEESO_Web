<template>
  <v-app>
        <v-col md="12" class="pa-4">
          <v-card outlined color="#1B5E20">
          <v-spacer></v-spacer>
          <add-training />
          </v-card>
        </v-col>
  </v-app>
</template>
  
  <script>

export default {
  components: {
  },
  data: () => ({
      search: "",
    }),
};
</script>
  <style>
.container {
  padding: 2rem 1rem;
}
h4 {
  margin: 2rem 0rem 1rem;
}
</style>