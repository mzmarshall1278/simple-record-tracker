<template>
    <div class="w-5/6 mx-auto">
        <div class="text-5xl font-black text-blue-500 text-center mt-12">Seller : {{seller.name}}</div>

        <div class="w-full mt-12">
            <div class="flex justify-between w-3/6"><span>PHONE NUMBER</span> <span>{{seller.phone}}</span></div>
            <div class="flex justify-between w-3/6"><span>LGA</span> <span>{{seller.LGA}}</span></div>
            <div class="flex justify-between w-3/6"><span>ADDRESS</span> <span>{{seller.address}}</span></div>
            <div class="flex justify-between w-3/6"><span>DEAL</span> <span>{{seller.deal == 0 ? 'TWO WEEKS' : seller.deal == 1 ? 'MONTHLY' : 'NO TIME RESTRICTION'}}</span></div>
            <div class="flex justify-between w-3/6"><span>STATUS</span> <span>{{seller.status}}</span></div>
            <div class="flex justify-between w-3/6"><span>DATE JOINED</span> <span>{{new Date(seller.dateJoined).toLocaleDateString()}}</span></div>
            <button @click="getTransactions">Show Transactions</button>
        </div>
        <!-- <AppTable
    :data=""
    :columns=""
    :count=""
    /> -->
    </div>
</template>
<script>
    export default {
        data(){
            return {
                transactions: [],
            }
        },
        async asyncData({$axios, params}){
            const seller = await $axios.$get(`http://localhost:3000/seller/${params.id}`);
            // const transactions = await $axios.$get(`http://localhost:3000/transactions?sellerId=${seller.id}`);
            console.log(seller);
           return {seller}; 
        },
        methods: {
            getTransactions(){
                this.$axios.$get(`http://localhost:3000/transaction?sellerId=${this.seller.id}`).then(res=> {
                    console.log(res);
                })
            }
        }
    }
</script>