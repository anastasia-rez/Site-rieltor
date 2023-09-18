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

const carouselItems = mainData.carousel;


</script>

<template>
  <div class="container  pt-3 min-vh-100 d-flex flex-column bg-white p-0">
    <header>

      <Navbar />
      <Header :carouselItems="carouselItems" />

    </header>

    <main class="row flex-grow-1 mt-3">

      <Search></Search>

      <Category></Category>

      <About></About>

      <!-- Property List Start -->

      <div class="container-xxl py-5">

        <div class="container">

          <div class="row g-0 gx-5 align-items-end">
            <div class="col-lg-6">
              <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                <h1 class="mb-3">Наші варіати</h1>
                <p>Оберіть варіант, який вам сподобався та зв'яжіться з нашими фахівцями</p>
              </div>
            </div>

            <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
              <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li class="nav-item me-2">
                    <a class="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Всі</a>
                </li>
                <li class="nav-item me-2">
                    <a class="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">Продаж</a>
                </li>
                <li class="nav-item me-0">
                    <a class="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">Оренда</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row g-4">
            <PropertyCard v-for="item in mainData.products" :property-card="item"></PropertyCard>
          </div>

        </div>
      </div>

      <!-- Property List End -->

      <Action></Action>

      <!-- Team Start -->

      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
              <h1 class="mb-3">Наші фахівці</h1>
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
        
      Copyright &copy; 2023

    </footer>
    
  </div>
</template>

<style scoped>



/* :root {
    --primary: #00B98E;
    --secondary: #FF6922;
    --light: #EFFDF5;
    --dark: #0E2E50;
}

.back-to-top {
    position: fixed;
    display: none;
    right: 45px;
    bottom: 45px;
    z-index: 99;
} */


/*** Button ***/



/*** header ***/



@media (min-width: 992px) {
    .header {
        margin-top: -120px;
    }
}

.header-carousel .owl-nav {
    position: absolute;
    top: 50%;
    left: -25px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
}

.header-carousel .owl-nav .owl-prev,
.header-carousel .owl-nav .owl-next {
    margin: 7px 0;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background: var(--primary);
    border-radius: 40px;
    font-size: 20px;
    transition: .5s;
}

.header-carousel .owl-nav .owl-prev:hover,
.header-carousel .owl-nav .owl-next:hover {
    background: var(--dark);
}

@media (max-width: 768px) {
    .header-carousel .owl-nav {
        left: 25px;
    }
}

.breadcrumb-item + .breadcrumb-item::before {
    color: #DDDDDD;
}
</style>
