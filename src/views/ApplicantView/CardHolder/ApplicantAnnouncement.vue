<template>
    <div>
      <v-col md="12" class="pa-4">
          <v-data-iterator
          :items="items"
          :items-per-page.sync="itemsPerPage"
          :page.sync="page"
          :search="search"
          :sort-by="sortBy.toLowerCase()"
          :sort-desc="sortDesc"
          hide-default-footer
        >
          <template v-slot:header>
            <v-toolbar
              dark
              color="#80a211"
              class="mb-1"
            >
              <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
              ></v-text-field>
              <template v-if="$vuetify.breakpoint.mdAndUp">
                <v-spacer></v-spacer>
                <v-select
                  v-model="sortBy"
                  flat
                  color="#116530"
                  solo-inverted
                  hide-details
                  :items="keys"
                  prepend-inner-icon="mdi-magnify"
                  label="Sort by"
                ></v-select>
                <v-spacer></v-spacer>
                <v-btn-toggle
                  v-model="sortDesc"
                  mandatory
                >
                  <v-btn
                    medium
                    depressed
                    color="#1B5E20"
                    :value="false"
                  >
                    <v-icon>mdi-arrow-up</v-icon>
                  </v-btn>
                  <v-btn
                    medium
                    depressed
                    color="#1B5E20"
                    :value="true"
                  >
                    <v-icon>mdi-arrow-down</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </template>
            </v-toolbar>
          </template>
    
          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item.name"
                cols="12"
                sm="6"
                md="6"
                lg="6"
              >
                <v-card>
                  <v-card-title class="subheading font-weight-bold">
                    {{ item.name }}
                  </v-card-title>
    
                  <v-divider></v-divider>
    
                  <v-list dense>
                    <v-list-item
                      v-for="(key, index) in filteredKeys"
                      :key="index"
                    >
                      <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                        {{ key }}:
                      </v-list-item-content>
                      <v-list-item-content
                        class="align-end"
                        :class="{ 'blue--text': sortBy === key }"
                      >
                        {{ item[key.toLowerCase()] }}
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </template>
    
          <template v-slot:footer>
            <v-row
              class="mt-2"
              align="center"
              justify="center"
            >
              <span class="grey--text">Items per page</span>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    text
                    color="#116530"
                    class="ml-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ itemsPerPage }}
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(number, index) in itemsPerPageArray"
                    :key="index"
                    @click="updateItemsPerPage(number)"
                  >
                    <v-list-item-title>{{ number }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
    
              <v-spacer></v-spacer>
    
              <span
                class="mr-4
                grey--text"
              >
                Page {{ page }} of {{ numberOfPages }}
              </span>
              <v-btn
                fab
                dark
                color="#116530"
                class="mr-1"
                @click="formerPage"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn
                fab
                dark
                color="#116530"
                class="ml-1"
                @click="nextPage"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-iterator>
        
      </v-col>
    </div>
  </template>
    
    <script>
  export default {
    data: () => ({
      itemsPerPageArray: [4, 8],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 4,
        sortBy: 'name',
        keys: [
          'Name',
          'When',
          'Where',
          'Who',
          'Why',
        ],
        items: [
          {
            name: 'Training',
            when: 'August 29, 2023 , 8:00 AM',
            where: 'City Government of Tagum - AVR 5',
            who: 'DOST Scholar',
            why: 'Renewal of Scholarship',
          },
          {
            name: 'Bayanihan',
            when: 'August 29, 2023 , 8:00 AM',
            where: 'City Government of Tagum - AVR 5',
            who: 'DOST Scholar',
            why: 'Renewal of Scholarship',
          },
          {
            name: 'Meeting',
            when: 'August 29, 2023 , 8:00 AM',
            where: 'City Government of Tagum - AVR 5',
            who: 'DOST Scholar',
            why: 'Renewal of Scholarship',
          },
          {
            name: 'Training',
            when: 'August 29, 2023 , 8:00 AM',
            where: 'City Government of Tagum - AVR 5',
            who: 'DOST Scholar',
            why: 'Renewal of Scholarship',
          },
          {
            name: 'Filing',
            when: 'August 29, 2023 , 8:00 AM',
            where: 'City Government of Tagum - AVR 5',
            who: 'DOST Scholar',
            why: 'Renewal of Scholarship',
          },
        ],
    }),
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    },
  };
  </script>
    <style>
  .subtitle-2 {
    color: white;
  }
  
  </style>
    