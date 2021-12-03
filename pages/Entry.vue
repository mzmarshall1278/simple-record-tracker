<template>
  <div>
    <div class="text-5xl font-black text-blue-500 text-center mt-12">Entry</div>
    <div class="w-10/12 mx-auto mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    <AppTable
    />
    </div>
  </div>
</template>

<script>
import AppTable from "~/components/AppTable.vue";
export default {
    data() {
        return {};
    },
    computed: {
        stock() {
            return this.$store.getters["stock/getStockDetails"];
        },
        pending() {
            return this.$store.getters["stock/getPendingDetails"];
        },
        free() {
            return this.$store.getters["stock/getFreeDetails"];
        }
    },
    components: { AppTable }
}
</script>
