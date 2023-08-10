<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="increment">Count is: {{ count }}</button>
    <Empty></Empty>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue' 
const count = ref(0)
console.log('count', count)
console.log('count', count.value)
function increment() {
  count.value++
}
</script>

<style>

</style>