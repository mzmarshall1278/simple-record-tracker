<template>
    <div class="w-full bg-blue-900 py-2 px-12 font-normal">
        <nav class="flex justify-between">
            <h1 class="text-white text-3xl w-1/4">Simple<span class="text-blue-400 font-black">ERP</span></h1>
            <div class="w-2/4 mx-auto">
                <ul class="flex justify-between mr-12 text-white text-lg mt-2 p-4">
                    <li><router-link class="hover:bg-white hover:text-blue-400 py-4 px-6 rounded-lg" to="/">Home</router-link></li>
                    <li><router-link class="hover:bg-white hover:text-blue-400 py-4 px-6 rounded-lg" to="/transactions">Transactions</router-link></li>
                    <li><router-link class="hover:bg-white hover:text-blue-400 py-4 px-6 rounded-lg" to="/sellers">Sellers</router-link></li>
                    <!-- <li>stock</li> -->
                </ul>
            </div>
        </nav>
    </div>
</template>
