<template>
    <div class="rounded border-2 lg:w-5/12">
        <div>
            <h1 class="text-center font-semibold py-4 text-7xl">In stock</h1>
            <div class="pt-5 px-8 text-xl font-semibold">
                <div class="flex justify-between">
                <h1>Quantity</h1>-
                <h1>354</h1>
            </div>
            <div class="flex justify-between">
                <h1>Net Weight</h1>-
                <h1>122Kg</h1>
            </div>
            <div class="flex justify-between">
                <h1>Vendors</h1>-
                <h1>173 vendors</h1>
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