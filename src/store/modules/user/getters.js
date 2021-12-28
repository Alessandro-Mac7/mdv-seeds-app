export default {
    seeds(state) {
        return state.userSeeds;
    },
    hasSeeds(state) {
        return state.userSeeds && state.userSeeds.length > 0;
    },
    lastSeed(state) {
        return state.lastSeed;
    },
    hasLastSeed(state) {
        return state.lastSeed != null;
    },
    colors(state) {
        return state.colors;
    }
}