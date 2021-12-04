<template>
    <div class="mb-24">
        <table class="w-full">
            <thead>
                <tr>
                <th v-for="(col, key) in columns" :key="key">{{col.label}}</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(row,key) in data" :key="key">
                <td v-for="(item, key) in columns" :key="key">{{row[item.value]}}</td>
            </tr>
            </tbody>
        </table>
        <div class="flex w-auto mx-auto ">
            <button class="bg-blue-100 text-blue-800 py-4 px-8 rounded-lg mx-4 hover:bg-blue-500 hover:text-white"> &lt;</button>
            <button class="bg-blue-100 text-blue-800 py-4 px-8 rounded-lg mx-4 hover:bg-blue-500 hover:text-white" v-for="(page, index) in pages" :key="index">{{index+1}}</button>
            <button class="bg-blue-100 text-blue-800 py-4 px-8 rounded-lg mx-4 hover:bg-blue-500 hover:text-white">&gt;</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        columns: {
            type: Array
        },
        data: {
            type: Array
        },
        objectCount: {
            type: Number,
            default: 28
        }
    },
    data() {
        return {
            page: 1
        }
    },
    computed: {
        pages(){
            return Math.ceil(this.objectCount/10);
        }
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