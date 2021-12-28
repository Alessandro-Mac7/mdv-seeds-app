export default {
    async loadUserSeeds(context) { 
        console.log("BEGIN: action -> user/loadUserSeeds");

        const token = 'Bearer ' + context.rootGetters.token;
        const id = context.rootGetters.userId;

        const response = await fetch(
          `${process.env.VUE_APP_API_BASE_URL}seeds/user/${id}` ,{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token,
            }
          }
        );
        const responseData = await response.json();
    
        if (!response.ok) {
          console.log("Errore nella richiesta" + response.message);
          throw new Error('Errore nel caricamento della risorsa!');
        }

        context.commit('setUserSeeds', responseData.data);
  },

  async loadLastSeed(context) {
    console.log("BEGIN: action -> user/loadLastSeed");

    const token = 'Bearer ' + context.rootGetters.token;
    const id = context.rootGetters.userId;

    const response = await fetch(
      `${process.env.VUE_APP_API_BASE_URL}seeds/user/${id}?last-seed=true` ,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      console.log("Errore nella richiesta" + response.message);
      throw new Error('Errore nel caricamento della risorsa!');
    }

    context.commit('setLastSeed', responseData.data);
  },

  async pickSeed(context) {
    console.log("BEGIN: action -> user/loadLastSeed");

    const token = 'Bearer ' + context.rootGetters.token;
    const id = context.rootGetters.userId;

    const response = await fetch(
      `${process.env.VUE_APP_API_BASE_URL}seeds/user/${id}` ,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        method: 'POST'
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      console.log("Errore nella richiesta" + response.message);
      throw new Error('Errore nel caricamento della risorsa!');
    }

    context.commit('addUserSeed', responseData.data);
    context.commit('setLastSeed', responseData.data);
  }
}