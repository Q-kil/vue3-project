<template>
    <h1>child</h1>
  <h1>{{ ids }}</h1>
</template>

<script>
// export default {
//     props:['id'],
//     data(){
//         return{
//             ids:null
//         }
//     },
//     watch:{
//         id(val){
//             console.log('val',val)
//         }
//     }
// }
import { watchEffect } from 'vue';

export default {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    watchEffect(() => {
      console.log(props.id); // 'Hello World'
    });
  },
};
</script>

<style>

</style>