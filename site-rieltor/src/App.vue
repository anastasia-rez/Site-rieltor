<script setup>

import {mainData} from './data.js'

import PropertyCard from './components/PropertyCard.vue';

import Navbar from './components/Navbar.vue';

import Header from './components/Header.vue';

import Search from './components/Search.vue';

import Category from './components/Category.vue';

import About from './components/About.vue';

import Action from './components/Action.vue';

import Team from './components/Team.vue';

import Reviews from './components/Reviews.vue';

const carouselItems = [
  { src: '/src/assets/img/carousel-1.jpg' },
  { src: '/src/assets/img/carousel-2.jpg' },
  { src: '/src/assets/img/apartment2.jpg' }
];

import Footer from './components/Footer.vue';

</script>

<template>

  <div class="container-main" id="app">

    <!-- <Hello v-for="item in mainData.products" :hello="item"></Hello> -->
    
    <div class="container pt-3 min-vh-100 d-flex flex-column bg-white p-0">
      <div style="position: sticky; top: 0; z-index: 1000;">
        <Navbar></Navbar>
      </div>
      <header>
        <Header :carouselItems="carouselItems" />
      </header>


      <main class="row flex-grow-1 mt-3">

        <Search></Search>

        <About></About>

        <!-- Property List Start -->

        <div class="container-xxl py-5">

          <div class="container">

            <div class="row g-0 gx-5 align-items-center">
              <div>
                <div class="text-center mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                  <h1 class="mb-3">Наші найкращі варіанти</h1>
                  <p>Оберіть варіант, який вам сподобався та зв'яжіться з нашими фахівцями</p>
                </div>
              </div>

              <!-- <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                  <li class="nav-item me-2">
                      <a class="btn active" data-bs-toggle="pill" href="#tab-1">Всі</a>
                  </li>
                  <li class="nav-item me-2">
                      <a class="btn " data-bs-toggle="pill" href="#tab-2">Купівля</a>
                  </li>
                  <li class="nav-item me-0">
                      <a class="btn" data-bs-toggle="pill" href="#tab-3">Оренда</a>
                  </li>
                </ul>
              </div> -->
            </div>

            <div class="row g-4">
              <PropertyCard v-for="item in mainData.products" :property-card="item"></PropertyCard>
            </div>

          </div>
        </div>

        <!-- Property List End -->

        <Category></Category>

        <Action></Action>

        

        <!-- Reviews start -->

        <div class="container-xxl py-5">
          <div class="container">
            
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h1 class="mb-3 fw-semibold">Відгуки наших клієнтів</h1>
                <p>Ми завжди радіємо Вашим відгукам!</p>
            </div>


                <Reviews :reviews="mainData.reviews" />

            
          </div>

        </div>
      

        <!-- Reviews end -->

        <!-- Team Start -->

        <div class="container-xxl py-5">
          <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h1 class="mb-3 fw-semibold">Наші фахівці</h1>
                <p>Наша команда складається з фахівців найвищчого рівня</p>
            </div>
            <div class="row g-4">
              
              <Team v-for="item in mainData.team" :team="item"></Team>
              
            </div>
          </div>
        </div> 

        <!-- Team End -->
        
      </main>

      <footer class="text-center py-3">
          
        <Footer/>

      </footer>
      
    </div>
  </div>
</template>

<style scoped>
.container-main{
  background-color: rgb(190, 190, 223, 0.2);
  font-family: 'Inter', sans-serif;
}

.btn {
  border: 1px solid rgb(68, 68, 205);
  color: blue;
}

.btn:hover {
  background-color: rgb(68, 68, 205);
  color: white;
}
</style>


