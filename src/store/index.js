import { createStore } from 'vuex'

export default createStore({
  state: {
    astres:[]
  },
  getters: {
    astres: (state) => state.astres
  },
  mutations: {
    getAstres:(state) => {
      fetch('https://api.le-systeme-solaire.net/rest/bodies/')
          .then( (data) => data.json())
          .then( (user) => {
            state.astres = user.bodies;
          })
    }
  },
  actions: {
  },
  modules: {
  }
})
