export const state = ()=> ({
    token: null,
    loading: false,
    error: '',
    success: ''
})

export const getters = {
    isAuthenticated(state){
        return state.token != null;
    }
}

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
