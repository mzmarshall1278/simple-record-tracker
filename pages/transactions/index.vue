import axios from 'axios';
<template>
  <div>
    <div class="text-5xl font-black text-blue-500 text-center mt-12">Transactions</div>
    <AppTable
    :data="transactions"
    :columns="columns"
    :link="link"
    />
   
  </div>
</template>

<script>
export default {
    async asyncData({$axios}){
           const transactions = await $axios.$get(`http://localhost:3000/transactions?page=1`);
           return {transactions};
                
    },
    data() {
        return {
            link: {path: '/transactions/', id: 'date', append: true},
            columns: [
                {label: 'Date', value: 'date'},
                {label: 'Weight', value: 'weight'},
                {label: 'Quantity', value: 'quantity'},
                {label: 'Total Price', value: 'price'},
                {label: 'Total Sellers', value: 'sellers'}
            ],
            page: 1
        };
    },
    computed: {
        stock() {
            return this.$store.getters["stock/getStockDetails"];
        },
        pending() {
            return this.$store.getters["stock/getPendingDetails"];
        },
        free() {
            return this.$store.getters["stock/getFreeDetails"];
        }
    },
    methods: {
        getTransactions(page){
        //    return  axios.get(`http://localhost:3000/transactions?page=${page}&`).then(res => {
        //         this.transactions = res.data
        //     });
        }
    }
}
</script>
