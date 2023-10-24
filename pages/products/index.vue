<template>
  <h2>Products</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    <div v-for="p in products">
      <ProductCard :product="p" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
  title: "wearNCarry | Products",
  meta: [{ name: "description", content: "Browse all products" }],
});
</script>

<style lang="scss" scoped></style>
