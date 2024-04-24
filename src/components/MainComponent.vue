<template>

    <div class="container">
        <div class="hero">
            <HeroContent />
        </div>
    </div>

    <AwardsContent />
    <div class="container-services">
        <div class="services">
            <h4 class="service-title">MENS GROOMING</h4>
            <h1 class="service-description">Services</h1>
        </div>
        <div class="row">


            <ServicesContent v-for="(item, i) in service" :key="i" :item="item" />

        </div>
        <div class="our-services">READ ABOUT OUR SERVICES</div>
    </div>
    <img src="/img/triangle.svg" alt="" class="triangle bg-triangle">
    
    <ProductsContent/>
    
    
    <ProductsCarouselContent/>

    <div class="container-reviews">
        <h4 class="title-review">WHAT PEOPLE SAY</h4>
        <h1 class="description-review">Reviews</h1>
        <div class="row-reviews">
            <div class="card-reviews" v-for="(review,i) in reviews" :key="i">
                <p class="review">{{ review.review }}</p>
                <img :src="`${review.img}`" alt="">
                <h5 class="name-review">{{ review.name }}</h5>
            </div>
        </div>
        
    </div>
    

</template>

<script>
import HeroContent from '../components/HeroContent.vue'
import AwardsContent from '../components/AwardsContent.vue'
import ServicesContent from '../components/ServicesContent.vue'
import ProductsContent from '../components/ProductsContent.vue'
import ProductsCarouselContent from '../components/ProductsCarouselContent.vue'
import { db } from '../store.js'
export default {
    data() {
        return {
            service: db.services,
            reviews:db.rewiews
           
        }

    },
    components: {
        HeroContent,
        AwardsContent,
        ServicesContent,
        ProductsContent,
        ProductsCarouselContent
    }

}
</script>

<style lang="scss" scoped>
@use '../style/partials/main.scss';
.container-reviews{
    margin: 0 auto;
    width: 1024px;
    padding-top: 150px;
    text-align: center;
}
.row-reviews{
    width: 100%;
    display: flex;
    gap: 80px;

}
.card-reviews{
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 30px;
    gap: 20px;
}
.card-reviews img{
    width: 100px;
    aspect-ratio: 1/1;
    border-radius: 50%;
}
.title-review{
    font-size: 20px;
    color: #be9359;
}
.description-review{
    font-size: 80px;
    color: #b0b0b0;
}
.name-review{
    color: #be9359;
    font-style: italic;
}
.review{
    font-size:16px;
}
</style>