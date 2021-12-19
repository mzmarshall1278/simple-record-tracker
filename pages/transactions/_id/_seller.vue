<template>
  <div>
    <div class="text-5xl font-black text-blue-500 text-center mt-12">Transactions  for {{seller}}</div>
   
   
  </div>
</template>
<script>
    export default{
        computed: {
            seller(){
                return this.$route.params.seller
            }
        }
    }
</script>