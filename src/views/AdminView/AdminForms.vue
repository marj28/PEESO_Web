<template>
    <v-app>
      <admin-navbar />
      <v-main>
        <FormCard />
      </v-main>
    </v-app>
  </template>
    
    <script>
  import FormCard from "@/views/AdminView/CardHolder/FormCard.vue";
  export default {
    components: {
      FormCard,
    },
  };
  </script>