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
                    <button class="p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors" aria-label="Previous slide">
                        <Icon icon="line-md:arrow-small-left" width="24" height="24" />
                    </button>
                    <button class="p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors" aria-label="Next slide">
                        <Icon icon="line-md:arrow-small-right" width="24" height="24" />
                    </button>
                </nav>
            </header>
            <section class="relative overflow-hidden">
                <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:-grid-cols-4 gap-6">
                    <li class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105"></li>
                </ul>
            </section>
        </main>
    </section>
</template>