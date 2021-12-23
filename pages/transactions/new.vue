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
                <!-- <div class="mt-8">
                    <button>Search Seller</button>
                </div> -->
            </div>
            <div>
                <button type="submit">Save Transaction</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                date: '',
                weight: '',
                price: '',
                quantity: '',
                seller: ''
            }
        },
        methods: {
            addNew(){
                const transactionDetails = {date: this.date, weight: +this.weight, price: +this.price, quantity: +this.quantity, seller: this.seller}
                console.log(transactionDetails);
            }
        }
    }
</script>, 