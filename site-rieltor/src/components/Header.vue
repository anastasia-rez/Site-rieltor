 <script setup>
import Carousel from './Carousel.vue';
</script>


<template>
  <div class="container-fluid header bg-white p-0" >
    <div class="row g-0 align-items-center  flex-column-reverse flex-md-row">
      <div class="col-md-6 p-5 mt-lg-5">
        <h1 class="display-5 animated fadeIn mb-4 fw-bold">Шукайте <span class="text-primary">ідеальне житло </span> своєї мрії</h1>
        <p class="animated fadeIn mb-4 pb-2">Наші професіонали допоможуть Вам у будь-якому питанні!</p>
        <a href="" class="btn btn-primary py-3 px-5 me-3 animated fadeIn">Наш телеграм канал</a>
      </div>
      <div class="col-md-6 animated fadeIn carousel-container">
        <Carousel /> 
      </div>
    </div>
  </div>
</template> 

<style scoped>
.header {
  position: relative;
  background-color: transparent;
  padding: 0;
}

.carousel-container {
  position: relative;
  height: calc(100vh - 45px); 
  margin-top: -95px;
}

@media (max-width: 767px) {
  /* Применяем стили для мобильной версии (ширина экрана менее 768px) */
  .carousel-container {
  height: 500px;
  margin: 0;
  object-fit: contain;
}
}
</style>