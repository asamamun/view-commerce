import { createStore } from 'vuex'
import axios from 'axios'
import config from '../config'
import { localStoragePlugin } from './localStoragePlugin'
export default createStore({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setCart(state, cart) {
      state.cart = cart
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }      
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    updateQuantity(state, { productId, quantity }) {
      const product = state.cart.find(item => item.id === productId)
      if (product) {
        product.quantity = quantity
      }
    },
    clearCart(state) {
      state.cart = []
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const url = `${config.apiBaseUrl}${config.endpoints.placeOrder}`
        const response = await axios.get(config.apiProducts)
        commit('setProducts', response.data.products)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    addToCart({ commit }, product) {
      commit('addToCart', product)
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId)
    },
    updateQuantity({ commit }, payload) {
      commit('updateQuantity', payload)
    },
    async placeOrder({ state, commit }, orderData) {
      console.log(orderData);
      try {
        const url = `${config.apiBaseUrl}${config.endpoints.placeOrder}`
        const response = await axios.post(url, orderData)
        if (response.data.success) {
          commit('clearCart')
          return true
        }
        return false
      } catch (error) {
        console.error('Error placing order:', error)
        return false
      }
    }
  },
  getters: {
    cartTotal: state => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  plugins: [localStoragePlugin]
})