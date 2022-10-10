<template>
  <div>news</div>
  <div>
<div v-for="(item, index) in data" :key="index">
{{item.title}}

</div>
</div>
</template>

<script>
 import {
    computed
  } from 'vue';
 import {
    useStore
  } from 'vuex';
export default {
  setup(){
     const store = useStore()
     store.dispatch('fetchNews')
     const data = computed(() => store.getters.getNewsList)
    return{data}
  }
}
</script>

<style>

</style>