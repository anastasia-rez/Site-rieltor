<!-- <script setup>
    import { ref, onMounted } from 'vue';


    const options = {
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>',
    ],
};

const carouselRef = ref(null);

onMounted(() => {
  // Инициализируйте карусель после монтажа компонента
  const $carousel = $(carouselRef.value);
  $carousel.owlCarousel(options);
});


</script>

<template>
    <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">Шукайте <span class="text-primary">ідеальне житло </span> своєї мрії</h1>
                    <p class="animated fadeIn mb-4 pb-2">Наші професіонали допоможуть Вам у будь-якому питанні!</p>
                    <a href="" class="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <div class="owl-carousel header-carousel">
                        <div class="owl-carousel-item">
                            <img class="img-fluid" src="../assets/img/apartament1.jpg" alt="">
                        </div>
                        <div class="owl-carousel-item">
                            <img class="img-fluid" src="../assets/img/apartment2.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template> -->




<!-- 
<script setup>

import Carousel from './Carousel.vue';
import { reactive } from 'vue';
import { mainData } from '../data.js';



const carouselItemsData = reactive(mainData.carousel);

</script>


<template>
  <div class="container-fluid header bg-white p-0">
    <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
      <div class="col-md-6 p-5 mt-lg-5">
        <h1 class="display-5 animated fadeIn mb-4">Шукайте <span class="text-primary">ідеальне житло </span> своєї мрії</h1>
                    <p class="animated fadeIn mb-4 pb-2">Наші професіонали допоможуть Вам у будь-якому питанні!</p>
                    <a href="" class="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
      </div>
      <div class="col-md-6 animated fadeIn">
        <Carousel :items="carouselItemsData" />
      </div>
    </div>
  </div>
</template> -->



<template>
  <div class="container-fluid header bg-white p-0 ">
    <div class="row g-0 align-items-center  flex-column-reverse flex-md-row">
      <div class="col-md-6 p-5 mt-lg-5">
        <h1 class="display-5 animated fadeIn mb-4">Шукайте <span class="text-primary">ідеальне житло </span> своєї мрії</h1>
        <p class="animated fadeIn mb-4 pb-2">Наші професіонали допоможуть Вам у будь-якому питанні!</p>
        <a href="" class="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
      </div>
      <div class="col-md-6 animated fadeIn">
        <Carousel /> <!-- Вставляем компонент Carousel.vue -->
      </div>
    </div>
  </div>
</template>

<script setup>
import Carousel from './Carousel.vue'; // Импортируем компонент Carousel
</script>
