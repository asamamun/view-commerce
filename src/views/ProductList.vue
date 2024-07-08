<template>
    <div class="container">
      <h2 class="my-4">Products</h2>
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
          <div class="card">
            <img :src="product.thumbnail" class="card-img-top" :alt="product.title">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text">Price: ${{ product.price }}</p>
              <button @click="alertCart(product)" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex'
  
  export default {
    name: 'ProductList',
    computed: {
      ...mapState(['products'])
    },
    methods: {
      ...mapActions(['fetchProducts', 'addToCart']),
      alertCart(product) {
        this.addToCart(product);
        this.$swal.fire({
        title: 'Success!',
        text: product.title + ' added to cart!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      }
    },
    created() {
      this.fetchProducts()
    }
  }
  </script>