<template>

    <div class="container">
        <div class="hero">
            <HeroContent />
        </div>
    </div>

    <AwardsContent />
    <div class="container-services" id="services">
        <div class="services">
            <h4 class="service-title">MENS GROOMING</h4>
            <h1 class="service-description lora">Services</h1>
        </div>
        <div class="row">


            <ServicesContent v-for="(item, i) in service" :key="i" :item="item" />

        </div>
        <div class="our-services">READ ABOUT OUR SERVICES</div>
    </div>
    <img src="/img/triangle.svg" alt="" class="triangle bg-triangle">

    <ProductsContent />


    <ProductsCarouselContent />

    <ReviewsContent />
    <BlogsContent />


</template>

<script>
import HeroContent from '../components/HeroContent.vue'
import AwardsContent from '../components/AwardsContent.vue'
import ServicesContent from '../components/ServicesContent.vue'
import ProductsContent from '../components/ProductsContent.vue'
import ProductsCarouselContent from '../components/ProductsCarouselContent.vue'
import ReviewsContent from '../components/ReviewsContent.vue'
import BlogsContent from '../components/BlogsContent.vue'
import { db } from '../store.js'
export default {
    data() {
        return {
            service: db.services,
            


        }

    },
    components: {
        HeroContent,
        AwardsContent,
        ServicesContent,
        ProductsContent,
        ProductsCarouselContent,
        ReviewsContent,
        BlogsContent


    }

}
</script>

<style lang="scss" scoped>
@use '../style/partials/main.scss';

</style>