<template>
    <div class="container-carousel" >

        <div class="row-carousel" @mouseover="stop()" @mouseleave="start()">
            <div class="col-4">
                <img @click="next()" :src="`${product[i].img}`" alt="">
            </div>
            <div class="col-8">
                <h4 class="orange-color"> THIS MONTHS FEATURED PRODUCT</h4>
                <h1>{{ product[i].name }}</h1>
                <p class="grey-color">{{ product[i].description }}</p>
                <div class="orange-color button-carousel">BUY NOW</div>
            </div>
        </div>

    </div>

</template>

<script>
import { db } from '../store.js'
export default {
    data() {
        return {
            
            product: db.products,
            i: db.i,
            intervall:null
        }
    },
    methods:{
        stop(){
           clearInterval(this.intervall)

        },
        start(){
            this.intervall = setInterval(this.next,2000)

        },
        next(){
            this.i++
            if(this.i > this.product.length){
                this.i = 0
            }
        }
    },
    mounted(){
        this.intervall = setInterval(this.next,2000)
    }


}
</script>

<style lang="scss" scoped>
@use '../style/partials/carousel.scss';
</style>