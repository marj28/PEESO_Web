<template>
    <div>
        <v-app>
            <v-row>
                <v-col lg="4">
                    <v-data-table @click='sinag(item - key)' 
                        id="mytable" 
                        v-model="selected" :headers="headers"
                        :items="desserts" :items-per-page="10" 
                        class="wrapper elevation-1" item-key="name" height="590"
                        :hide-default-footer="true" :hide-default-header="true" 
                        tile :search="search">
                        <template v-slot:item.image="{ item }">
                            <v-avatar size="40">
                                <img v-bind:src="`/${item.image}`" alt="">
                            </v-avatar>
                        </template>
                        <template slot="item.actions" slot-scope="props">
                            <v-btn color="green" dark @click="() => sinagmembro(props.item)">
                                Attended
                            </v-btn>
                        </template>
                        <template v-slot:top>
                            <v-toolbar flat dark class=" btn-hover color-1 elevation-1">
                                <v-toolbar-title>Attendance</v-toolbar-title>
                                <v-divider class="mx-4" inset vertical></v-divider>
                                <v-spacer></v-spacer>
                                <v-row>
                                    <v-col cols="8">
                                        <v-text-field v-model="search" append-icon="mdi-magnify" 
                                        label="Search" single-line
                                            hide-details dark></v-text-field>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-btn color="blue" class="rounded-xl">
                                            Submit
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-toolbar>
                        </template>
                    </v-data-table>
                </v-col>
                <!-- non-sinag -->
                <v-col lg="3" md="12" sm="12">
                    <v-card height="650" class="wrapper">
                        <div class="text-center ">
                            <v-alert dense dark color="green darken-2">
                                NON SINAG MEMBERS <strong> </strong>
                            </v-alert>
                        </div>
                        <v-data-table :headers="non_sinagheaders" :items="non_sinagmembers" :hide-default-footer="true"
                            :hide-default-header="true">
                            <template v-slot:item.image="{ item }">
                                <v-avatar size="40">
                                    <img v-bind:src="`/${item.image}`" alt="">
                                </v-avatar>
                            </template>
                            <template slot="item.remove_non_sinag" slot-scope="props_remove_non_sinag">
                                <v-btn text color="red" dark
                                    @click="() => nonsinagmembro_remove(props_remove_non_sinag.item)">
                                    <v-icon>
                                        mdi-comment-remove-outline
                                    </v-icon>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
                <!-- sinag -->
                <v-col lg="5" md="12" sm="12">
                    <v-card height="650" class="wrapper">
                        <div class="text-center ">
                            <v-alert dense dark color="blue darken-3">
                                SINAG MEMBERS <strong> </strong>
                            </v-alert>
                        </div>
                        <v-data-table :headers="sinagheaders" :items="sinagmembers" :hide-default-footer="true"
                            :hide-default-header="true" :items-per-page="20" scrollable>
                            <template v-slot:item.image="{ item }">
                                <v-avatar size="40">
                                    <img v-bind:src="`/${item.image}`" alt="">
                                </v-avatar>
                            </template>
                            <template slot="item.remove_sinag" slot-scope="props_remove_sinag">
                                <v-btn color="green" dark @click="() => editItem(props_remove_sinag.item)">
                                    Input Hours
                                </v-btn>
                                <v-btn text color="red" dark @click="() => sinagmembro_remove(props_remove_sinag.item)">
                                    <v-icon>
                                        mdi-comment-remove-outline
                                    </v-icon>
                                </v-btn>
                            </template>
                            <v-dialog>
                                <template>
                                    <v-card>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.name" label="name"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.hours" label="hours"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="save">
                                                Save
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-app>

        <v-dialog v-model="dialog" max-width="320">

            <v-card>
                <v-container>
                    <v-row>
                        <v-col cols="8" md="11">
                            <v-text-field v-model="editedItem.name" flat solo readonly label="Name">
                            </v-text-field>
                            <v-select v-model="editedItem.hours"
                                :items="['1 Hour', '2 Hours', '3 Hours', '4 Hours', '5 Hours', '6 Hours', '7 Hours', '8 Hours']"
                                prepend-inner-icon="mdi-clock" required></v-select>
                        </v-col>
                        <v-col offset="1" cols="5">

                            <v-btn @click="save" color="blue" class="rounded-xl">
                                <v-icon left>mdi-account-check</v-icon>
                                SAVE
                            </v-btn>
                        </v-col>
                        <v-col offset="" cols="4">
                            <v-btn @click="close" color="green" class="rounded-xl">
                                <v-icon left>mdi-account-check</v-icon>
                                CLOSE
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>


export default {
    name: 'App',
    components: {
    },
    data() {
        return {
            dialog_for_input_hours: false,
            dialog: false,
            dialog_sample: false,
            editedItem: [],
            sinagmembers: [],
            non_sinagmembers: [],
            selected: [],
            search: '',
            headers: [
                { text: 'Image', value: 'image', align: 'center' },
                {
                    text: 'Full Name',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Actions', value: 'actions', align: 'center', sortable: false },
            ],
            sinagheaders: [
                { text: 'Image', value: 'image', align: 'center' },
                {
                    text: 'Full Name',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Hours comitted',
                    value: 'hours',
                },
                { text: 'Actions', value: 'edithours', align: 'center', sortable: false },
                { text: 'Actions', value: 'remove_sinag', align: 'center' },
            ],
            non_sinagheaders: [
                { text: 'Image', value: 'image', align: 'center' },
                {
                    text: 'Full Name',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Actions', value: 'remove_non_sinag', align: 'center', },
            ],
            desserts: [
                {
                    name: 'Rendon Joemarie Odtojan',
                    sinagmember: true,
                    image: 'profilepic/jom.jpg'
                },
                {
                    name: 'Alcala Rey Naldo',
                    sinagmember: true,
                    image: 'profilepic/reyalcala.png'
                },
                {
                    name: 'Curay Honey Marjey',
                    sinagmember: false,
                    image: 'profilepic/curay.png'
                },
                {
                    name: 'Pablo Escobar Roland',
                    sinagmember: false,
                    image: 'profilepic/escobar.png'
                },
                {
                    name: 'NEil Arms Trong',
                    sinagmember: false,
                    image: 'profilepic/armstrong.png'
                },
                {
                    name: 'Jelly bean Del Cruz',
                    sinagmember: true,
                    image: 'profilepic/Screenshot_1.png'
                },
                {
                    name: 'Mahusay Jograd JOGZ',
                    sinagmember: true,
                    image: 'profilepic/jogz.jpg'
                },
            ],
        }
    },

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },
    methods: {
        sinagmembro(item) {
            if (item.sinagmember == true)
                this.sinagmembers.push({ image: item.image, name: item.name, hours: 0, sinagmember: item.sinagmember })
            else
                this.non_sinagmembers.push({ image: item.image, name: item.name, sinagmember: item.sinagmember })
            this.desserts = this.desserts.filter((nem) => nem.name !== item.name);
            console.log(item.name);// eslint-disable-line no-console
            console.log(this.selected);// eslint-disable-line no-console
            console.log("sinagmember");// eslint-disable-line no-console
        },

        nonsinagmembro_remove(items) {
            this.desserts.push({ image: items.image, name: items.name, sinagmember: items.sinagmember })
            this.non_sinagmembers = this.non_sinagmembers.filter((nem) => nem.name !== items.name);
        },
        sinagmembro_remove(items) {
            this.desserts.push({ image: items.image, name: items.name, sinagmember: items.sinagmember })
            this.sinagmembers = this.sinagmembers.filter((nem) => nem.name !== items.name);
        },
        editItem(item) {
            this.editedIndex = this.sinagmembers.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
            console.log(this.editedItem)// eslint-disable-line no-console
        },
        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.sinagmembers[this.editedIndex], this.editedItem)
            } else {
                this.sinagmembers.push(this.editedItem)

            }
            this.close()
        },
    },
    deleteItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
    },
    deleteItemConfirm() {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
    },
    closeDelete() {
        this.dialogDelete = false
        this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
        })
    },
}
</script>


<style scoped>
.v-text-field .v-input__control .v-input__slot .v-input__append-inner {
    margin-top: 5px !important;
}

.theme--light.v-icon {
    color: blue !important;
}

.v-input--selection-controls__ripple.green--text {
    color: blue !important;
}

.wrapper {
    box-shadow: 0 0 8px rgb(0, 0, 0);
}

.brgy-hover {
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin: 20px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.brgy-hover:focus {
    outline: none;
}

.btn-hover.color-1 {
    /*  background-image: linear-gradient(to right, #186f94, #0e7e48,  #0c8a4d,  #078045);
   box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644); */
}
</style>






<!-- methods: {
    sinagmembro(item) {
     
        this.hired.push({ firstname: item.firstname })

      this.desserts = this.desserts.filter((nem) => nem.name !== item.name);
      console.log(item.firstname);// eslint-disable-line no-console
      console.log(this.selected);// eslint-disable-line no-console
      console.log("Na Hire Nani bai");// eslint-disable-line no-console

    }, -->