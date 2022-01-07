<template>
    <div class="w-5/6 mx-auto">
        <div class="text-5xl font-black text-blue-500 text-center mt-12">Seller : {{seller.name}}</div>

        <div class="w-4/6 mt-12 mx-auto">
            <div class="flex justify-between font-bold w-3/6 font-lg"><span class="text-green-500">PHONE NUMBER</span> <span class="text-blue-500">{{seller.phone}}</span></div>
            <div class="flex justify-between font-bold w-3/6 font-lg"><span class="text-green-500">LGA</span> <span class="text-blue-500">{{seller.LGA}}</span></div>
            <div class="flex justify-between font-bold w-3/6 font-lg"><span class="text-green-500">ADDRESS</span> <span class="text-blue-500">{{seller.address}}</span></div>
            <div class="flex justify-between font-bold w-3/6 font-lg"><span class="text-green-500">DEAL</span> <span class="text-blue-500">{{seller.deal == 0 ? 'TWO WEEKS' : seller.deal == 1 ? 'MONTHLY' : 'NO TIME RESTRICTION'}}</span></div>
            <div class="flex justify-between font-bold w-3/6 font-lg"><span class="text-green-500">STATUS</span> <span class="text-blue-500">{{seller.status}}</span></div>
            <div class="flex justify-between font-bold w-3/6 font-lg"><span class="text-green-500">DATE JOINED</span> <span class="text-blue-500">{{new Date(seller.dateJoined).toLocaleDateString()}}</span></div>
            <button @click="getTransactions" class="mt-5 bg-blue-500 text-white p-4 rounded hover:bg-white hover:text-blue-500">Show Transactions</button>
        </div>
       <div v-if="transactions.transactions">
            <AppTable
            :columns="columns"
            :url="`http://localhost:3000/transaction/?sellerId=${seller._id}`"
            />
       </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                transactions: [],
                columns: [
                    {label: 'Date', value: 'date'},
                    {label: 'Weight', value: 'weight'},
                    {label: 'Quantity', value: 'quantity'},
                    {label: 'Price', value: 'price'},
                ]
            }
        },
        async asyncData({$axios, params}){
            const seller = await $axios.$get(`http://localhost:3000/seller/${params.id}`);
            // const transactions = await $axios.$get(`http://localhost:3000/transactions?sellerId=${seller.id}`);
            console.log(seller);
           return {seller}; 
        },
        computed: {
            param(){
                return this.$route.params.id
            }
        },
        methods: {
            getTransactions(){
                console.log(this.seller._id);
                this.$axios.$get(`http://localhost:3000/transaction?sellerId=${this.seller._id}`).then(res=> {
                    this.transactions = res;
                })
            }
        }
    }
</script>