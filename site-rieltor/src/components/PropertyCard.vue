  <!-- <script setup>

const props = defineProps(['propertyCard']);

</script>



<template>

  <div id="property" class="col-lg-4 col-md-6 wow fadeInUp mb-3" data-wow-delay="0.1s">

    <div class="property-item rounded overflow-hidden ">
      <div class="position-relative overflow-hidden">
        <a href=""><img class="img-fluid" :src="propertyCard.img" alt="" style="max-height: 278px; width: 100%;"></a>
      <div class="type rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{{propertyCard.type}}</div>

      <div class="bg-white rounded-top text position-absolute start-0 bottom-0 mx-4 pt-1 px-3 fw-semibold">{{ propertyCard.type2 }}</div>
      </div>

      <div class="p-4 pb-0" style="height: 170px;">
        <h5 class="text mb-3">{{propertyCard.price}}</h5>
        <a class="d-block h5 mb-2 " href="">{{ propertyCard.description }}</a>
        <p><i class="fa fa-map-marker-alt text me-2"></i>{{ propertyCard.location }}</p>
      </div>

      <div class="d-flex border-top" >
          <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text me-2"></i>{{ propertyCard.area }}</small>
          <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text me-2"></i>{{propertyCard.rooms}}</small>
          <small class="flex-fill text-center py-2"><i class="fa fa-bath text me-2"></i>{{propertyCard.bathroom}}</small>
      </div>
    </div>
  </div>

</template> -->

 






<template>
  <div id="property" class="col-lg-4 col-md-6 wow fadeInUp mb-3" data-wow-delay="0.1s">
    <div class="property-item rounded overflow-hidden">
      <div class="position-relative overflow-hidden">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div
              v-for="(photo, index) in propertyCard.photos"
              :key="index"
              :class="['carousel-item', { active: index === currentIndex }]"
            >
              <img :src="photo" class="d-block w-100" :alt="'Image ' + (index + 1)" style="max-height: 278px; width: 100%;" />
            </div>
            <div class="type rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{{ propertyCard.type }}</div>
            <div class="bg-white rounded-top text position-absolute start-0 bottom-0 mx-4 pt-1 px-3 fw-semibold">{{ propertyCard.type2 }}</div>
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
      </div>
      <!-- Переместите этот блок с контентом внутрь блока карусели -->
      
      <div class="p-4 pb-0" style="height: 170px;">
        <h5 class="text mb-3">{{propertyCard.price}}</h5>
        <a class="d-block h5 mb-2 " href="">{{ propertyCard.description }}</a>
        <p><i class="fa fa-map-marker-alt text me-2"></i>{{ propertyCard.location }}</p>
      </div>
      <div class="d-flex border-top" >
        <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text me-2"></i>{{ propertyCard.area }}</small>
        <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text me-2"></i>{{propertyCard.rooms}}</small>
        <small class="flex-fill text-center py-2"><i class="fa fa-bath text me-2"></i>{{propertyCard.bathroom}}</small>
      </div>
    </div>
  </div>
</template>



<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps(['propertyCard']);
const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.propertyCard.photos.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.propertyCard.photos.length) % props.propertyCard.photos.length;
};
</script>


<style scoped>
.type{
  background-color: rgb(68, 68, 205);
}

.text {
  color: rgb(68, 68, 205);
}

.btn{
  background-color: rgb(68, 68, 205);
  height: 50px;
  top: 50%
}


.property-item {
    box-shadow: 0 0 30px rgba(0, 0, 0, .3);
  height: 500px;
}

.property-item img {
    transition: .5s;
}

.property-item:hover img {
    transform: scale(1.1);
}

.property-item .border-top {
    border-top: 1px dashed rgba(0, 185, 142, .3) !important;
}

.property-item .border-end {
    border-right: 1px dashed rgba(0, 185, 142, .3) !important;
}

a {
  text-decoration: none;
}
</style> 