<template>
  <div class="w-5/6 mx-auto">
    <div class="text-5xl font-black text-blue-500 text-center mt-12">Transactions  on {{new Date(date).toLocaleDateString()}}</div>
    <AppTable
    :columns="columns"
    :url="`/transaction?date=${date}`"

    />
  </div>
</template>
<script>
    export default{
        data(){
            return {
                columns: [
                        {label: 'Vendor', value: 'seller', child: 'name'},
                        {label: 'Weight', value: 'weight'},
                        {label: 'Quantity', value: 'quantity'},
                        {label: 'Price', value: 'price'},
                ],
            }
        },
        computed: {
            date(){
                return this.$route.params.id
            }
        }
    }
</script>