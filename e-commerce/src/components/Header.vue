<script setup>
import {ref} from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
</script>

<template>
    <header class="sticky top-0 z-50 transition-all duration-300">
        <section :class="['w-full',isScrolled ? ' bg-gray-100/95 backdrop-blur shadow-md py-2' : 'bg-gray-100 py-4']">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
                    <!-- logo menu toogle -->
                     <div class="flex justify-between items-center w-full md:w-auto">
                        <a href="" class="text-2xl font-bold text-pink-600"> ShopEase</a>
                        <button class="md:hidden text-gray-700 hover:text-indigo-600" 
                            aria-label="Toogle mobile menu"
                            @click="isMobileMenuOpen = !isMobileMenuOpen"
                            >
                            <Icon icon="mdi:menu" class="w-6 h-6"/>
                        </button>
                     </div>
                     <!-- search bar -->
                      <form class="w-full md:flex-1 max-w-sm" role="search" aria-label="Site search">
                        <label class="realtive w-full">
                            <input type="text" placeholder="search..." class="w-full px-3 py-2 text-sx border border-gray-300 rounded-full
                            focus:outline-none focus:ring focus:ring-indigo-500">
                        </label>
                        <button class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600" aria-label="search button">
                            <Icon icon="mdi:magnify" class="w-4 h-4"/>

                        </button>
                      </form>
                      <aside class="flex items-center justify-end space-x-4 w-full md:w-auto">
                        <button class="relative p-2 text-gray-700 hover:text-pink-600" aria-label="Wishlist">
                            <Icon icon="mdi:cart-outline" class="w-5 h-5"/>
                            <span class="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5
                            flex items-center justify-center">5</span>
                        </button>
                        <button class="relative p-2 text-gray-700 hover:text-pink-600" aria-label="Wishlist">
                            <Icon icon="mdi:heart-outline" class="w-5 h-5"/>
                            <span class="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5
                            flex items-center justify-center">3</span>
                        </button>
                      </aside>
                </div>
            </div>
        </section>
        <!-- Navbar -->
         <nav class="bg-pink-950" aria-label0="Main navigation">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul class="hidden md:flex justify-center py-3  flex-wrap gap-x-6 text-sm front-medium text-white">
                    <li v-for="item in navItems" :key="item.id">
                        <a :href="item.link" class="hover:text-pink-300 transition-colors">{{item.name}}</a>
                    </li>
                </ul>
            </div>
         </nav>
    </header>
</template>