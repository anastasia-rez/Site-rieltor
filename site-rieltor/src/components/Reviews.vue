<template>
  <div id="reviews" class="testimonial-container">
    <div class="testimonial-carousel">
      <div id="testimonial-carousel" class="carousel slide">
        <div class="carousel-inner">
          <div
            v-for="(review, index) in totalReviews"
            :key="index"
            :class="['carousel-item', index === activeIndex ? 'active' : '']"
          >
            <div class="d-flex flex-column flex-md-row gap-4 m-auto justify-content-evenly">
              <div class="testimonial-item rounded p-3 mx-4 ">
                <div class="card rounded p-4 bg-light fixed-card-height">
                  <p class="flex-grow-1 review-text">{{ review.review }}</p>
                  <div class="d-flex align-items-center">
                    <img class="img-fluid flex-shrink-0 rounded" :src="review.img" alt="" style="width: 45px; height: 45px;">
                    <div class="ps-3">
                      <h6 class="fw-cold mb-1">{{ review.name }}</h6>
                      <small>{{ review.service }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev btn" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev" @click="prevReview">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next btn" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next" @click="nextReview">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, onUnmounted } from 'vue';

const props = defineProps(['reviews']);

const totalReviews = props.reviews;
const activeIndex = ref(0);

const isMobile = ref(window.innerWidth <= 767);

const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 767;
};

const nextReview = () => {
  if (activeIndex.value < totalReviews.length - 1) {
    activeIndex.value++;
  }
};

const prevReview = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
  }
};

onMounted(() => {
  window.addEventListener('resize', checkIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkIsMobile);
});
</script>

<style scoped>


.fixed-card-height {
  width: 450px;
  height: 280px;
  border: 2px dotted rgb(43, 43, 164);
  margin: auto;
}
.btn {
  background-color: rgb(68, 68, 205);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  color: white;
  opacity: 70%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.btn:hover {
  background-color: rgb(68, 68, 205);
  opacity: 100%;
  transition: 0.5s;
}

.testimonial-item {
  background-color: rgba(131, 131, 198, 0.5);
}


@media (max-width: 767px) {
  .fixed-card-height {
    height: 300px;
    width: 90%;
  }
  .carousel-inner .carousel-item {
    display: none; 
  }
  .carousel-inner .carousel-item.active {
    display: block;
    
  }

  .review-text {
    overflow-y: auto;
  }
}
</style>
