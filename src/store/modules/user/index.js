import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            user: {
                userId: 1,
                name: "Alessandro",
                lastName: "Macri"
            },
            userSeeds: [
                {
                    id: 1,
                    userId: 2,
                    seed: [
                        {
                            id: 1,
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nibh nec lectus lacinia porta. Duis efficitur turpis eu risus lacinia, vitae sodales dui varius. Ut pellentesque laoreet iaculis. ",
                            color: "blue",
                            code: "KzXpV",
                        },
                        {
                            id: 3,
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nibh nec lectus lacinia porta. Duis efficitur turpis eu risus lacinia, vitae sodales dui varius. Ut pellentesque laoreet iaculis. ",
                            color: "green",
                            code: "zhynZ"
                        },
                        {
                            id: 4,
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nibh nec lectus lacinia porta. Duis efficitur turpis eu risus lacinia, vitae sodales dui varius. Ut pellentesque laoreet iaculis. ",
                            color: "yellow",
                            code: "XC7c1"
                        },
                        {
                            id: 5,
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nibh nec lectus lacinia porta. Duis efficitur turpis eu risus lacinia, vitae sodales dui varius. Ut pellentesque laoreet iaculis. ",
                            color: "blue",
                            code: "Qf0e8"
                        },
                        {
                            id: 6,
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nibh nec lectus lacinia porta. Duis efficitur turpis eu risus lacinia, vitae sodales dui varius. Ut pellentesque laoreet iaculis. ",
                            color: "green",
                            code: "FHw0x"
                        },
                    ],
                    pickDate: '2021-12-23'
                },                
            ]
        }
    },
    mutations,
    actions,
    getters
}