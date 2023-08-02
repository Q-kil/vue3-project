<template>
  <!-- <a href="#/">Home</a> | <a href="#/about">About</a>
  <component :is="currentView" /> -->
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  <hr>
  <div>{{count}}</div>
  <button @click="handle">click</button>
</template>

<!-- <script lang="ts"> -->
<script setup>
// export default {
//   data(){
//     return {
//       count: 1
//     }
//   },
//   methods:{
//     handle(){
//       this.count++
//       console.log('click', this.count);
//     }
//   }
// }

import { ref, computed } from "vue";

const count = ref(1);

function handle(){
  count.value++;
}
</script>

<style>
</style>
