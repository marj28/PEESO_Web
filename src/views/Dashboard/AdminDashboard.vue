<template>
  <v-app id="inspire">   
    
      <StatusCard />
      <v-divider class="test"></v-divider>

      <!-- <div v-bind:class="{'d-flex justify-center mb-6 bg-surface-variant pt-5': isMobile, 'd-flex justify-center mb-6 bg-surface-variant pt-5': !isMobile }" > -->
        <v-row class="pa-4" >
        <v-col cols="12" md="6" sm="12">
          <TodoChart />
        </v-col>
        <v-col cols="12" md="6">
            <DonutComponent />
        </v-col>
        
        <!-- </div> -->
      <!-- <v-row class="pa-4" >
        <v-col cols="12" md="6" >
          <TodoChart />
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-2" elevation="20">
            <DonutComponent />
          </v-card>
        </v-col>
        
      </v-row> -->

        <v-col cols="12" md="6" sm="12">
          <ChartComponent />
        </v-col>
        <v-col cols="6" md="3" sm="6">
          <StudentChart />
        </v-col>
        <v-col cols="6" md="3" sm="6">
          <ApplicantChart />
        </v-col>
      </v-row>
    
    
  </v-app>
</template>
  
  <script>
  
import Sample from "@/components/SampleComponent.vue";
import StatusCard from "@/views/AdminView/StatusCard.vue";

export default {
  components: {
    Sample,
    StatusCard,
  },

  data() {
    return{
    isMobile:true,
  }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize () {
      // if(window.innerWidth < 900){
      //   this.isMobile="d-flex align-start flex-column mb-6 bg-surface-variant"
      // }
      // else{
      //   this.isMobile="d-flex justify-center mb-6 bg-surface-variant pt-5"
      // }
      // console.log(this.isMobile)
        this.isMobile = window.outerWidth < 900
        console.log(this.isMobile)
    }
  }
}

</script>
<style scoped>


@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
  font-family: Roboto, sans-serif;
}
.test {
  border-width: 1px !important;
  border-color: green !important;
  height: 100%;
}

/* @media screen and (max-width: 400px)  {
  
  #todochart {
    width: 200px;
  }
} */
</style>