<template>
  <a href="#/">首页 hello</a> 
  <a href="#/about" style="margin-left:10px">about</a>
  <!-- <div>{{count}}</div> -->
  <!-- <test></test> -->
  <component :is="currentView" />
</template>

<script setup>
import { computed, ref } from 'vue'
import About from './components/About.vue'
import HelloWorld from './components/HelloWorld.vue'
const count = ref(1)
const routes={
  '/': HelloWorld,
  '/about':About
}

const currentPath = ref(window.location.hash)
console.log('current:', currentPath);
window.addEventListener('hashchange',()=>{
  currentPath.value=window.location.hash
  console.log('hashchange', currentPath);
})
const currentView=computed(()=>{
  console.log('currentPath.value.slice(1)', currentPath.value);
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<style>
</style>
