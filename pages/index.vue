<template>
  <div>
    <div class="text-5xl font-black text-blue-500 text-center mt-12">INVENTORY</div>
      <div class="w-10/12 mx-auto">
        <AppTable
        :columns="columns"
        url="/transaction?completed=false"
        />
    </div>
  </div>
</template>

<script>
export default { 
  middleware: 'auth',
  data(){
    return {
      columns: [
        {label: 'Vendor', value: 'seller', child: 'name'},
        {label: 'Weight', value: 'weight'},
        {label: 'Quantity', value: 'quantity'},
        {label: 'Price', value: 'price'},
      ],
    }
  }
}
</script>
