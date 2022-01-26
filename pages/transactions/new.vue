<template>
    <div>
        <div class="text-5xl font-black text-blue-500 text-center mt-12">Add New Transactions</div>
        <form v-on:submit.prevent="addNew" class="text-blue-900">
            <div class="lg:w-2/5 text-center mx-auto py-6 px-8 mt-4 bg-blue-50 rounded-xl">
                <div class="mt-8">
                <input name="name" type="date" :required="true" v-model="date" class="w-full py-4  px-6 pl-3 border-3 border-blue-500 text-gray-400">
                </div>
                <div class="mt-8">
                    <input placeholder="Weight" name="name" :required="true" v-model="weight" type="number" class="w-full py-4 pl-3 border-3 border-blue-500">
                </div>
                <div class="mt-8">
                    <input placeholder="price" name="name" :required="true" v-model="price" type="number" class="w-full py-4 pl-3 border-3 border-blue-500"/>
                </div>
                <div class="mt-8">
                    <input placeholder="Quantity" :required="true" name="name" v-model="quantity" type="number" class="w-full py-4 pl-3 border-3 border-blue-500"/>
                </div>
                <div class="mt-8 w-full">
                    <div class="bg-blue-500 py-4 cursor-pointer text-white" @click="showDropDown = !showDropDown">{{seller ? seller.name: 'Search Seller'}}</div>
                    <div class="w-full mt-4" v-if="showDropDown">
                        <div class="w-full mb-2" v-if="!seller"><input type="text" v-model="searchSeller" placeholder="search seller"  class="w-full py-4 pl-3 border-2 rounded focus:border-blue-700 border-blue-500" v-on:keyup.space="debounceInput" /></div>
                        <ul v-if="searchSeller && showDropDown" >
                            <li class="w-full py-4 text-blue-900 hover:bg-blue-300 hover:text-white cursor-pointer" v-for="(seller, key) in sellers" :key="key" @click="setUser(seller)">{{seller.name}}</li>
                        </ul>
                    </div>
                </div>

                <button type="submit" class=" mt-4 rounded-xl w-full py-4 pl-3 bg-blue-500 text-white">Save Transaction</button>
            </div>
            <div>
            </div>
        </form>
    </div>
</template>

<script>
import debounce from 'debounce'
    export default {
        data(){
            return {
                showDropDown: false,
                searchSeller: '',
                date: '',
                weight: '',
                price: '',
                quantity: '',
                seller: '',
                sellers: [],
            }
        },
        methods: {
            addNew(){
                const transactionDetails = {date: this.date, weight: +this.weight, price: +this.price, quantity: +this.quantity, seller: this.seller._id}
                return this.$axios.$post('/transaction', transactionDetails).then(res=> {
                 this.$router.push('/transactions');
                }).catch(error=> {
                    this.$store.commit('setError', error.response.message);
                }).finally(()=>{
                    this.$store.commit('setLoading', false);
                })
            },
            getSellers(filter){
                this.$store.commit('setLoading', true);
                const param = filter.toUpperCase();
                this.$axios.$get(`/seller?name=${param}`).then(res => {
                    this.sellers = res;
                }).catch(error=> {
                    this.$store.commit('setError', error.response.message);
                }).finally(()=>{
                    this.$store.commit('setLoading', false);
                })
            },
            setUser(user){
                this.seller = user;
                this.showDropDown = false;
            },
            debounceInput: debounce(function (e) {
                this.getSellers(e.target.value)
            }, 300)
        }
    }
</script>, 