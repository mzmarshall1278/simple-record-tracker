<template>
  <div>
    <div class="w-10/12 mx-auto mt-24 grid lg:grid-cols-2 gap-5">
    <!-- <Card v-for="i in 5" :key="i"/> -->
    <pre>{{stock}}</pre>
    </div>
  </div>
</template>

<script>
export default { 
  data(){
    return {

    }
  },
  computed: {
    stock(){
      return this.$store.getters['stock/getStockDetails'];
    }
  }
}
</script>
