<template>
    <div>
        <v-stepper v-model="e1">
            <v-stepper-header style="font-size: 14px">
                <v-stepper-step :complete="e1 > 1" step="1" style="height=" color="success">
                    Personal
                    Information
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="e1 > 2" step="2" style="height=" color="success">
                    Employment
                    Information
                </v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <!-- First Stepper -->
                <v-form ref="formes2" v-model="valid" lazy-validation>
                    <v-stepper-content step="1">
                        <v-card id="step1">
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field label="Surname" v-model="value.surname" outlined dense color="success"
                                            required :rules="[rules.required]" autofocus></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field label="First Name" v-model="value.firstname" outlined dense
                                            color="success" required :rules="[rules.required]"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field label="Middle Name" v-model="value.middlename"
                                            :rules="[rules.required]" outlined dense color="success"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-select :items="suffix" :rules="[rules.required]" label="Suffix"
                                            v-model="defaultSelected" required outlined dense color="success">
                                        </v-select>
                                    </v-col>

                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="birthDate" @input="calculateAge(birthDate)"
                                            label="Date of Birth" outlined type="date" dense color="success"
                                            :rules="[rules.required]"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field label="Age" dense outlined color="success" readonly
                                            :rules="[rules.required]" v-model="years">
                                        </v-text-field>

                                    </v-col>
                                    <v-col cols="12" md="3" sm="6">
                                        <v-select :items="civilstatus" v-model="value.civilstatus" label="Civil Status"
                                            required outlined dense color="success" :rules="[rules.required]">
                                        </v-select>
                                    </v-col>
                                    <v-col cols="12" md="3" sm="6">
                                        <v-select :items="sex" label="Sex" v-model="value.sex" required outlined dense
                                            color="success" :rules="[rules.required]">
                                        </v-select>
                                    </v-col>
                                    <v-col cols="12" md="2" sm="6">
                                        <v-combobox :items="religion" label="Religion" v-model="value.religion" required
                                            outlined dense color="success">
                                        </v-combobox>
                                    </v-col>
                                    <v-col cols="12" md="2" sm="6">
                                        <v-combobox :items="disabilities" label="Disability" v-model="value.disability"
                                            required outlined dense color="success">
                                        </v-combobox>
                                    </v-col>
                                    <v-col cols=" 12" md="2" sm="6">
                                        <v-combobox :items="ethnicity" label="Ethnic Group" required
                                            v-model="value.ethnicity" outlined dense color="success">
                                        </v-combobox>
                                    </v-col>
                                    <v-col cols=" 12" md="3" sm="6">
                                        <v-combobox :items="idtype" label="Type of ID" required v-model="value.idtype"
                                            outlined dense color="success">
                                        </v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-file-input label="Attach ID here" accept="image/x-png,image/gif,image/jpeg"
                                            outlined v-model="value.id" append-icon="mdi-camera" dense color="success"
                                            :rules="[rules.required]"></v-file-input>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <p class="font-weight-bold" style="margin-top: -35px">
                                            Home Address
                                        </p>
                                    </v-col>
                                    <v-col cols="12" md="3" sm="12">
                                        <v-combobox v-model="region" :items="address" item-text="region_name" outlined dense
                                            color="success" label="Region" @change="formattype('REGION')" return-object
                                            single-line :rules="[rules.required]">
                                        </v-combobox>

                                    </v-col>
                                    <v-col cols="12" md="3" sm="12">
                                        <v-combobox v-model="province" :items="provincename"
                                            :disabled="region == '' ? true : false" outlined dense color="success"
                                            label="Province" @change="formattype('PROVINCE')" return-object single-line
                                            :rules="[rules.required]">

                                        </v-combobox>
                                    </v-col>
                                    <v-col cols="12" md="3" sm="12">
                                        <v-combobox v-model="city" :items="cityname"
                                            :disabled="province == '' ? true : false" outlined dense
                                            label="Municipality / City" @change="formattype('CITY')" return-object
                                            color="success" :rules="[rules.required]" single-line>

                                        </v-combobox>
                                    </v-col>
                                    <v-col cols="12" md="3" sm="12">
                                        <v-combobox label="Baranggay" :disabled="city == '' ? true : false" outlined dense
                                            color="success" :items="brgyname" :rules="[rules.required]"></v-combobox>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-text-field label="House No. / Street / Village" required outlined dense
                                            color="success" :rules="[rules.required]" v-model="value.house"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="3" sm="12">
                                        <v-text-field label="Contact Number" required outlined dense color="success"
                                            type="number" hide-spin-buttons maxlength="11"
                                            oninput="this.value=this.value.slice(0,this.maxLength)"
                                            :rules="[rules.required, rules.counter]" v-model="value.number"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="3" sm="12">
                                        <v-text-field label="E-mail" required outlined dense color="success" type="email"
                                            :rules="[rules.required, rules.email]" v-model="value.email"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="3" sm="6">
                                        <v-text-field label="SSS" required outlined dense color="success"
                                            v-model="value.sss"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="3" sm="6">
                                        <v-text-field label="TIN" required outlined dense color="success"
                                            v-model="value.tin"></v-text-field>
                                    </v-col>
                                </v-row>
                                <!-- </v-form> -->
                                <small>*indicates required field</small>
                            </v-card-text>
                        </v-card>


                        <v-btn id="v-btn-c" color="success" @click="validate()" class="mt-2">
                            Continue
                        </v-btn>
                    </v-stepper-content>

                </v-form>
                <v-stepper-content step="2">
                    <v-card id="step2">
                        <v-card-text>
                            <v-container fluid>
                                <v-row>
                                    <v-col>
                                        <p class="font-weight-bold">Fill up the following:</p>
                                        <v-row>
                                            <v-col cols="12" md="6" lg="6">
                                                <v-combobox :items="countries" item-text="country" label="Specify Country: "
                                                    outlined color="success" dense></v-combobox>
                                            </v-col>
                                            <v-col cols="12" md="6" lg="6">
                                                <v-text-field label="Occupation: " outlined color="success"
                                                    dense></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                    <v-btn id="v-btn-c" color="success" @click.stop="dialog = true">
                        Save
                    </v-btn>
                    <v-btn @click="e1 = 1" class="ma-2" color="success" outlined> Back </v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import {ref} from "vue";
export default {
    components: {

        // ref
    },



    data: () => ({
        disable: '',
        provincename: {},
        cityname: {},
        brgyname: {},
        countries2: {},
        region: '',
        province: '',
        city: '',
        brgy: '',
        valid: true,
        value: {
            surname: '',
            firstname: '',
            middlename: '',
            suffix: '',
            birthDate: '',
            age: '',
            civilstatus: '',
            sex: '',
            religion: '',
            disability: '',
            ethnicity: '',
            id: '',
            house: '',
            number: '',
            email: '',
            sss: '',
            tin: '', 
        },

        rules: {
            required: v => !!v || 'Required',
            counter: v => v.length <= 11 || 'Max 11 digits',
        },
        e1: 1,
        activePicker: null,
        date: null,
        defaultSelected:
            "N/A",
        suffix: [
            'N/A', 'Jr.', 'Sr.', 'III'
        ],
        disabilities: [
            "None",
            "Visual",
            "Hearing",
            "Speech",
            "Physical",
            "Mental",
            "Others (Please Specify)",
        ],
        ethnicity: [
            "None",
            "Mandaya",
            "Lumad",
            "Waray",
            "Bicolano",
            "Aeta",
            "Others (Please Specify)",
        ],
        civilstatus: ["Single", "Married", "Live-in", "Widowed", "Separated"],
        sex: ["Female", "Male"],
        idtype: [
            "School ID",
            "National ID",
            "Driver's License",
            "Company ID",
            "PRC License",
            "UMID",
        ],
        religion: [
            "Roman Catholic",
            "Islam",
            "Iglesia ni Cristo",
            "Seventh-day Adventist",
            "Evangelicals",
            "Protestants",
            "Aglipayan",
            "Bible Baptist Church",
            "Baptist",
            "United Church of Christ in the Philippines",
            "Jehovah's Witnesses",
            "Others",
        ],
        birthDate: '',
        years: null,
        months: null,
        days: null
    }),
    created() {
        this.fetchaddress(),
            this.fetchcountry();
    },
    computed: {
        ...mapGetters('users', { address: 'getadd', countries: 'getcountry' }),
    },
    methods: {
        formattype(type) {
            if (type == "REGION") {
                let res = this.region
                this.provincename = Object.keys(res.province_list)
            }
            if (type == "PROVINCE") {
                let res = this.region.province_list[this.province]
                this.cityname = Object.keys(res.municipality_list)
            }
            if (type == "CITY") {
                let res = this.region.province_list[this.province].municipality_list[this.city]
                // console.log("province=>",res.barangay_list)
                this.brgyname = Object.values(res.barangay_list)
            }
        },
        ...mapActions('users', ['fetchaddress', 'fetchcountry']),
        calculateAge(birthDate) {
            const currentDate = new Date();
            if (new Date(birthDate) > currentDate) {
                this.birthDate = null
                this.years = null;
                this.months = null;
                this.days = null;
                alert('Invalid Date of Birth')
            }
            const diffTime = currentDate - new Date(birthDate);
            const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            this.years = Math.floor(totalDays / 365.25);
            this.months = Math.floor((totalDays % 365.25) / 30.4375);
            this.days = Math.floor((totalDays % 365.25) % 30.4375);
        },
        validate() {
            let x = this.$refs.formes2.validate();
            if (v) {
                this.e1 = this.e1 + 1
            }
        },

    },
};
</script>