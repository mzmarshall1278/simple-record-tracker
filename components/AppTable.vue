<template>
    <table class="w-full bg-blue-100 mt-5">
        <tr class="">
            <th class="">
                <td v-for="(col, key) in columns" :key="key">{{col.label}}</td>
            </th>                    
        </tr>
        <tr v-for="(row,key) in data" :key="key">
            <tbody>
                <td v-for="(item, key) in columns" :key="key">{{row[item.value]}}</td>
            </tbody>
        </tr>
    </table>
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
    }

}
</script>
<style>
table tbody tr:nth-child(2n+1) {
    @apply bg-blue-50 
  }
  td {
      @apply text-center w-auto
  }
</style>