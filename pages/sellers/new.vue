<template>
    <div>
        <div class="text-5xl font-black text-blue-500 text-center mt-12">Add New Vendor</div>
        <form @submit.prevent="addNew" class="text-blue-900">
            <div class="lg:w-2/5 mx-auto py-6 px-8 mt-4  bg-blue-50 rounded-xl">
                <div class="mt-8">
                <input name="name"  placeholder="Name" required="true" v-model="name" type="text" class="w-full py-4  px-6 pl-3 border-3">
                </div>
                <div class="mt-8">
                    <textarea placeholder="Address" required="true" v-model="address" type="text" class="w-full py-4 pl-3 border-3  "></textarea>
                </div>
                <div class="mt-8">

                    <label for="lga" class="text-left">Local Government Area</label>
                    <select name="lga" id="" required="true" class="w-full py-4 pl-3 border-3 mt-2 bg-white">
                        <option v-for="(lga, key) in lgaOptions" :key="key" :value="lga.value" class="w-full py-4 pl-3">{{lga.text}}</option>
                    </select>
                </div>
                <div class="mt-8">
                    <input placeholder="Phone" required="true"  v-model="phone" type="text" class="w-full py-4 pl-3 border-3  "/>
                </div>
                <div class="mt-8">
                    <input placeholder="Deal" min="0" max="2" required="true" v-model="deal" type="number" class="w-full py-4 pl-3 border-3  "/>
                </div>
                <div class="mt-8">
                    <label for="status" class="text-left">STATUS</label>
                    <select name="status" id="" required="true" class="w-full py-4 pl-3 border-3 mt-2 bg-white">
                        <option v-for="(lga, key) in lgaOptions" :key="key" :value="lga.value" class="w-full py-4 pl-3">{{lga.text}}</option>
                    </select>
                </div>
                <button type="submit" class=" mt-4 rounded-xl w-full py-4 pl-3 bg-blue-500 text-white">Save Seller</button>

            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: '',
                address: '',
                LGA: '',
                phone: '',
                deal: 1,
                lgaOptions: [
                    {text: 'Gwale', value: 'GWALE'},
                    {text: 'Dala', value: 'DALA'},
                    {text: 'Kumbotso', value: 'KUMBOTSO'},
                    {text: 'KMC', value: 'KMC'},
                    {text: 'Nassarawa', value: 'NASSARAWA'},
                    {text: 'Fagge', value: 'FAGGE'},
                    {text: 'Gwarzo', value: 'GWARZO'},
                    {text: 'Gaya', value: 'GAYA'},
                    {text: 'RANO', value: 'RANO'},
                    {text: 'Tarauni', value: 'TARAUNI'},
                    {text: 'Wudil', value: 'WUDIL'},
                ]
            }
        },
        methods: {
            addNew(){
                const seller = { name: this.name.toUpperCase(), adrress: this.address, LGA : this.LGA, phone : this.phone, deal: this.deal};
                return this.$axios.$post('http://localhost:3000/seller', seller).then(res=> {
                    console.log(res);
                    this.name = ''; this.address = ''; this.LGA = ''; this.phone = ''; this.deal = 0
                })

            }
        }
    }
</script>