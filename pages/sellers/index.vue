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
      :data="vendors"
      :link="link"
      :count="count"
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
                
            ],
             vendors: [],
            page: 1,
            count: 0
        };
    },
    methods: {
        getVendors(page) {
            this.$axios.get(`http://localhost:3000/seller?page=${page}`).then(res => {
                this.vendors = res.data.sellers;
                this.count = res.data.total
            });
        }
    },
    mounted() {
        this.getVendors('1');
    },
}
</script>
