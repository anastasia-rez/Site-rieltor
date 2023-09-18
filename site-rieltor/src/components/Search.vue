<script setup>

</script>

<template>
    <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
        <div class="container">
            <div class="row g-2">
                <div class="col-md-10">
                    <div class="row g-2">
                        <div class="col-md-4">
                            <input type="text" class="form-control border-0 py-3" placeholder="Пошук">
                        </div>
                        <div class="col-md-4">
                            <select class="form-select border-0 py-3">
                                <option selected>Тип Нерухомості</option>
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
                    <button class="btn btn-dark border-0 w-100 py-3">Знайти</button>
                </div>
            </div>
        </div>
    </div>
</template>

