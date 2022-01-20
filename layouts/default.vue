<template>
    <div>
        <loader v-if="loading"/>
        <error v-if="error.length"/>
        <success v-if="success != ''"/>
        <Nav/>
        <Nuxt keep-alive/>
    </div>
</template>
<script>
export default {
//   middleware: ['check'],
  computed: {
    loading(){
      return this.$store.state.loading
    },
    error(){
      return this.$store.state.error
    },
    success(){
      return this.$store.state.success;
    }
  },
  
}
</script>
<style>
    input:focus{
      outline: none;
      
  }
</style>