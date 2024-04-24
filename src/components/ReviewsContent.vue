<template>
    <div class="container-reviews">
        <h4 class="title-review">WHAT PEOPLE SAY</h4>
        <h1 class="description-review lora">Reviews</h1>
        <div class="row-reviews">
            <div class="card-reviews" v-for="(review, i) in reviews" :key="i">
                <p class="review">{{ review.review }}</p>
                <img :src="`${review.img}`" alt="">
                <h5 class="name-review">{{ review.name }}</h5>
            </div>
        </div>

    </div>
</template>

<script>
import { db } from '../store.js'
export default {
    data(){
        return{
            reviews:db.rewiews
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../style/partials/reviews.scss';</style>