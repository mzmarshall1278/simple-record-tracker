<template>
  <div>
    <div class="fixed opacity-90 mx-auto bg-blue-50 inset-x-0  rounded z-40 mt-40 text-white p-4 md:w-1/3 mx-auto opacity-70">
    <div @click="close" class="rounded-full bg-blue-900 text-white w-6 top-2 left-2 text-center h-6 absolute inset-x-0 pb-5 font-bold cursor-pointer">X</div>
    <p class="w-full text-center top-10 font-bold align-middle inline-block text-blue-900 text-4xl animate-pulse">Success</p>
    <p class="text-blue-900 font-black">{{success}}</p>
  </div> 
  </div>
</template>
<script>
export default {
  computed:{
    success(){
      return this.$store.state.success;
    }, 
  },
  methods:{
    close(){
      console.log(this.$store.state.success);
      return this.$store.commit('setSuccess', '');
    }
  },
  mounted(){
      setTimeout(()=> this.$store.commit('setSuccess', ''), 1500);
  }
}
</script>