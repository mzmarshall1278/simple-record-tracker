<template>
  <div>
    <div class="fixed opacity-90 mx-auto bg-red-500 inset-x-0  rounded z-40 mt-40 text-white p-4 md:w-1/3 mx-auto opacity-70">
    <div @click="close" class="rounded-full bg-red-500 text-white w-6 top-2 left-2 text-center h-6 absolute inset-x-0 pb-5 font-bold cursor-pointer">X</div>
    <p class="w-full text-center top-10 font-bold align-middle inline-block text-red-500 text-4xl animate-pulse">Error!!!</p>
    <!-- <div>
      <p v-for="(item, key) in error" :key="key" class="text-red-900 ">* {{item}}</p>
    </div> -->
    <p class="text-white ">* {{error}}</p>
  </div> 
  </div>
</template>
<script>
export default {
  methods:{
    close(){
      return this.$store.commit('setError', '');
    }
  },
  computed: {
    error(){
      return this.$store.state.error;
    }
  }
}
</script>
