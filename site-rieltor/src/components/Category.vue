<template>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h1 class="mb-3">Тип Нерухомості</h1>
                <p>Оберіть пункт, який вас цікавить</p>
            </div>
            <div class="row g-4 category ">
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/icon-apartment.png" alt="Icon">
                            </div>
                            <h6>Аренда квартир</h6>
                            <!-- <span>123 Properties</span> -->
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/icon-villa.png" alt="Icon">
                            </div>
                            <h6>Продаж квартири</h6>
                            <!-- <span>123 Properties</span> -->
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/icon-house.png" alt="Icon">
                            </div>
                            <h6>Аренда домівки</h6>
                            <!-- <span>123 Properties</span> -->
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/icon-housing.png" alt="Icon">
                            </div>
                            <h6>Продаж домівки</h6>
                            <!-- <span>123 Properties</span> -->
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/icon-building.png" alt="Icon">
                            </div>
                            <h6>Земельні ділянки</h6>
                            <!-- <span>123 Properties</span> -->
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/icon-neighborhood.png" alt="Icon">
                            </div>
                            <h6>Офіс</h6>
                            <!-- <span>123 Properties</span> -->
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/icon-condominium.png" alt="Icon">
                            </div>
                            <h6>Купівля квартири</h6>
                            <!-- <span>123 Properties</span> -->
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/icon-luxury.png" alt="Icon">
                            </div>
                            <h6>Купівля домівки</h6>
                            <!-- <span>123 Properties</span> -->
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.icon {
    padding: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF !important;
    border-radius: 50px;
    border: 3px dashed rgba(21, 205, 162, 0.3) ;
}
.cat-item div {
    background: #daf1ed;
    border: 1px dashed rgb(5, 208, 167);
    transition: .5s;
    box-shadow: 0 0 20px rgba(5, 208, 167, 0.3);
}

.cat-item:hover div {
    background: rgb(135, 105, 201);
    border-color: transparent;
}

.cat-item div * {
    transition: .5s;
}

.cat-item:hover div * {
    color: #FFFFFF !important;
}

a{
    text-decoration: none;
    color: black;
}


</style>