<template>
  <div>
      <div class="w-full text-center mt-4"> 
          <nuxt-link to="/sellers/new">
            <div class="w-1/2 mx-auto py-5 rounded-full text-2xl font-bold bg-blue-500 text-white">Add Vendor</div>
          </nuxt-link>
      </div>
    <div class="text-5xl font-black text-blue-500 text-center mt-12">Vendors</div>
    <div class="w-10/12 mx-auto">
      <AppTable
      :columns="columns"
      :link="link"
      url="/seller"
    />
    </div> 
  </div>
</template>

<script>
export default {
    data() {
        return {
            link: {path: 'sellers/', id: 'phone', append: true},
            columns: [
                {value: 'name', label: 'Name'},
                {value: 'address', label: 'Address'},
                {value: 'LGA', label: 'LGA'},
                {value: 'phone', label: 'Phone Number'},
                {value: 'status', label: 'Status'},
                {value: 'deal', label: 'Deal'},
                {value: 'dateJoined', label: 'Date Joined'},
                
            ]
        };
    }
}
</script>
