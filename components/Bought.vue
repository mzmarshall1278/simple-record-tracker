<template>
    <div class="rounded-xl shadow-xl shadow lg:w-5/12 py-8 border-t">
        <div>
            <h1 class="text-center font-semibold py-4 text-7xl text-blue-400">Bought</h1>
            <div class="pt-5 px-8 text-xl font-semibold text-green-900 w-4/5 mx-auto ">
                <div class="flex justify-between">
                <h1>Quantity</h1>-
                <h1>976</h1>
            </div>
            <div class="flex justify-between">
                <h1>Net Weight</h1>-
                <h1>988Kg</h1>
            </div>
            <div class="flex justify-between">
                <h1>Vendors</h1>-
                <h1>701 vendors</h1>
            </div>
            <div class="flex justify-between">
                <h1>Tonne</h1>-
                <h1>0.888</h1>
            </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'In Stock'
        }
    },
    data(){
        return {

        }
    },
}
</script>
