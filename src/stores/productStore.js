import { defineStore } from 'pinia';
import axios from "axios";

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async getProducts(){
      try {
        const prod = await axios.get("https://fakestoreapi.com/products")
        console.log(prod)
        this.products = prod.data
      } catch (error) {
        console.log(error)
      }
    },
  },
});
