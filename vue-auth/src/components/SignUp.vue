<script setup>

</script>

<template>
    <form action="" class="container mx-auto flex flex-col justify-center  border rounded-md p-4 shadow-lg w-[400px] mt-10">
        <h3 class="text-center text-2xl font-bold">Sign Up</h3>
        <div class="flex flex-col p-2">
            <label for="name">Name</label>
            <input class="border rounded-xl p-2 m-2" name="name" type="text" placeholder="name">
        </div>
        <div class="flex flex-col p-2">
            <label for="lastname">lastname</label>
            <input class="border rounded-xl p-2 m-2" name="lastname" type="text" placeholder="lastname">
        </div>
        <div class="flex flex-col p-2">
            <label for="email">Email</label>
            <input class="border rounded-xl p-2 m-2" name="email" type="email" placeholder="email">
        </div>
        <div class="flex flex-col p-2">
            <label for="password">Password</label>
            <input class="border rounded-xl p-2 m-2" name="password" type="password" placeholder="Password">
        </div>
        <div class="flex flex-col p-2">
            <label for="password">Confirm Password</label>
            <input class="border rounded-xl p-2 m-2" name="password" type="password" placeholder="Confirm Password">
        </div>
        <div class="flex justify-center">
            <button class="bg-blue-500 cursor-pointer text-white hover:text-black hover:bg-blue-100 hover:shadow-lg transition-all duration-300 ease-in-out hover:font-bold rounded-xl p-2 m-2 w-[120px]" type="submit">
                Login
            </button>
        </div>
    </form>
</template>