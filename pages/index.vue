<template>
  <div>
    <div class="text-5xl font-black text-blue-500 text-center mt-12">INVENTORY</div>
    <div class="w-10/12 mx-auto mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    <Card :title="stock.title" :rows="stock.rows" />
    <Card :title="pending.title" :rows="pending.rows" />
    <Card :title="free.title" :rows="free.rows" />
    </div>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
export default { 
  middleware: 'auth',
  // asyncData({$axios}){
  //   return $axios.$get(`http://localhost:3000/transaction/ongoing`, {
  //     headers: {
  //       authorization: `Bearer ${Cookies.get('token')}`
  //     }
  //   }).then(res=> {
  //     console.log(res.length);
  //   }).catch(err=> {
  //     console.log(err);
  //   })
  // },
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
    },
    free(){
      return this.$store.getters['stock/getFreeDetails'];
    }
  }
}
</script>
