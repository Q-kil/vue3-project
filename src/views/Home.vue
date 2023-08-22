<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="increment">Count is: {{ count }}</button>
    <Empty></Empty>

    <div>
      <p>Object</p>
      <p>obj: {{ obj }}</p>
      <p>obj.nested.foo: {{ obj.nested.foo }}</p>
      <p>obj.array: {{ obj.array }}</p>
      <button @click="mutateDeeply">change</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue' 
const count = ref(0)
console.log('count', count, JSON.stringify(count))
console.log('count', count.value)
function increment() {
  count.value++
}

const obj = ref({
  nested: {
    foo: 1
  },
  array: [1, 2, 3]
})
async function mutateDeeply() {
  obj.value.nested.foo++
  obj.value.array.push(4)
  await nextTick()
  console.log('dom 更新了');
}
</script>

<style>

</style>