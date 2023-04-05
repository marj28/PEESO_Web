import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const state = () => ({
  users: {
    status: 'Searching'
  },
  auth: {},
  address: {},
  

});


const getters = {
  getUsers(state) {

    return state.users;
  },
  getAuth(state) {

    return state.auth;
  },
  getadd(state) {
    console.log("getaddress=>", state.address)
    return state.address;
  }

}

const mutations = {
  setUsers(state, payload) {

    state.users.status = payload;
    console.log("state=>", state.users.status)
  },

  setAuth(state, payload) {

    state.auth = payload;

  },
  setaddress(state, payload) {

    state.address = payload;

  },

}

const actions = {
  async fetchUsers({ commit }) {
    console.log("commit=>before", this.state.users.status)
    // let res = await axios.get(`${process.env.VUE_APP_API_URL}/usersall.php`);
    commit('setUsers', 'HIRED');
    // this.users.status='HIRED'
    console.log("commit=>", this.state.users.status)

  },
  async Registration({ commit }, payload) {
    console.log("register start!")
    let res = await axios.post(`${process.env.VUE_APP_API_URL}/new_user.php`, payload);
    localStorage.setItem('auth', JSON.stringify(res.data.user));
    commit('setAuth', res.data.user[0]);


  },
  async Loginuser({ commit }, payload) {

    let res = await axios.post(`${process.env.VUE_APP_API_URL}/login.php`, payload);


    if (res.data['auth'] == 'failed')
      return 0;
    else if (res.data['auth'] == 'none')
      return 2;
    else if (res.data['auth'] == 'passed') {
      localStorage.setItem('auth', JSON.stringify(res.data['email']));
      commit('setAuth', res.data);

      return 1;
    }
    else
      return 0;
  },
  async Deleteuser({ commit }, payload) {
    let res = await axios.post(`${process.env.VUE_APP_API_URL}/deleteuser.php`, payload);
    console.log("delete=>", res.data['deleted']);
    console.log("res.data.users", res.data.Users);
    if (res.data['deleted'] == 'success') {
      commit('setUsers', res.data.Users);
      return 1;
    }
    else
      return 0;
  },
  async Updateuser({ commit }, payload) {
    let res = await axios.post(`${process.env.VUE_APP_API_URL}/edituser.php`, payload);
    console.log(res.data);
    if (res.data['output'] == 'success') {
      commit('setUsers', res.data.Users);
      return 1;
    }
    else
      return 0;
  },

  async fetchaddress({ commit }) {
    {
      let res = await axios.get(`https://raw.githubusercontent.com/flores-jacob/philippine-regions-provinces-cities-municipalities-barangays/master/philippine_provinces_cities_municipalities_and_barangays_2019v2.json`)
      
      // let res2 ={}
      // for(let i=0;i<16;i++){
      //   res2.push(res.data[`0${i}`])
      // }
      console.log("fetchaddress=>",Object.values(res.data))
      commit('setaddress', Object.values(res.data));
    }
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}