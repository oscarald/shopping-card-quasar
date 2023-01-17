<script setup>
import { useProductStore } from 'src/stores/productStore';
import { onMounted } from 'vue';
import Card from 'src/components/Card.vue'
const store = useProductStore()
onMounted(() => {
  store.getProducts()
})
</script>

<template>
  <h1 class="text-h3 text-center">Store</h1>
  <div class="row">
    <div class="col-4" v-for="product in store.products" :key="product.id">
      <Card :product="product"/>

    </div>
  </div>
</template>
