// src/store/localStoragePlugin.js
export const localStoragePlugin = store => {
    // Load saved cart from localStorage when the store is initialized
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      store.commit('setCart', JSON.parse(savedCart))
    }
  
    // Subscribe to store mutations
    store.subscribe((mutation, state) => {
      // Save the cart to localStorage whenever it changes
      if (mutation.type === 'addToCart' || mutation.type === 'removeFromCart' || 
          mutation.type === 'updateQuantity' || mutation.type === 'clearCart') {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
/*       if(mutation.type === 'addToCart'){
        //sweet alert
        this.$swal.fire({
          title: 'Success!',
          text: 'Product added to cart!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } */
    })
  }