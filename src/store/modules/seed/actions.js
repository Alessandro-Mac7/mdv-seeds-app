export default {
    async loadUserSeed(context) { 
        console.log("BEGIN: action -> admin/product/loadCart");

        const response = await fetch(
          `http://localhost:8000/api/v1/cart`
        );
        const responseData = await response.json();
    
        if (!response.ok) {
            console.log("Errore nella richiesta");
          const error = new Error(responseData.message || 'Failed to fetch!');
          throw error;
        }
        context.commit('setCart', responseData.data);
    }
}