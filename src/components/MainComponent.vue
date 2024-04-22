<template>
   
        <div class="container">
            <div class="hero">
                <HeroContent />
            </div>
        </div>
    

    <div class="bg-awards">
        <div class="container height">
         <div class="award">
            <h4 class="award-title">AWARD WINNING</h4>
            <h1 class="award-description">Pro Barbers</h1>
            <div class="new-barber">MEET YOUR NEW BARBER</div>
            
         </div>
        </div>
        <img src="/img/triangle.svg" alt=""  class="triangle">
        
    </div>
</template>

<script>
import HeroContent from '../components/HeroContent.vue'
export default {
    components: {
        HeroContent
    }

}
</script>

<style lang="scss" scoped>
@use '../style/partials/main.scss';
.bg-awards {
    background-image: url('/img/avadabarbers-about-introbackground.jpg');
}
.new-barber{
    border: 3px solid ;
    padding: 15px 15px;
    width: 290px;
    text-align: center;
    color: #be9359;
    font-size: 20px;
}
.award-title{
    font-size: 20px;
    color: #be9359;
} 
.award-description{
    font-size: 80px;
    color: #b0b0b0;
}
.award{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
}
.triangle{
    width: 100%;
    height: 80px;
    margin-bottom: 20px;

}
.height{
    height: 400px;
}
</style>