<template>

    <div class="container">
        <div class="hero">
            <HeroContent />
        </div>
    </div>

    <AwardsContent/>
    <div class="container">
        <div class="services">
            <h4 class="service-title">MENS GROOMING</h4>
            <h1 class="service-description">Services</h1>
        </div>
        <div class="row">
            

            <ServicesContent v-for="(item,i) in service" :key="i" :item="item"/>        

        </div>
        <div class="our-services">READ ABOUT OUR SERVICES</div>
    </div>
    <img src="/img/triangle.svg" alt="" class="triangle bg-triangle">
    <div class="bg-products">
        <h3>WE HAVE YOU COVERED</h3>
        <h1>Avada Grooming Products</h1>
        <div class="row">
        <div class="card" v-for="i in 4 " :key="i">
            <img :src="`${products[i].img}`" alt="">
            <h2>{{ products[i].name }}</h2>
            <p>{{ products[i].price }}</p>
        </div>
        </div>
        
    </div>
    

    

</template>

<script>
import HeroContent from '../components/HeroContent.vue'
import AwardsContent from '../components/AwardsContent.vue'
import ServicesContent from '../components/ServicesContent.vue'
import {db} from '../store.js'
export default {
    data(){
        return{
            service:db.services,
            products:db.products
        }

    },
    components: {
        HeroContent,
        AwardsContent,
        ServicesContent
    }

}
</script>

<style lang="scss" scoped>
@use '../style/partials/main.scss';
.bg-products{
    background-image: url('/img/avadabarbers-reviewsbackground.jpg');
   color: white;
}


</style>