<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">WearNCarry</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
          <li><NuxtLink to="/products/abc" class="btn">abc</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>

  <div class="container mx-auto p-4 max-w-2xl">
    <slot />
  </div>
</template>

<script></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
