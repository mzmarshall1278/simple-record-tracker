<template>
  <div>
    <div class="text-5xl font-black text-blue-500 text-center mt-12">Vendors</div>
    <div class="w-10/12 mx-auto mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    <Card :title="stock.title" :rows="stock.rows" />
    <Card :title="pending.title" :rows="pending.rows" />
    <Card :title="free.title" :rows="free.rows" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default { 
  data(){
    return {
      page: 1,
    }
  },
  methods: {
    getVendors(page){
      axios.get(`http://localhost:3000/vendors?page=${page}&`)
    }
  }
}
</script>
