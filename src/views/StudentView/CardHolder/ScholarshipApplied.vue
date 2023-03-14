<template>
  <div>
    <v-col md="12" class="pa-4">
      <v-card color="#1B5E20">
        <v-card-title class="subtitle-2">
          APPLIED PROGRAMS
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            outlined
            rounded
            dark
            dense
          ></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            class="btn-hover elevation-1 pa-4"
            @click:row="editItem"
          >
            <template v-slot:top>
              <v-dialog v-model="dialog" max-width="700px" tile>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>
                  <v-divider color="success"></v-divider>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <b class="green--text">Program Name:</b>  {{ editedItem.program_name }}
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <b class="green--text">Offering Company:</b>  {{ editedItem.offering_company }}
                        </v-col>
                        <v-col cols="12" sm="6" md="6" >
                          <b class="green--text">Date of Application:</b>  {{ editedItem.dateofapplication }}
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <b class="green--text">Program Details:</b>  
                          <br>
                          {{ editedItem.program_details }}
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions class="mt-n6">
                    <v-spacer></v-spacer>
                    <v-btn color="orange darken-1" text @click="close">
                      Back
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </template>
            <!-- <template v-slot:item.actions="{ item }">
              <v-icon small class="" @click="editItem(item)"> mdi-eye </v-icon>
            </template> -->
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>
    
  <script>
export default {
  data: () => ({
    search: "",
    dialog: false,
    headers: [
      {
        text: "PROGRAM NAME",
        align: "start",
        sortable: false,
        value: "program_name",
      },
      { text: "OFFERING COMPANY", value: "offering_company", sortable: false, },
      { text: "DATE OF APPLICATION", align: "center", value: "dateofapplication" },
      // { text: "Action", align: "center", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      program_name: "",
      offering_company: "",
      dateofapplication: "",
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "View Program Application";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.desserts = [
        {
          program_name: "DOST Scholar",
          offering_company: "DOST",
          dateofapplication: "11-28-2022",
          program_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
        {
          program_name: "DOST Scholar",
          offering_company: "DOST",
          dateofapplication: "11-28-2022",
          program_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
        {
          program_name: "DOST Nani",
          offering_company: "DOST",
          dateofapplication: "11-28-2022",
          program_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
        {
          program_name: "DOST Scholar",
          offering_company: "DOST",
          dateofapplication: "11-28-2022",
          program_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
        {
          program_name: "DOST Scholar",
          offering_company: "DOST",
          dateofapplication: "11-28-2022",
          program_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
      ];
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
  
  
  