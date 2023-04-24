<template>
    <v-row class="pa-4">
        <v-col cols="6" md="4">
            <v-card height="100" class="pa-2 rounded-lg" style="background: white; color: green;"
                @click="$router.push({ path: 'ScholarshipApplied' })">
                <h2 class="ma-1"> <v-icon style="color: green;" right size="40">
                        mdi-post-outline
                    </v-icon>
                    224 </h2>
                <p class="ma-2"> Applied Scholarship</p>
            </v-card>
        </v-col>
        <v-col cols="6" md="4">
            <v-card height="100" dark class="pa-2 rounded-lg" style="background: white; color: green;"
                @click="$router.push({ path: 'AppliedJobs' })">

                <h2 class="ma-1"> <v-icon style="color: green;" right size="40">
                        mdi-post-outline
                    </v-icon>
                    224 </h2>
                <p class="ma-2"> Applied Jobs</p>
            </v-card>
        </v-col>

        <v-col cols="12" md="4">
            <v-card height="100" dark class="pa-2 rounded-lg" style="background: white; color: green;"
                @click="$router.push({ path: 'AppliedTraining' })">

                <h2 class="ma-1"> <v-icon style="color: green;" right size="40">
                        mdi-post-outline
                    </v-icon>
                    224 </h2>
                <p class="ma-2"> Applied Training</p>
            </v-card>
        </v-col>

    </v-row>
</template>

<script>

export default {
    components: {
    },
};
</script>
