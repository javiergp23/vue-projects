<script setup>
    import {ref, computed, onMounted, onBeforeUnmount} from 'vue'

    const currentSlide = ref(0)
    const productsPerPage = ref(4)

    const products = [
        {id:1, name:'Floral', price:99.99, rating:4.5, image:'../assets/product.png', discount:20},
        {id:2, name:'Oriental', price:199.99, rating:4.5, image:'../assets/product1.png', discount:20},
        {id:3, name:'Woody', price:99.99, rating:4.5, image:'../assets/product2.png', discount:20},
        {id:4, name:'Floral', price:99.99, rating:4.5, image:'../assets/product3.png', discount:20},
        {id:5, name:'Floral', price:99.99, rating:4.5, image:'../assets/product4.png', discount:20},
        {id:6, name:'Floral', price:99.99, rating:4.5, image:'../assets/product5.png', discount:20},
        {id:7, name:'Floral', price:99.99, rating:4.5, image:'../assets/product6.png', discount:20},
        {id:8, name:'Floral', price:99.99, rating:4.5, image:'../assets/product7.png', discount:20},
        {id:9, name:'Floral', price:99.99, rating:4.5, image:'../assets/product8.png', discount:20},
    ]

    const totalSlides = computed(() => {
        Math.ceil(products.length/productsPerPage.value)
    })

    const visibleProducts = computed(() => {
        const start = currentSlide.value * productsPerPage.value
        return products.slice(start, start+productsPerPage.value);
    })

    const nextSlice = () => {
        currentSlide.value = currentSlide.value === totalSlides.value -1 ? 0 : currentSlide.value +1;
    }

    const prevSlice = () => {
        currentSlide.value = currentSlide.value === totalSlides.value -1 ? 0 : currentSlide.value -1;
    }

    const handleResize = () => {
        if(window.innerWidth, 640){
            productsPerPage.value = 1;
        }else if(window.innerWidth < 768){
            productsPerPage.value = 2;
        }else if(window.innerWidth<1024){
            productsPerPage.value = 3;
        }else{
            productsPerPage.value = 4;
        }
    }

    onMounted(() => {
        handleResize();
        window.addeventListener('resize', handleResize);
    })

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
    })
</script>

<template>
    <section class="py-12 scroll-mt-20 bg-gray-50" id="products">
        <main class="container mx-auto px-4">
            <header class="flex justify-between items-center mb-8">
                <h2 class="md:text-3xl text-2xl font-bold text-amber-900">
                    Featured Products
                </h2>
                <nav class="flex space-x-4" aria-label="Product carousel controls">
                    <button @click="prevSlice" class="p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors" aria-label="Previous slide">
                        <Icon icon="line-md:arrow-small-left" width="24" height="24" />
                    </button>
                    <button @click="nextSlice" class="p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors" aria-label="Next slide">
                        <Icon icon="line-md:arrow-small-right" width="24" height="24" />
                    </button>
                </nav>
            </header>
            <section class="relative overflow-hidden">
                <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:-grid-cols-4 gap-6">
                    <li v-for="product in visibleProducts" :key="id" class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105">
                        <article>
                            <figure class="relative">
                                <img :src="product.image" :alt="product.name" class="w-full h64 object-cover">
                                <figcaption v-if="product.discount > 0" class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    -{{ product.discount }}%
                                </figcaption>
                                <button class="absolute top-3 left-3 p-2 bg-hite rounded-full shadow-md hover:bg-pink-100 text-gray-700" aria-label="Add to wishlist">
                                    <Icon icon="line-md:heart" width="18" height="18"/>
                                </button>
                            </figure>
                            <section class="p-4">
                                <div class="flex items-center mb-2">
                                    <Icon v-for="i in 5" :key="i" icon="line-md:star-alt-filled" width="16" :class="i <= Math.floor(product.rating) ? 'text-yellow-400': 'text-gray-300'"/>
                                    <span class="text-sm text-gray-500 ml-1">{{ product.rating}}</span>
                                </div>
                                <h3 class="text-lg font-semibold text-gray-800 bm-1">{{product.name}}</h3>
                                <footer class="flex items-center justify-between">
                                    <div>
                                        <span class="text-lg font-bold text-pink-600">
                                            ${{ (product.price * (1-product.discount/100)).toFixed(2) }}
                                        </span>
                                        <span v-if="product.discount > 0" class="text-sm text-gray-500 line-through ml-2">
                                            ${{product.price.toFixed(2)}}
                                        </span>
                                    </div>
                                    <button class="p-2 bg-pink-950 rounded-full"></button>
                                </footer>
                            </section>
                        </article>
                    </li>
                </ul>
            </section>
        
        </main>
    </section>
</template>