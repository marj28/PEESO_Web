<template>
    <v-app>
      <default-bar />
  
      <v-main>
    <router-view />
  </v-main>
    </v-app>
  </template>
  
  <script setup>
    import DefaultBar from '@/views/Navigation/AdminNavbar.vue'
    
  </script>
  