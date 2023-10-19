<script setup>

const props = defineProps(['team']);

</script>

<template>
    <div id="team" class="team-item col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="rounded overflow-hidden ">
        <div class="position-relative ">
            <img class="img-fluid w-100" :src="team.img" alt="">
            <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a class="btn btn-square mx-1" :href="team.linkFb"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square mx-1" :href="team.linkYouTube"><i class="fab fa-youtube"></i></a>
                <a class="btn btn-square mx-1" :href="team.linkInstagram"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="text-center p-4 mt-3">
            <h5 class="fw-bold mb-0">{{ team.name }}</h5>
            <small>{{team.position}}</small>
            <div>
                <a :href="'tel:' + team.tel" class="text-dark link-underline link-underline-opacity-0">{{ team.tel }} <i class="fa fa-phone-alt p-3 "></i></a>
            </div>
            
        </div>
    </div>
    </div>
    
</template>

<style scoped>
.team-item {
    box-shadow: 0 0 30px rgba(0, 0, 0, .08);
    transition: .5s;
}

.team-item .btn {
    background: #FFFFFF;
    box-shadow: 0 0 30px rgba(0, 0, 0, .15);
}

.team-item .btn:hover {
    color: #ffffffc9;
    background: rgb(68, 68, 205);
}


.fa-phone-alt:hover {
    transform: scale(1.6); 
    transition: transform 0.3s ease-in-out;
    color: rgb(68, 68, 205);
}

</style>