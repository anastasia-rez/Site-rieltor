<template>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        :class="['carousel-item', { 'active': index === currentIndex }]"
      >
        <img
          :src="item.src"
          class="d-block w-100"
          :alt="'Image ' + (index + 1)"
          style=" object-fit: cover; opacity: 1; transition: opacity 1s;"
        />
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
import { ref, defineProps, onMounted, onUnmounted } from 'vue';

const { carouselItems } = defineProps(['carouselItems']);

const currentIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselItems.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + carouselItems.length) % carouselItems.length;
};

// Функция для автоматической смены слайдов каждые 5 секунд
const startAutoSlide = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, 3000); // Интервал в миллисекундах (5 секунд)
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>



<style scoped>
.carousel {
  overflow: hidden;
  position: absolute; 
  top: 0; 
  right: 0; 
  height: 100%;
}

.carousel-inner img {
    width: 100%; 
  height: 700px;
  object-fit: contain;
  opacity: 1;
  transition: opacity 1s;
}

.carousel-inner {
  display: flex;
  transition: transform 0.1s ease-in-out;
  overflow: hidden;
  height: 100%;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
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
  background: rgb(49, 49, 181);
  opacity:60%;
}

.btn:hover {
  opacity: 90%;
}


@media (max-width: 767px) {

  .carousel {
    width: 100%; 
    max-height: 450px;
  }

  .carousel-inner img {
  height: 450px;
  max-height: none; 
  object-fit: contain;
  }

}


</style>