import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            userSeeds: [],
            colors: [ {id:1, color:'blue'}, {id:2, color:'yellow'}, {id:3, color:'light-blue'}, {id:4, color:'green'},],
            lastSeed: {}
        }
    },
    mutations,
    actions,
    getters
}