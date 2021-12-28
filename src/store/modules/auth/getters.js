export default {
    userId(state) {
        return state.userId;
    },
    name(state) {
        return state.name;
    },
    token(state) {
        return state.token;
    },
    isAuthenticated(state) {
        return !!state.token;
    },
    didAutoLogout(state) {
        return state.didAutoLogout;
    }
};