<template>
  <div>
    <div class="text-5xl font-black text-blue-500 text-center mt-12">Vendors</div>
    <div class="w-10/12 mx-auto">
      <AppTable
      :columns="columns"
      :data="vendors"
    />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
          columns: [
            {value: 'name', label: 'Name'},
            {value: 'address', label: 'Address'},
            {value: 'LGA', label: 'LGA'},
            {value: 'phone', label: 'Phone Number'},
            {value: 'deal', label: 'Deal'},
          ],
          vendors: [],
            page: 1,
        };
    },
    methods: {
        getVendors(page) {
            axios.get(`http://localhost:3000/vendors?page=${page}&`).then(res => {
                this.vendors = res.data
            });
        }
    },
    mounted() {
        this.getVendors('1');
    },
}
</script>
