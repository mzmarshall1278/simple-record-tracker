<template>
    <div>
        <div class="text-5xl font-black text-blue-500 text-center mt-12">Add New Transactions</div>
        <form @submit.prevent="addNew">
            <div class="lg:w-2/5 text-center mx-auto py-6 px-8 mt-4 bg-blue-50 rounded-xl">
                <div class="mt-8">
                <input name="name" type="date" v-model="date" class="w-full py-4  px-6 pl-3 border-3 border-blue-500 text-gray-400">
                </div>
                <div class="mt-8">
                    <input placeholder="Weight" name="name" v-model="weight" type="number" class="w-full py-4 pl-3 border-3 border-blue-500">
                </div>
                <div class="mt-8">
                    <input placeholder="price" name="name" v-model="price" type="number" class="w-full py-4 pl-3 border-3 border-blue-500"/>
                </div>
                <div class="mt-8">
                    <input placeholder="Quantity" name="name" v-model="quantity" type="number" class="w-full py-4 pl-3 border-3 border-blue-500"/>
                </div>
                <div class="mt-8 w-full">
                    <div class="bg-blue-500 py-4 cursor-pointer text-white" @click="showDropDown = true">Search Seller</div>
                    <ul class="w-full mt-4" v-if="showDropDown">
                        <li class="w-full mb-2"><input type="text" placeholder="search seller"  class="w-full py-4 pl-3 border-3 border-blue-500" @input="debounceInput" /></li>
                        <li class="w-full py-4 text-blue-900 hover:bg-blue-300 hover:text-white cursor-pointer" v-for="(seller, key) in sellers" :key="key">{{seller.name}}</li>
                    </ul>
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
                date: '',
                weight: '',
                price: '',
                quantity: '',
                seller: '',
                sellers: [
                    {name: "Aminu Ali Bala"},
                    {name: "Aisha Habibu"},
                    {name: "Nura Anas"},
                    {name: "Garba Tanko"},
                    {name: "Sani Bello"}
                ]
            }
        },
        methods: {
            addNew(){
                const transactionDetails = {date: this.date, weight: +this.weight, price: +this.price, quantity: +this.quantity, seller: this.seller}
                console.log(transactionDetails);
            },
            debounceInput(){
                debounce(getSellers)
            }
        }
    }
</script>, 