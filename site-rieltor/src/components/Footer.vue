<template>
    <div  class="container-fluid text-white-50 footer pt-3 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Про нас</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Дніпро, Україна</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+380 66 000 00 00</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        <div class="d-flex pt-3 justify-content-evenly">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Швидкі посилання</h5>
                        <a class="btn btn-link text-white-50" href="#about">Про нас</a>
                        <a class="btn btn-link text-white-50" href="#property">Наші найкращі варіанти</a>
                        <a class="btn btn-link text-white-50" href="#contact">Контакти</a>
                        <a class="btn btn-link text-white-50" href="#team">Наші фахівці</a>
                        <!-- <a class="btn btn-link text-white-50" href="">Terms & Condition</a> -->
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <h5 class="text-white mb-4">Галерея</h5>
                        <div class="row g-2 pt-2">
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1 " src="/src/assets/img/apartament1.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="/src/assets/img/apartment2.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="/src/assets/img/apartment3.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="/src/assets/img/apartment4.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="/src/assets/img/property-1.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="/src/assets/img/property-2.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Залишити email</h5>
                        <p>Якщо Ви бажаєте, щоб ми з Вами зв'язались - залиште Ваш Email!</p>
                        <div class="position-relative mx-auto" style="max-width: 400px;">
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Ваш email">
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Відправити</button>
                        </div>
                    </div> -->
                </div>
            </div>
    </div>
</template>

<style scoped>
.footer .btn.btn-social {
    margin-right: 5px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 35px;
    transition: .3s;
}

.footer .btn.btn-social:hover {
    color: rgb(68, 68, 205);
    border-color: rgb(68, 68, 205);
}

.footer .btn.btn-link {
    display: block;
    margin-bottom: 5px;
    padding: 0;
    text-align: left;
    font-size: 15px;
    font-weight: normal;
    text-transform: capitalize;
    transition: .3s;
}

.footer .btn.btn-link::before {
    position: relative;
    content: "\f105";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 10px;
}

.footer .btn.btn-link:hover {
    letter-spacing: 1px;
    box-shadow: none;
}

/* .footer .form-control {
    border-color: rgba(255,255,255,0.5);
} */

.footer .copyright {
    padding: 25px 0;
    font-size: 15px;
    border-top: 1px solid rgba(256, 256, 256, .1);
}

.footer .copyright a {
    color: var(--light);
}

.footer .footer-menu a {
    margin-right: 15px;
    padding-right: 15px;
    border-right: 1px solid rgba(255, 255, 255, .1);
}

.footer .footer-menu a:last-child {
    margin-right: 0;
    padding-right: 0;
    border-right: none;
}

.img-fluid {
    height: 100px;
    width: 200px;
    object-fit: cover;
}

.container-fluid {
    background-color: rgb(43, 43, 106);;
}

a {
    text-decoration-line: none;
}



@media (max-width: 767px) {

    img {
    height: 100px;
    width: 150px;
    object-fit: cover;
}
  
}
</style>