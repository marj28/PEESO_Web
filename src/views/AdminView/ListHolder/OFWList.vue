<template>
    <div>
        <v-col md="12" class="pa-4">
            <v-card color="#1B5E20">
                <v-card-title class="subtitle-2">
                    OFW LIST
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
                        outlined rounded dark dense></v-text-field>
                </v-card-title>
                <v-card-text>
                    <v-data-table :headers="headers" :items="desserts" :search="search" class="btn-hover elevation-1 pa-4"
                        @click:row="editItem">
                        <template v-slot:top>
                            <v-dialog v-model="dialog" max-width="550px" tile>
                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">{{ formTitle }}</span>
                                    </v-card-title>
                                    <v-divider color="success"></v-divider>

                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="12" md="12">
                                                    <b class="green--text">First Name:</b> {{ editedItem.first_name }}
                                                </v-col>
                                                <v-col cols="12" sm="12" md="12">
                                                    <b class="green--text">Last Name:</b> {{ editedItem.last_name }}
                                                </v-col>
                                                <v-col cols="12" sm="12" md="12">
                                                    <b class="green--text">Email Address:</b> {{ editedItem.email_address }}
                                                </v-col>
                                                <v-col cols="12" sm="12" md="12">
                                                    <b class="green--text">Contact Number:</b> {{ editedItem.contact_number
                                                    }}
                                                </v-col>
                                                <v-col cols="12" sm="12" md="12">
                                                    <b class="green--text">Country:</b> {{ editedItem.country }}
                                                </v-col>
                                                <v-col cols="12" sm="12" md="12">
                                                    <b class="green--text">Occupation:</b> {{ editedItem.occupation }}
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions class="mt-n6">
                                        <v-spacer></v-spacer>
                                        <v-btn color="orange darken-1" text @click="close">
                                            Back
                                        </v-btn>
                                        <v-btn color="green darken-1" dark @click="save">
                                            Accept
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </template>
                        <!-- <template v-slot:item.actions="{ item }">
                <v-icon small class="" @click="editItem(item)">
                  mdi-eye
                </v-icon>
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
                text: "FIRST NAME",
                align: "start",
                sortable: false,
                value: "first_name",
            },
            {
                text: "LAST NAME",
                align: "start",
                sortable: false,
                value: "last_name",
            },
            {
                text: "COUNTRY", value: "country",
                sortable: false,
            },
            {
                text: "OCCUPATION", value: "occupation",
                sortable: false,
            },
            {
                text: "EMAIL ADDRESS", value: "email_address",
                sortable: false,
            },
            {
                text: "CONTACT NUMBER", value: "contact_number",
                sortable: false,
            },
            // { text: "Action", value: "actions", sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
        },
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "View OFW";
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
                    first_name: "Neil",
                    last_name: "Roble",
                    country: "UAE",
                    occupation: "Programmer",
                    email_address: "go@gmail.com",
                    contact_number: "0921125545",
                },
                {
                    first_name: "Jograd",
                    last_name: "Mahusay",
                    country: "New Zealand",
                    occupation: "Data Protection Officer",
                    email_address: "a@a.com",
                    contact_number: "09123456789",
                },
                {
                    first_name: "Carlo",
                    last_name: "Quezon",
                    country: "Canada",
                    occupation: "Network Engineer",
                    email_address: "v@v.com",
                    contact_number: "09123456789",
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
    
    
    