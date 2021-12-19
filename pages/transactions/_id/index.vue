<template>
  <div>
    <div class="text-5xl font-black text-blue-500 text-center mt-12">Transactions  on {{new Date(date).toLocaleDateString()}}</div>
    <AppTable
    :data="transactions"
    :columns="columns"
    />
   
  </div>
</template>
<script>
    export default{
        async asyncData({$axios}){
           const transactions = await $axios.$get(`http://localhost:3000/dayTransactions?page=1`);
           return {transactions};
                
    },
        data(){
            return {
                columns: [
                    {label: 'Vendor', value: 'vendor'},
                    {label: 'Weight', value: 'weight'},
                    {label: 'Quantity', value: 'quantity'},
                    {label: 'Total Price', value: 'price'},
                    {label: 'Completed', value: 'completed'}
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