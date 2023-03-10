<template>
  
    <v-row cols="12" class="pa-4"> 
      <v-col cols="6" md="3">
        <v-card height="100" dark class="pa-2 rounded-lg" 
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);"
        @click="$router.push({path: 'AdminApplicant'})">
        
        <h2 class="ma-1"> <v-icon
            dark
            right
            size="40"
          >
            mdi-account-supervisor-circle-outline
          </v-icon> 
          224 </h2>
          <p class="ma-4"> Daily Applicants</p>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card height="100" dark class="pa-2 rounded-lg" 
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);" 
        @click="$router.push({path: 'AdminApplicant'})">
          <h2 class="ma-1"> <v-icon
            dark
            right
            size="40"
          >
            mdi-account-multiple-check-outline
          </v-icon> 
          224 </h2>
          <p class="ma-4">Hired Applicants</p>
          
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card height="100" dark class="pa-2 rounded-lg" 
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);"
        @click="$router.push({path: 'AdminJobPost'})">
        <h2 class="ma-1"> <v-icon
            dark
            right
            size="40"
          >
            mdi-book-open
          </v-icon> 
          224 </h2>
          <p class="ma-4">Open Jobs As of</p>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card height="100" dark class="pa-2 rounded-lg" 
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);"
        @click="$router.push({path: 'TrainingOffer'})">
          <h2 class="ma-1"> <v-icon
            dark
            right
            size="40"
          >
            mdi-library
          </v-icon> 
          224 </h2>
          <p class="ma-4">Trainings Offered</p>
        </v-card>
      </v-col>
     
    </v-row>
</template>
<script>
import Chart from "@/components/ChartComponent.vue";
export default {
  components: {
    Chart,
  },
};
</script>
