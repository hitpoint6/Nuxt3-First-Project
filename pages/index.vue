<template>
  <h2>Home</h2>
  <p>
    Bridging the gap between fashion-forward attire and functional
    carry-essentials, WearNCarry stands as a testament to modern lifestyle
    needs. Nestled at the intersection of style and convenience, our store
    curates a unique blend of chic clothing and elegant bags, catering to those
    who crave a seamless blend of form and function. At WearNCarry, we believe
    that your wardrobe choices should be as versatile as you are, and every
    piece we offer is selected with the intent to elevate your everyday style.
    Step in and discover a world where fashion meets practicality.
  </p>
  <div>
    <div>Current Count: {{ counter.count }}</div>
    <button class="btn" @click="counter.increment">increase</button>
  </div>
</template>

<script setup>
import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});

const counter = useCounterStore();
</script>
