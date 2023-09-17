<!-- <template>
  <div class="carousel">
    <div v-for="(item, index) in items" :key="index" class="carousel-item">
      <img :src="item.img" alt="Carousel Item" />
    </div>
  </div>
</template>
  
<script setup>
import { reactive } from 'vue';
import { mainData } from '../data.js';

const items = reactive(mainData.carousel);
</script>
  
  <style scoped>
  .carousel {
  display: flex;
  width: 100%;
}

.carousel-item {
  flex: 0 0 100%;
  transition: transform 0.5s;
}

.carousel-item img {
  width: 100%;
  height: auto;
}
  </style> -->











  <!-- <template>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div v-for="(item, index) in carouselItems" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
          <img :src="item.src" class="d-block w-100" :alt="'Image ' + (index + 1)">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" @click="prevSlide">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" @click="nextSlide">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script setup>

  import {ref} from 'vue';
  const carouselItems = [
    { src: '/src/assets/img/apartament1.jpg' },
    { src: '/src/assets/img/apartment3.jpg' },
    { src: '/src/assets/img/apartment2.jpg' }
  ];
  
  const currentIndex = ref(0);
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % carouselItems.length;
  };
  
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + carouselItems.length) % carouselItems.length;
  };
  </script>


<style scoped>
</style> -->








<!-- <template>
  <div class="carousel">
    <div :style="{ transform: `translateX(-${currentIndex * 100}%)` }" class="carousel-inner">
      <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item">
        <img :src="item.src"  class="d-block w-100" alt="Carousel Item" />
      </div>
    </div>
    <button @click="prevSlide" class="carousel-control-prev">&lt;</button>
    <button @click="nextSlide" class="carousel-control-next">&gt;</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const carouselItems = [
  { src: '/src/assets/img/apartament1.jpg' },
  { src: '/src/assets/img/apartment2.jpg' },
  { src: '/src/assets/img/apartment3.jpg' }
];

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselItems.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + carouselItems.length) % carouselItems.length;
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s;
}

.carousel-item {
  flex: 0 0 100%;
}

.carousel-item img {
  width: 100%;
  height: auto;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}
</style> -->










<template>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div 
        v-for="(item, index) in carouselItems" 
        :key="index" 
        :class="['carousel-item', { 'active': index === currentIndex }]">
        <img 
          :src="item.src" 
          class="d-block w-100" 
          :alt="'Image ' + (index + 1)"
          style=" object-fit: cover;">
      </div>
    </div>
    <button class="carousel-control-prev btn" type="button" @click="prevSlide">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next btn" type="button" @click="nextSlide">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const carouselItems = [
  { src: '/src/assets/img/apartament1.jpg' },
  { src: '/src/assets/img/apartment3.jpg' },
  { src: '/src/assets/img/apartment2.jpg' }
];

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselItems.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + carouselItems.length) % carouselItems.length;
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s;
}

.carousel-item {
  flex: 0 0 100%;
}

.carousel-item img {
  width: 100%;
  height: 100vh;

}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

@media (max-width: 767px) {
  /* Применяем стили для мобильной версии (ширина экрана менее 768px) */
  .carousel-inner img {
    width: 100%;
    height: 400px;
  }
}


</style> 

