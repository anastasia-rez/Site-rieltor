<template>
  <div id="reviews" class="testimonial-container">
    <div class="testimonial-carousel">
      <div id="testimonial-carousel" class="carousel slide">
        <div class="carousel-inner">
          <div
            v-for="(reviewGroup, groupIndex) in totalReviewsGrouped"
            :key="groupIndex"
            :class="['carousel-item', groupIndex === activeIndex ? 'active' : '']"
          >
            <div class="d-flex gap-1 m-auto">
              <div
                class="col-md-6"
                v-for="(review, index) in reviewGroup"
                :key="index"
              >
                <div class="testimonial-item rounded p-3  m-auto">
                  <div class="card rounded p-4 bg-light fixed-card-height">
                    <p class="flex-grow-1 review-text">{{ review.review }}</p>
                    <div class="d-flex align-items-center">
                      <img
                        class="img-fluid flex-shrink-0 rounded"
                        :src="review.img"
                        alt=""
                        style="width: 45px; height: 45px;"
                      />
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
import { defineProps, ref, onMounted, computed } from 'vue';

const props = defineProps(['reviews']);

const activeIndex = ref(0);

const totalReviewsGrouped = computed(() => {
  if (window.innerWidth <= 767) {
    return props.reviews.map((review) => [review]);
  } else {
    const groupedReviews = [];
    for (let i = 0; i < props.reviews.length; i += 2) {
      groupedReviews.push(props.reviews.slice(i, i + 2));
    }
    return groupedReviews;
  }
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
    width: 85%;
    background-color: rgb(68, 68, 205, 0.5);
  }

  @media (max-width: 767px) {
    .fixed-card-height {
      height: 300px;
      width: 90%;
    }

    .review-text {
      overflow-y: auto;
    }
  }
</style>