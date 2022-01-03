<template>
  <div>
    <div class="text-5xl font-black text-blue-500 text-center mt-12">Transactions  on {{new Date(date).toLocaleDateString()}}</div>
    <AppTable
    :data="transactions.transactions"
    :columns="columns"
    :count="transactions.total"
    />
  </div>
</template>
<script>
    export default{
        async asyncData({$axios ,params}){
           const transactions = await $axios.$get(`http://localhost:3000/transaction?date=${params.id}`);
           return {transactions};
                
    },
        data(){
            return {
                columns: [
                    {label: 'Vendor', value: 'seller', child: 'name'},
                    {label: 'Weight', value: 'weight'},
                    {label: 'Quantity', value: 'quantity'},
                    {label: 'Price', value: 'price'},
                ],
            page: 1
            }
        },
        computed: {
            date(){
                return this.$route.params.id
            }
        }
    }
</script>