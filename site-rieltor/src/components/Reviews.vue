
<!-- <template>
  <div id="rewievs" class="testimonial-container ">
    <div class="testimonial-carousel ">
      <div id="testimonial-carousel" class="carousel slide ">
        <div class="carousel-inner ">
          <div
            v-for="(group, groupIndex) in groupedReviews"
            :key="groupIndex"
            :class="['carousel-item', groupIndex === 0 ? 'active' : '']"
          >
            <div class="d-flex flex-column flex-md-row gap-4 m-auto justify-content-evenly">
              <div
                v-for="(review, index) in group"
                :key="index"
                class="testimonial-item rounded p-3 mx-4"
              >
                <div class="card rounded p-4 bg-light fixed-card-height">
                  <p class="flex-grow-1">{{ review.review }}</p>
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
        <button class="carousel-control-prev btn" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next btn" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps(['reviews']);

const totalReviews = props.reviews;

// Группировка отзывов по два в каждой группе
const groupedReviews = computed(() => {
  const groups = [];
  for (let i = 0; i < totalReviews.length; i += 2) {
    groups.push(totalReviews.slice(i, i + 2));
  }
  return groups;
});
</script>

<style scoped>
.fixed-card-height {
  width: 500px;
  height: 200px; /* Высота карточки на десктопе и мобильных устройствах */
  border: 2px dotted rgb(28, 92, 113);
  margin: auto;
}
.btn {
  background-color: rgb(34, 98, 98);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  color: white;
  opacity: 70%;
  position: absolute;
  top: 50%; /* Размещаем кнопки посередине высоты карточек */
  transform: translateY(-50%);
}

.btn:hover {
  background-color: rgb(68, 68, 205);
  opacity: 100%;
  transition: 0.5s;
}

.testimonial-item {
  background-color: rgba(112, 112, 197, 0.5);
}

@media (max-width: 767px) {
  .fixed-card-height {
    height: 280px; /* Автоматическая высота карточки на мобильных устройствах */
    width: 90%;
  }
}
</style> 

-->


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

// Создаем реактивную переменную isMobile
const isMobile = ref(window.innerWidth <= 767);

// Функция для определения, является ли текущее устройство мобильным
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

// Следим за изменением размера окна браузера
onMounted(() => {
  window.addEventListener('resize', checkIsMobile);
});

// Отключаем слежение при удалении компонента
onUnmounted(() => {
  window.removeEventListener('resize', checkIsMobile);
});
</script>

<style scoped>


.fixed-card-height {
  width: 450px;
  height: 280px; /* Высота карточки на десктопе и мобильных устройствах */
  /* max-height: 450px; */
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
  top: 50%; /* Размещаем кнопки посередине высоты карточек */
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
    height: 300px; /* Автоматическая высота карточки на мобильных устройствах */
    width: 90%;
  }
  .carousel-inner .carousel-item {
    display: none; /* Скрываем все элементы в мобильной версии */
  }
  .carousel-inner .carousel-item.active {
    display: block; /* Показываем только активный элемент */
    
  }

  .review-text {
    overflow-y: auto;
  }
}
</style>
