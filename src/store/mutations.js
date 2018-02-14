import * as types from './mutation-types'

const mutations = {
  [types.SET_SELLER](state, seller) {
    state.seller = seller
  }
}

export default mutations
