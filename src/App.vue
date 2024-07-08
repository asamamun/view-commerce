<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">E-commerce App</a>
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Products</router-link>
          <router-link class="nav-link" to="/cart">Cart ({{ cart.length }})</router-link>
        </div>
      </div>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState(['cart'])
  },
  methods: {
    ...mapActions(['fetchProducts'])
  },  
  created() {
    this.fetchProducts()
  },
  mounted() {
    
  },
}
</script>