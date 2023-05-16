<template>
  <a href="#/">首页 hello</a> 
  <a href="#/about" style="margin-left:10px">about</a>
  <!-- <div>{{count}}</div> -->
  <!-- <test></test> -->
  <!-- <component :is="currentView" /> -->
  <!-- <About :id="id"></About> -->
  <Child :id="id"></Child>
</template>

<script setup>
import { computed, ref } from 'vue'
import About from './components/About.vue'
import HelloWorld from './components/HelloWorld.vue'
import Child from './components/Child.vue'
const count = ref(1)
const routes={
  '/': HelloWorld,
  '/about':About
}

const currentPath = ref(window.location.hash)
console.log('current:', currentPath);
const id = ref('888');

window.addEventListener('hashchange',()=>{
  currentPath.value=window.location.hash
  console.log('hashchange', currentPath);
})
const currentView=computed(()=>{
  console.log('currentPath.value.slice(1)', currentPath.value);
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
setTimeout(() => {
  id.value = 'Hello World';
}, 1000);
</script>

<style>
</style>
