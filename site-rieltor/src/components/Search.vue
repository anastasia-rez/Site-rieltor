<script setup>

</script>

<template>
    <div class="container-fluid mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
        <div class="container">
            <div class="row g-2">
                <div class="col-md-10">
                    <div class="row g-2">
                        <div class="col-md-4">
                            <select class="form-select border-0 py-3">
                                <option selected>Тип Нерухомості</option>
                                <option value="1">Квартира</option>
                                <option value="2">Будинок</option>
                                <option value="3">Земельний участок</option>
                            </select>
                        </div>
                        <!-- <div class="col-md-4">
                            <input type="text" class="form-control border-0 py-3" placeholder="Пошук">
                        </div> -->
                        <div class="col-md-4">
                            <select class="form-select border-0 py-3">
                                <option selected>Тип Послуги</option>
                                <option value="1">Купівля</option>
                                <option value="2">Продаж</option>
                                <option value="3">Аренда</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <select class="form-select border-0 py-3">
                                <option selected>Місцезнаходження</option>
                                <option value="1">Дніпро</option>
                                <option value="2">Київ</option>
                                <option value="3">Інше</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
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
</style>