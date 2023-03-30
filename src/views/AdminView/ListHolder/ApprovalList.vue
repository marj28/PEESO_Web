<template>
    <v-app>
      
      
        <student-card />
         <applicant-card /> 
        <employer-card />
      
    </v-app>
    
  </template>
  
  <script>
  // import AdminNavbar from "@/views/Navigation/AdminNavbar.vue";
  import { mapActions, mapGetters } from "vuex";
  
  export default {
    components: {
      
    },
    data: () => ({
      loading: false,
      dialog: false,
    }),
    computed: {
      ...mapGetters("users", { users: "getUsers" }),
    },
    methods: {
      ...mapActions("users", ["fetchUsers", "Deleteuser"]),
      NewUser() {
        this.loading = true;
        setTimeout(() => (this.loading = false), 2000);
        //   this.$router.push("/NewUserPage");
      },
      deleteuser(first_name) {
        let data = new FormData();
        data.append("first_name", first_name);
        this.Deleteuser(data).then((e) => {
          if (e == 0) this.dialog = true;
          else this.fetchUsers();
        });
      },
    },
    created() {
      this.fetchUsers();
    },
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