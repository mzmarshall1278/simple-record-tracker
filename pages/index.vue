<template>
  <div>
    <div class="w-10/12 mx-auto mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    <Card :title="stock.title" :rows="stock.rows" />
    <Card :title="pending.title" :rows="pending.rows" />
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
    },
    pending(){
      return this.$store.getters['stock/getPendingDetails'];
    }
  }
}
</script>
