<template>
<!-- <div>
<div v-for="(item, index) in data" :key="index">
{{item.title}}

</div>
</div> -->
<router-view>
  <router-link :to="{name:'News'}></router-link>
<router-view/>
</template>

<script>

 import {
    computed
  } from 'vue';
 import {
    useStore
  } from 'vuex';
export default {
  name: 'App',
  components: {
    
  },
  setup(){
     const store = useStore()
     store.dispatch('fetchNews')
     const data = computed(() => store.getters.getNewsList)
    return{data}
  }
}
</script>

<style>
#app {

}
</style>
