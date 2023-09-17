<script setup>

import {mainData} from './data.js'

import PropertyCard from './components/PropertyCard.vue';

import Navbar from './components/Navbar.vue';

import Header from './components/Header.vue';


const carouselItems = mainData.carousel;


</script>

<template>
  <div class="container  pt-3 min-vh-100 d-flex flex-column bg-white p-0">
    <header>

      <Navbar />
      <Header :carouselItems="carouselItems" />

      

    </header>

    <main class="row flex-grow-1 mt-3">
      <div class="row row-cols-1 row-cols-md-2">

      <!--start-->
        <!-- <PropertyCard v-for="item in mainData.products" :property-card="item"></PropertyCard> -->
      <!--end-->
      </div>
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
.btn {
    transition: .5s;
}

.btn.btn-primary,
.btn.btn-secondary {
    color: #FFFFFF;
}

.btn-square {
    width: 38px;
    height: 38px;
}

.btn-sm-square {
    width: 32px;
    height: 32px;
}

.btn-lg-square {
    width: 48px;
    height: 48px;
}

.btn-square,
.btn-sm-square,
.btn-lg-square {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    border-radius: 50px;
}


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
