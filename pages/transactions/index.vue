import axios from 'axios';
<template>
  <div>
      <div class="w-full text-center mt-4"> 
          <nuxt-link to="/transactions/new">
            <div class="w-1/2 mx-auto py-5 rounded-full text-2xl font-bold bg-blue-500 text-white">Add Transaction</div>
          </nuxt-link>
      </div>
    <div class="text-5xl font-black text-blue-500 text-center mt-12">Transactions</div>
    <div class="w-10/12 mx-auto">
        <AppTable
        :columns="columns"
        :link="link"
        url="/transaction"
        />
    </div>
  </div>
</template>

<script>
export default {
    
    data() {
        return {
            link: {path: '/transactions/', id: '_id', append: true},
            columns: [
                {label: 'Date', value: '_id'},
                {label: 'Total Transactions', value: 'totalTransactions'},
                {label: 'Total Sale', value: 'totalSale'},
                {label: 'Total Weight', value: 'totalWeight'},
                {label: 'Total Quantity', value: 'totalQuantity'}
            ],
        };
    }
}
</script>
