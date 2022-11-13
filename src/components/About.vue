<template>
  <h1>test</h1>
  <p>{{dummy}}</p>
  <p>鼠标位置：x:{{x}},y:{{y}}</p>
</template>

<script setup>
import { computed, effect, onMounted, reactive, ref } from "vue";
import {useMouse} from '../utils/mouse'
// const counter = ref({num1:1, num2:2})
const counter = reactive({num1:1, num2:2})
const {x,y} = useMouse()

// let dummy = counter.num1 + counter.num2
// let dummy = computed(()=>{
//   return counter.num1 + counter.num2
// })
let dummy
effect(()=>{
  dummy = counter.num1 + counter.num2
  console.log(dummy);
})
// setInterval(()=>{
//   counter.num1++
// }, 1000)


console.log('created');

onMounted(()=>{
  console.log('onMounted');
})

</script>

<style>

</style>