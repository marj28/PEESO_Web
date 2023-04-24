<template>
    <div>
        <v-navigation-drawer v-model="drawer" color="#1B5E20" dark app width="345px">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-btn class="mx-2" fab dark large color="purple" @click="$router.push({ name: 'EditProfile' })"
                        outlined>
                        <v-avatar size="90">
                            <img src="https://i.pinimg.com/originals/72/cd/96/72cd969f8e21be3476277d12d44c791c.png"
                                alt="123" />
                            <!-- <img src="https://i1.sndcdn.com/artworks-qkXAmhFYFAo2JykO-CnLyqw-t500x500.jpg" alt="123" /> -->
                        </v-avatar>
                    </v-btn>
                    <p class="white--text subheading  text-center mt-6">Username</p>
                </v-flex>
                <v-flex>
                    <h3 class="white--text subheading mt-1 text-center">User Title</h3>
                </v-flex>
                <v-flex class="mt-4 mb-4">
                </v-flex>
            </v-layout>

            <v-list>
                <v-list-group>
                    <template v-slot:activator>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </template>
                </v-list-group>
            </v-list>

            <!-- <v-list shaped class="clickable">
                <v-list-group :value="false" prepend-icon="mdi-view-dashboard" active-class="orange--text">
                    <template v-slot:activator>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </template>
                    <v-list-group :value="false" no-action sub-group active-class="orange--text">
                        <template v-slot:activator>
                            <v-list-item-content active-class="orange--text">
                                <v-list-item-title>Dashboard</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item active-class="orange--text" v-for="item in dashboard" :key="item.text" router
                            :to="item.route">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                <h6>{{ item.text }}</h6>
                            </v-list-item-title>
                            <v-list-item-icon>
                                <v-icon v-text="icon"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>


                <v-list-group :value="false" prepend-icon="mdi-format-list-checks" active-class="orange--text">
                    <template v-slot:activator>
                        <v-list-item-title> Relocation</v-list-item-title>
                    </template>
                    
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Relocation form</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item active-class="orange--text" v-for="item in relocationform" :key="item.text" router
                            :to="item.route">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                <h6>{{ item.text }}</h6>
                            </v-list-item-title>
                            <v-list-item-icon>
                                <v-icon v-text="icon"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>



                    <v-list-group :value="false" no-action sub-group active-class="orange--text">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Relocation list</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item active-class="orange--text" v-for="item in relocationlist" :key="item.text" router
                            :to="item.route">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                <h6>{{ item.text }}</h6>
                            </v-list-item-title>
                            <v-list-item-icon>
                                <v-icon v-text="icon"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>




                <v-list-group :value="false" prepend-icon="mdi-format-list-checks" active-class="orange--text">
                    <template v-slot:activator>
                        <v-list-item-title>Shelter assistance</v-list-item-title>
                    </template>
                    <v-list-group :value="false" no-action sub-group active-class="orange--text">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Shelter forms</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item active-class="orange--text" v-for="item in shelterforms" :key="item.text" router
                            :to="item.route">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                <h6>{{ item.text }}</h6>
                            </v-list-item-title>
                            <v-list-item-icon>
                                <v-icon v-text="icon"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group :value="false" no-action sub-group active-class="orange--text">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Shelter assistance list</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item active-class="orange--text" v-for="item in shelterlist" :key="item.text" router
                            :to="item.route">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                <h6>{{ item.text }}</h6>
                            </v-list-item-title>
                            <v-list-item-icon>
                                <v-icon v-text="icon"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>


                <v-list-group :value="false" prepend-icon="mdi-account-box" active-class="orange--text">
                    <template v-slot:activator>
                        <v-list-item-title>Actions</v-list-item-title>
                    </template>
                    <v-list-group :value="false" no-action sub-group active-class="orange--text">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>actions</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item active-class="orange--text" v-for="item in actions" :key="item.text" router
                            :to="item.route">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                <h6>{{ item.text }}</h6>
                            </v-list-item-title>
                            <v-list-item-icon>
                                <v-icon v-text="icon"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                        <LogOut />
                    </v-list-group>
                </v-list-group>
            </v-list> -->
           
        </v-navigation-drawer>
        <v-app-bar color="#388E3C" dark app>
            <v-app-bar-nav-icon class="drawer-button" color="#FFFFFF" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">City Housing and Land Management Office</span>
                <span></span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <v-list flat>
                    <v-list-item v-for="link in items" :key="link.text" router :to="link.route" active-class="border">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <!-- <v-btn elevation="4" color="error" @click="logout">
                <span>LOG OUT</span>
                <v-icon right> mdi-exit-to-app</v-icon>
            </v-btn> -->


            <!-- <nav class="navbar">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav> -->
        </v-app-bar>
    </div>
</template>


<script>
export default {
    data: () => ({
        drawer: null,
        relocationform: [
            {
                icon: "mdi-note-plus",
                text: "Relocation Form",
                route: "/form-one",
            },
            {
                icon: "mdi-note-plus",
                text: "Housing project form",
                route: "/housing-project-form",
            },
            {
                icon: "mdi-playlist-check",
                text: "Relocation applicants",
                route: "/relocation-list",
            },
        ],
        relocationlist: [
            {
                icon: "mdi-trophy",
                text: "Awarded",
                route: "/total-awards",
            },
            {
                icon: "mdi-book-open-page-variant",
                text: "Total Records",
                route: "/total-record",
            },
            {
                icon: "mdi-thumb-up",
                text: "Tag & validated",
                route: "/total-approved",
            },
            {
                icon: "mdi-home-variant",
                text: "Total project",
                route: "/total-project",
            },
            {
                icon: "mdi-block-helper",
                text: "Total blocklisted",
                route: "/total-blocklisted",
            },
        ],
        shelterforms: [
            {
                icon: "mdi-note-plus",
                text: "Shelter Form",
                route: "/shelter-assistance",
            },
            {
                icon: "mdi-playlist-check",
                text: "List of applicants",
                route: "/shelter-assistance-dialog",
            },
        ],
        shelterlist: [
            {
                icon: "mdi-handshake",
                text: "Bayanihan",
                route: "/bayanihan-page",
            },
            {
                icon: "mdi-human-handsup",
                text: "Self help",
                route: "/self-help",
            },
            {
                icon: "mdi-weather-pouring ",
                text: "Natural calamity",
                route: "/natural-calamity",
            },
            {
                icon: "mdi-trophy",
                text: "Awarded",
                route: "/shelter-assistance-total-awarded",
            },
            {
                icon: "mdi-book-open-page-variant",
                text: "Total Records",
                route: "/shelter-assistance-total-records",
            },
            {
                icon: "mdi-thumb-up",
                text: "Tag & validated",
                route: "/shelter-assistance-tagged-and-validated",
            },
        ],
        actions: [
            {
                icon: "mdi-wallet-travel",
                text: "Inventory",
                route: "/inventory",
            },
            {
                icon: "mdi-database-plus",
                text: "Add material",
                route: "/add-materials",
            },
            {
                icon: "mdi-printer",
                text: "Print",
                route: "/viewshit",
            },
        ],
        dashboard: [
            {
                icon: "mdi-view-dashboard",
                text: "Relocation",
                route: "/dashboard",
            },
            {
                icon: "mdi-view-dashboard",
                text: "Shelter assistance",
                route: "shelter-assistance-dashboard",
            },
        ],
    }),
    methods: {
        logout() {
            console.log("Local storage clear")
            localStorage.clear();
            this.$router.replace({ name: 'Loginpage' });
        },
    }
};
</script>
<style>
.drawer-button {
    background: #388E3C;
    border-radius: 5px;
    border: none;
}
</style>