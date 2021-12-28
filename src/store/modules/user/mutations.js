export default {
    setLastSeed(state, payload) {
        state.lastSeed = payload;
    },
    setUserSeeds(state, payload) {
        state.userSeeds = payload;
    },
    addUserSeed(state, payload) {
        state.userSeeds.push(payload);
    }
}