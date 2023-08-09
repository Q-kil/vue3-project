<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue' 
const count = ref(0) 
</script>

<style>

</style>