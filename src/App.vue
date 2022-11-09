<template>
  <div>{{count}}</div>
  <test></test>
</template>

<script>
import test from './components/test.vue'
export default {
  components: {
    test
  },
  data(){
    return {
      count: 1
    }
  }
}
</script>

<style>

</style>
