<template>

    <div class="container">
        <div class="hero">
            <HeroContent />
        </div>
    </div>

    <AwardsContent />
    <div class="container">
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

    <div class="container-carousel">

            <div class="row-carousel">
                <div class="col-4">
                  <img src="/img/shaving_butter-800x800.png" alt="">  
                </div>
                <div class="col-8">
                    <h4> THIS MONTHS FEATURED PRODUCT</h4>
                    <h1>Shaving Butter</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus officiis vitae doloribus repellendus neque eligendi iste, dolor recusandae qui deserunt earum ab a et provident saepe quam!</p>
                    <div>BUY NOW</div>
                </div>
            </div>

    </div>



</template>

<script>
import HeroContent from '../components/HeroContent.vue'
import AwardsContent from '../components/AwardsContent.vue'
import ServicesContent from '../components/ServicesContent.vue'
import ProductsContent from '../components/ProductsContent.vue'
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
        ProductsContent
    }

}
</script>

<style lang="scss" scoped>
@use '../style/partials/main.scss';
.col-4{
    width: calc((4 * 100%) / 12);
    background-image: url("/img/avadabarbers-cta-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    //height: 600px;
}
.col-8{
    width: calc((8 * 100%) / 12);
    background-color: #181a1a;
    height: 100%;
}
.row-carousel{
    gap: 0;
    border-top: 7px solid  #be9359 ;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -30px;

}

.container-carousel{
    width: 1000px;
    display: flex;
    margin: 0 auto;
}
</style>