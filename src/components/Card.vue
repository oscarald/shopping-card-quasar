<script setup>
const props = defineProps({
    product:{
        type: Object
    }
})
</script>

<template>
    <q-card class="my-card q-ma-md">
      <q-img 
      :src="props.product.image" 
      style="height: 400px;"
      :fit="contain"
      />

      <q-card-section>
        
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ props.product.title }}
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{ props.product.price }} $
        </div>
        <div class="text-caption text-grey" style="height: 100px; overflow: hidden;">
          {{ props.product.description }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="shopping_cart" />
        <q-btn flat round icon="favorite_border"/>
          
      </q-card-actions>
    </q-card>
</template>