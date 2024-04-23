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
            <div class="card" v-for="(item,i) in service" :key="i">
                <img :src='`${item.img}`' alt="">
                <h1>{{ item.name }}</h1>
                <p>{{ item.description }}</p>
            </div>

            

        </div>
        <div class="our-services">READ ABOUT OUR SERVICES</div>
    </div>

</template>

<script>
import HeroContent from '../components/HeroContent.vue'
import AwardsContent from '../components/AwardsContent.vue'
import {db} from '../store.js'
export default {
    data(){
        return{
            service:db.services
        }

    },
    components: {
        HeroContent,
        AwardsContent
    }

}
</script>

<style lang="scss" scoped>
@use '../style/partials/main.scss';
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 70px;
}
.service-title{
    font-size: 20px;
    color: #be9359;
} 
.service-description{
    font-size: 80px;
    color: #b0b0b0;
}
.services{
    text-align: center;
}
.row{
    //text-align: center;
    //padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;

}
.card{
    width: calc((3 * 100%) / 12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
}
.card > img{
    width: 65px;
    height: 100px;
}

.card > h1{
    color: #be9359;
}
.card > p{
    color: #b0b0b0;
    text-align: center;
}
.our-services{
    border: 3px solid ;
    padding: 15px 15px;
    width: 340px;
    text-align: center;
    color: #be9359;
    font-size: 20px;
}

</style>