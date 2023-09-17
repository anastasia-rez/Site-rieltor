<script setup>

const props = defineProps(['propertyCard']);

</script>

<template>

  <div class="mb-5">
    <div class="card h-100" >
      <img :src="propertyCard.img" class="card-img-top" alt="...">

      <div class="card-body">
        <h5 class="card-title">{{propertyCard.type}}</h5>
        <p class="card-text">{{ propertyCard.description }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Ціна: {{propertyCard.price}}</li>
        <li class="list-group-item">Кількість кімнат: {{ propertyCard.rooms }}</li>
        <li class="list-group-item">Площа: {{ propertyCard.area }}</li>
      </ul>
      <div class="card-body m-auto">
        <a href="#" class="btn btn-success mb-2 me-4">Дізнатись більше</a>
        <a href="#" class="btn btn-warning mb-2">Зв'язатись з нами</a>
      </div>
    </div>
  </div>

  


</template>

<style scoped>
  img{
    height: 260px;
    object-fit: contain;
  }
</style>
