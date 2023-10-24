<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product thumb" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-xl my-7">{{ product.title }}</h2>
        <p class="text-sm my-7">{{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex">
          <span class="material-symbols-outlined mr-5"> shopping_cart </span>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: "product",
});
</script>

<style scoped>
img {
  max-width: 300px;
}
</style>
