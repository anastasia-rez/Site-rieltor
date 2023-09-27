<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isSticky = ref(false);

const handleScroll = () => {
    isSticky.value = window.scrollY > 45;
    };

    onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

// :style="{ marginTop: isSticky ? '45px' : '0' }"

</script>

<template>
        <div class=" nav-bar bg-transparent container-fluid" :class="{'sticky-top': isSticky}" >
         <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
            <a href="index.html" class="navbar-brand d-flex align-items-center text-center">
                <div class="icon p-2 me-2">
                    <img class="img-fluid" src="/src/assets/img/logo1.PNG" alt="Icon" style="width: 45px; height: auto;">
                </div>
                <h1 class="m-0 fw-bold">Альянс Експерт</h1>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto text-center">

                    <div class="nav-item dropdown ">
                        <a href="testimonial.html" class="nav-link fw-semibold " data-bs-toggle="dropdown">Головна</a>
                    </div>

                    <div class="nav-item dropdown">
                        <a href="#about" class="nav-link" data-bs-toggle="dropdown">Про нас</a>
                    </div>
                    
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link" data-bs-toggle="dropdown">Наші варіанти</a>
                    </div>

                    <div class="nav-item dropdown">
                        <a href="testimonial.html" class="nav-link" data-bs-toggle="dropdown">Відгуки</a>
                    </div>

                    <div class="nav-item dropdown">
                        <a href="testimonial.html" class="nav-link" data-bs-toggle="dropdown">Контакти</a>
                    </div>

                </div>

            </div>
        </nav>
    </div>
</template>

<style scoped>

h1 {
    color: rgb(49, 49, 181);
}

.nav-bar {
position: relative;
/* margin-top: 30px; */
padding: 0 3rem;
transition: 0.5s;
z-index: 9999;
height: 45px;
}

.nav-bar.sticky-top {
position: sticky;
top: 0;
    left: 0;
    right: 0;
padding: 0;
z-index: 9999;
}

.navbar {
box-shadow: 0 0 30px rgba(0, 0, 0, .08);
}

.navbar .dropdown-toggle::after {
border: none;
content: "\f107";
font-family: "Font Awesome 5 Free";
font-weight: 900;
vertical-align: middle;
margin-left: 5px;
transition: .5s;
}

.navbar .dropdown-toggle[aria-expanded=true]::after {
transform: rotate(-180deg);
}

.navbar-light .navbar-nav .nav-link {
margin-right: 30px;
padding: 25px 0;
color: #FFFFFF;
font-size: 15px;
text-transform: uppercase;
outline: none;
}


.nav-item:hover {
    color: rgb(49, 49, 181);
    position: relative;
}

.nav-link {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}



.nav-link::before,
.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    background-color: rgb(49, 49, 181);
    opacity: 0;
    transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.nav-link::before {
    top: calc(80% - 1px);
    left: 0;
    transform-origin: left center;
}

.nav-link::after {
    bottom: calc(80% - 1px);
    right: 0;
    transform-origin: right center;
}

.nav-link:hover::before {
    width: 100%;
    opacity: 1;
}

.nav-link:hover::after {
    width: 100%;
    opacity: 1;
}

@media (max-width: 991.98px) {
.nav-bar {
    margin: 0;
    padding: 0;
}

.navbar-light .navbar-nav .nav-link  {
    margin-right: 0;
    padding: 10px 0;
}

.navbar-light .navbar-nav {
    border-top: 1px solid #EEEEEE;
}
}

.navbar-light .navbar-brand {
height: 75px;
}

.navbar-light .navbar-nav .nav-link {
color: var(--dark);
font-weight: 500;
}


@media (min-width: 992px) {
.navbar .nav-item .dropdown-menu {
    display: block;
    top: 100%;
    margin-top: 0;
    transform: rotateX(-75deg);
    transform-origin: 0% 0%;
    opacity: 0;
    visibility: hidden;
    transition: .5s;
    
}

.navbar .nav-item:hover .dropdown-menu {
    transform: rotateX(0deg);
    visibility: visible;
    transition: .5s;
    opacity: 1;
}
}
</style> 
