<template>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h1 class="mb-3">Тип Нерухомості</h1>
                <p>Оберіть пункт, який вас цікавить</p>
            </div>
            <div class="row g-4 category">
                <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <a href="/public/rentApartments.html" class="cat-item d-block bg-light text-center rounded p-3">
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/категории/free-icon-office-building-2974654.png" alt="Icon">
                            </div>
                            <h6>Оренда квартири</h6>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <a href="/public/sellApartments.html" class="cat-item d-block bg-light text-center rounded p-3">
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/категории/free-icon-bulding-3187308.png" alt="Icon">
                            </div>
                            <h6>Купівля квартири</h6>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <a href="/public/rentHouses.html" class="cat-item d-block bg-light text-center rounded p-3" >
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/категории/free-icon-buildings-2084040.png" alt="Icon">
                            </div>
                            <h6>Оренда будинка</h6>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <a href="/public/sellHouses.html" class="cat-item d-block bg-light text-center rounded p-3" >
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/категории/free-icon-building-767156.png" alt="Icon">
                            </div>
                            <h6>Купівля будинка</h6>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <a href="/public/landPlots.html" class="cat-item d-block bg-light text-center rounded p-3" >
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/категории/free-icon-building-188379.png" alt="Icon">
                            </div>
                            <h6>Земельні ділянки</h6>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <a href="/public/offices.html" class="cat-item d-block bg-light text-center rounded p-3" >
                        <div class="rounded p-4">
                            <div class="icon mb-3">
                                <img class="img-fluid" src="/src/assets/img/категории/free-icon-building-1683841.png" alt="Icon">
                            </div>
                            <h6>Офіси</h6>
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
    background: rgb(149, 149, 227);
    border: 1px dashed rgb(5, 208, 167);
    transition: .5s;
    box-shadow: 0 0 20px rgba(5, 208, 167, 0.2);
}

.cat-item:hover div {
    background: rgba(61, 61, 173, 0.8);
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