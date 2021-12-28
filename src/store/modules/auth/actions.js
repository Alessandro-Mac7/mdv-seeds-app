let timer;

export default {
    async login(context, payload) {

        let url = process.env.VUE_APP_AUTH_BASE_URL + 'login';

        console.log('Begin auth/login url: ' + url)
        console.log('Begin auth/login payload: ' + JSON.stringify(payload))

        const response = await fetch(url, {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            // mode: 'no-cors',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
            })
        });
        
        console.log('Begin auth/login url: ' + response);

        const responseData = await response.json();

        if (!response.ok) {
            console.log(response.message)
            throw new Error('Errore di autenticazione. Controlla le tue credenziali.');
        }


        const expiresIn = +responseData.expires_in * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('name', responseData.name);
        localStorage.setItem('token', responseData.token);
        localStorage.setItem('userId', responseData.userId);
        localStorage.setItem('tokenExpiration', expirationDate);

        console.log('token ' + responseData.token);
        console.log('userId ' + responseData.userId);

        timer = setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn);

        context.commit('setUser', {
            name: responseData.name,
            token: responseData.token,
            userId: responseData.userId
        });
    },

    async signup(context, payload) {
        let url = process.env.VUE_APP_AUTH_BASE_URL + 'register';

        console.log(JSON.stringify(payload));

        const response = await fetch(url, {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({
                name: payload.name,
                lastName: payload.lastName,
                email: payload.email,
                password: payload.password,
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error('Errore di autenticazione. Controlla le tue credenziali.');
        }

        context.commit('setPreCompiledUser', {
            email: responseData.email,
        });

    },

    tryLogin(context) {
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('name');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = +tokenExpiration - new Date().getTime();

        if (expiresIn < 0) {
            return;
        }

        timer = setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn);

        if (token && userId && name) {
            context.commit('setUser', {
                name: name,
                token: token,
                userId: userId
            });
        }
    },
    async logout(context) {

        let url = process.env.VUE_APP_AUTH_BASE_URL + 'logout';

        const token = 'Bearer ' + context.rootGetters.token;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': token,
            }
        });

        if (!response.ok) {
            throw new Error('Errore nel logout. Riprovare!');
        }

        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);

        context.commit('setUser', {
            token: null,
            userId: null
        });
    },

    autoLogout(context) {
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
};
