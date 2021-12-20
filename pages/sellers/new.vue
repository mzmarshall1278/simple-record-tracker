<template>
    <div>
        <div class="text-5xl font-black text-blue-500 text-center mt-12">Add New Vendor</div>
        <form @submit.prevent="addNew">
            <div class="w-2/5 text-center mx-auto py-6 px-8 mt-4">
                <div class="mt-8">
                <input placeholder="Full Name" name="name" type="text" class="w-full py-4 pl-3 border-3 border-blue-500">
                </div>
                <div class="mt-8">
                    <input placeholder="Phone Number" name="name" type="text" class="w-full py-4 pl-3 border-3 border-blue-500">
                </div>
                <div class="mt-8">
                    <textarea placeholder="Address" name="name" type="text" class="w-full py-4 pl-3 border-3 border-blue-500"></textarea>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            addNew(){

            }
        }
    }
</script>