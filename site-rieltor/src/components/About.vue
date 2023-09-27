<template>
    <div id="about" class="container-xxl py-5 ">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="about-img position-relative overflow-hidden p-5 pe-0">
                        <img class="img-fluid w-100" src="/src/assets/img/about.jpg">
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 class="mb-4">Підберемо для Вас ідеальний варінт</h1>
                    <p class="mb-4">Наші фахівці приймають до уваги всі деталі Вашого запросу, щоб допомогти Вам</p>
                    <p><i class="fa fa-check text-primary me-3"></i>Великий вибір пропозицій</p>
                    <p><i class="fa fa-check text-primary me-3"></i>Профейсійні фахівці</p>
                    <p><i class="fa fa-check text-primary me-3"></i>Честність та бажання допомогти</p>
                    <a class="btn btn-primary py-3 px-5 mt-3" href="">Наш телеграм канал</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-img img {
    position: relative;
    z-index: 2;
}

.about-img::before {
    position: absolute;
    content: "";
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgb(72, 72, 173);
    transform: skew(20deg);
    z-index: 1;
}
</style>