<template>
    <div class="rounded-xl shadow-xl shadow py-8 border-t mb-12">
        <div>
            <h1 class="text-center font-semibold py-4 lg:text-7xl text-5xl text-green-400">{{title}}</h1>
            <div class="pt-5 lg:px-8 text-xl font-semibold text-green-900 w-4/5 mx-auto ">
                <div class="flex justify-between" v-for="(row, key) in rows" :key="key">
                    <h1>{{row.label}}</h1>-
                    <h1>{{row.value}}</h1>
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
        },
        title:{
            type: String,
            required: true
        },
        rows: {
            type: Array,
            required: true
        }
    },
    data(){
        return {

        }
    },
}
</script>
