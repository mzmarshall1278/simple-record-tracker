import axios from 'axios';
<template>
    <div class="mb-24">
        <div class="w-4/10 text-right">
            <input  name="name" type="date" :required="true" v-model="date" class="w-full py-4  px-6 pl-3 border-3 border-blue-500 text-gray-400">
            <input type="text" class=" p-3 border-2 border-blue-500 text-blue-500 rounded-full focus:border-blue-900" placeholder="search" v-model="search">
        </div>
        <table class="w-full"  v-if="data.length">
            <thead>
                <tr>
                <th v-for="(col, key) in columns" :key="key">{{col.label}}</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(row,key) in data" :key="key" @click="open(row)">
                <td v-for="(item, key) in columns" :key="key">
                    <span v-if="typeof row[item.value] =='object'">{{row[item.value][0][item.child]}}</span>
                    <span v-else>{{row[item.value] || 'Nil'}}</span>
                </td>
            </tr>
            </tbody>
            <div class="flex w-auto mx-auto mt-3">
            <button :disabled="page == 1" @click="previous" class="bg-blue-100 text-blue-800 py-4 px-8 rounded-lg mx-4 hover:bg-blue-500 hover:text-white disabled:opacity-0 disabled:cursor-not-allowed" > &lt;</button>

            <button  class="bg-blue-100 text-blue-800 py-4 px-8 rounded-lg mx-4 hover:bg-blue-500 hover:text-white disabled:opacity-0" v-for="(number, index) in pages" :key="index" @click="changePage(number)" :disabled="number == page">{{number}}</button>

            <button  :disabled="page == pages" @click="next" class="bg-blue-100 text-blue-800 py-4 px-8 rounded-lg mx-4 hover:bg-blue-500 hover:text-white disabled:opacity-0">&gt;</button>
        </div>
        </table>
        <div v-else class="text-center text-2xl text-red-500 my-4 font-black">
                No Data Available :(
            </div>
    </div>
</template>
<script>
export default {
    props: {
        columns: {
            type: Array
        },
        link: {
            type: Object,
        },
        url: {
            type: String
        }
    },
    data() {
        return {
            search: '',
            date: '',
            page: 1,
            data: [],
            count : 0,
            
        }
    },
    computed: {
        pages(){
            if(this.count) return Math.ceil(this.count/10);
            else return 1
        },
        computedUrl(){
            return `${this.url}${this.url.includes('?') ? '&page=' : '?page='}${this.page}`
        }
    },
    methods: {
        getData(){
            return this.$axios.$get(`${this.computedUrl}`, {
                headers: {
                    authorization: this.$auth.strategies.local.token.$storage._state['_token.local'],
                   'Content-Type': 'application/json',
               }
            }).then(res=> {
              this.data = res.transactions || res.sellers
              this.count = res.total
            }).catch(error=> {
                console.log(error);
            })
        },
        previous(){
            this.page -= 1;
            this.getData()
        },
        next(){
            this.page += 1;
            this.getData()
        },
        changePage(index){
            this.page = index;
            this.getData()
        },
        open(row){
          if(this.link) this.$router.push({path: row[this.link.id], append: this.link.append});
        }
    },
    mounted(){
        return this.getData()
    }

}
</script>
<style>
table{
    @apply text-blue-500 font-bold my-10
}
table tbody tr:nth-child(2n+1) {
    @apply bg-blue-50 
  }
  td {
      @apply text-center w-auto border-t-4 border-solid p-4
  }
  tr:hover {
      @apply bg-blue-100 text-blue-900 cursor-pointer 
  }
  
</style>