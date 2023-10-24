<template>
  <div class="text-center">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops..</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn mt-5" @click="handleClearError">Go Home...</button>
  </div>
</template>

<script setup>
defineProps({
  error: "error",
});

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped></style>
