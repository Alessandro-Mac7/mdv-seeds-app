export default {
    setUser(state, payload) {
        state.name = payload.name;
        state.token = payload.token;
        state.userId = payload.userId;
        state.didAutoLogout = false;
    },
    setAutoLogout(state) {
        state.didAutoLogout = true;
    },
    setPreCompiledUser(state, payload) {
        state.preCompiledEmail = payload;
    }
};