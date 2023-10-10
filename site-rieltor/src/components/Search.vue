<!-- <script setup>

</script>

<template>
    <div class="container-fluid mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
        <div class="container">
            <div class="row g-2">
                <div class="col-md-10">
                    <div class="row g-2">
                        <div class="col-md-5">
                            <select class="form-select m-auto border-0 py-3">
                                <option selected>Тип послуги</option>
                                <option value="1">Оренда квартир</option>
                                <option value="2">Купівля квартири</option>
                                <option value="3">Оренда будинка</option>
                                <option value="4">Купівля будинка</option>
                                <option value="5">Земельні ділянки</option>
                                <option value="6">Офіси</option>
                            </select>
                        </div>
                        <div class="col-md-5">
                            <select class="form-select m-auto border-0 py-3">
                                <option selected>Місцезнаходження</option>
                                <option value="1">Дніпро</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 mt-2">
                    <button class="btn border-0 w-100 py-3">Знайти</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-fluid {
    background-color: rgb(68, 68, 205);
}

.btn {
    background-color: rgb(36, 31, 41);
    color: white;
}

@media (max-width: 767px) {
  select.form-select {
    width: 230px; 
    font-size: 16px;
  }


}
</style> -->



<template>
    <div class="container-fluid mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
      <div class="container">
        <div class="row g-2">
          <div class="col-md-10">
            <div class="row g-2">
              <div class="col-md-5">
                <select v-model="selectedService" class="form-select m-auto border-0 py-3">
                  <option value="" selected>Тип послуги</option>
                  <option value="rentApartments">Оренда квартир</option>
                  <option value="sellApartments">Купівля квартири</option>
                  <option value="rentHouses">Оренда будинка</option>
                  <option value="sellHouses">Купівля будинка</option>
                  <option value="landPlots">Земельні ділянки</option>
                  <option value="offices">Офіси</option>
                  <!-- Добавьте другие опции здесь -->
                </select>
              </div>
              <div class="col-md-5">
                <select class="form-select m-auto border-0 py-3">
                  <option selected>Місцезнаходження</option>
                  <option value="Dnipro">Дніпро</option>
                  <!-- Добавьте другие опции здесь -->
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-2 mt-2">
            <button @click="search" class="btn border-0 w-100 py-3">Знайти</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const selectedService = ref(''); // Инициализация выбранной услуги
  
  // Функция для обработки нажатия на кнопку "Знайти"
  const search = () => {
    if (selectedService.value === 'rentApartments') {
      // Выполнить переход на страницу rentApartments.html
      window.location.href = 'rentApartments.html';
    } else if (selectedService.value === 'sellApartments') {
      // Выполнить переход на другую страницу, если выбрана "Купівля квартири"
      window.location.href = 'sellApartments.html';
    } else if (selectedService.value === 'rentHouses') {
      // Выполнить переход на другую страницу, если выбрана "Купівля квартири"
      window.location.href = 'rentHouses.html';
    } else if (selectedService.value === 'sellHouses') {
      // Выполнить переход на другую страницу, если выбрана "Купівля квартири"
      window.location.href = 'sellHouses.html';
    } else if (selectedService.value === 'landPlots') {
      // Выполнить переход на другую страницу, если выбрана "Купівля квартири"
      window.location.href = 'landPlots.html';
    } else if (selectedService.value === 'offices') {
      // Выполнить переход на другую страницу, если выбрана "Купівля квартири"
      window.location.href = 'offices.html';
    }
    // Добавьте другие условия и перенаправления здесь
  };
  </script>
  
  <style scoped>
  .container-fluid {
      background-color: rgb(68, 68, 205);
  }
  
  .btn {
      background-color: rgb(36, 31, 41);
      color: white;
  }
  
  @media (max-width: 767px) {
    select.form-select {
      width: 230px; /* Например, 30px */
      font-size: 16px;
    }
  }
  </style>