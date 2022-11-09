<template>
  <h1>test</h1>
  <p>{{dummy}}</p>
</template>

<script setup>
import { computed, effect, reactive, ref } from "vue";
// const counter = ref({num1:1, num2:2})
const counter = reactive({num1:1, num2:2})

// let dummy = counter.num1 + counter.num2
// let dummy = computed(()=>{
//   return counter.num1 + counter.num2
// })
let dummy
effect(()=>{
  dummy = counter.num1 + counter.num2
  console.log(dummy);
})
setInterval(()=>{
  counter.num1++
}, 1000)
</script>

<style>

</style>