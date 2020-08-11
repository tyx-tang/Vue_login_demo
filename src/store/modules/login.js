import { LOGIN } from '../mutation_types'

const state = {
  user_num: '',
  user_password: ''
}

const getters = {
  get_num: state => {
    return state.user_num
  },
  get_password: state => {
    return state.user_password
  }
}

const mutations = {
  [LOGIN] (state, data) {
    data = JSON.parse(data)
    console.log(data)
    state.user_num = data.user_num
    state.user_password = data.user_password
  }
}

export default {
  state,
  mutations,
  getters
}
