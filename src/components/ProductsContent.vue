<template>
    <div class="bg-products" id="shopping">
        <h3 class="products-title">WE HAVE YOU COVERED</h3>
        <h1 class="products-description lora">Avada Grooming Products</h1>
        <div class="container-products">
            <div class="row">
                <div class="card-products" v-for="i in 4  " :key="i">
                    <img :src="`${products[i - 1].img}`" alt="">
                    <h2 class="lora">{{ products[i - 1].name }}</h2>
                    <p>{{ products[i - 1].price }}</p>
                </div>

            </div>
            <p class="our-products">SHOP OUR PRODUCT RANGE</p>
        </div>

    </div>
</template>

<script>
import { db } from '../store.js'
    export default {
        data() {
        return {
            
            products: db.products
        }

    },
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/products.scss';
</style>