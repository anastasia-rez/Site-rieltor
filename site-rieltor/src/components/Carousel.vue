<script setup>
import { ref } from 'vue';

const carouselItems = [
  { src: '/src/assets/img/carousel-1.jpg' },
  { src: '/src/assets/img/carousel-2.jpg' },
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
          style=" object-fit: cover; opacity: 1; transition: opacity 1s;">
      </div>
    </div>
    <button class="carousel-control-prev btn" type="button" @click="prevSlide"  > 
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next btn" type="button" @click="nextSlide"> 
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>



<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.1s ease-in-out;
  overflow: hidden;
  /* width: 100%; */
}


.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  /* transform: translateY(-50%); */
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


.btn {
    transition: .3s;
    width: 60px;
    height: 60px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    border-radius: 50px;
    background: rgb(68, 68, 205);
    opacity:60%;
}

.btn:hover {
  opacity: 90%;
}


@media (max-width: 767px) {
  /* Применяем стили для мобильной версии (ширина экрана менее 768px) */
  .carousel-inner img {
    width: 100%;
    height: 400px;
  }
}


</style> 

