import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile:[
      {position:'Rapper', name:'Kim Hong Joong', role:'Leader, Rapper, Composer',  geburtstag: 'November 7th, 1998', grösse:'172 cm'},
      {position:'Vocalist', name:'Park Seong Hwa', role:'Vocalist, Visual',  geburtstag: ' April 3rd, 1998', grösse:'178 cm'},
      {position:'Performer', name:'Jeong Yun Ho', role:'Performer, Vocalist',  geburtstag: 'March 23rd, 1999', grösse:'185 cm'},
      {position:'Vocalist', name:'Kang Yeo Sang', role:'Vocalist, Performer, Visual',  geburtstag: 'June 15th, 1999', grösse:'175 cm'},
      {position:'Vocalist', name:'Choi San', role:'Vocalist, Performer',  geburtstag: 'July 10th, 1999', grösse:'176 cm'},
      {position:'Rapper', name:'Song Min Gi', role:'Rapper, Performer',  geburtstag: ' August 9th, 1999', grösse:'184 cm'},
      {position:'Performer', name:'Jung Woo Young', role:'Performer, Vocalist',  geburtstag: 'November 26th, 1999', grösse:'173 cm'},
      {position:'Vocalist', name:'Choi Jong Ho', role:'Main Vocalist, Maknae',  geburtstag: 'October 12th, 2000', grösse:'176 cm'},
    ]
  },
  getters: {
    Performer(state) {
      return state.profile.filter(fach => fach.position === 'Performer');
    },
    Rapper(state) {
      return state.profile.filter(fach => fach.position === 'Rapper');
    },
    Vocalist(state) {
      return state.profile.filter(fach => fach.position === 'Vocalist');
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
