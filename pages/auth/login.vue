<template>
    <div>
        <div class="w-full text-center text-blue-500 font-black text-4xl mt-6">login</div>

        <div class="bg-blue-100 w-1/3 mx-auto p-16 mt-24 rounded-xl">
        <form @submit.prevent="login">
            <div class="">
                <input placeholder="Username" name="username" minlength="4" :required="true" v-model="username" type="text" class="rounded-xl w-full py-4 pl-3 border-3 border-blue-500 text-blue-500">
            </div>
            <div class="mt-8">
                <input placeholder="Password" name="username" minlength="4" :required="true" v-model="password" type="password" class=" rounded-xl w-full py-4 pl-3 border-3 border-blue-500 text-blue-500">
            </div>
            <button type="submit" class=" hover:bg-white hover:text-blue-500 mt-8 rounded-xl w-full py-4 pl-3 bg-blue-500 text-white">Login</button>
        </form>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login(){
                console.log(this.username, this.password);
            }
        }
    }
</script>