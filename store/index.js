import Cookies from 'js-cookie'

export const state = ()=> ({
    token: null,
    loading: false,
    error: '',
    success: ''
})

export const mutations = {
    setToken(state, payload){
        state.token = payload
    },

    setLoading(state, payload){
        state.loading = payload
    },

    setError(state, payload){
        state.error = payload;
    },
    setSuccess(state, payload){
        state.success = payload
    }
}

export const actions = {
    nuxtServerInit({commit}){
     const token =  Cookies.get('token');
     console.log('its',token);
    //  commit('setToken', token)
    }
  }
  