<template>
    <div class="bg-header"></div>
        <div class="nav-bar">
            <img src="/img/avadabarbers-logo-x2-300x104.png" alt="" class="logo">
            <div class="nav-items">
                <i class="fa-solid fa-bars" @click="db.openMenu = true"></i>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <ul :class="db.openMenu === false ? 'menu d-none' : 'menu d-flex'">
                <li class="close" @click="db.openMenu = false"><i class="fa-solid fa-xmark"></i></li>
                <HamburgherContent v-for="(link, i) in db.menuLink " :key="i" :item="link" />
            </ul>
        </div>
    
</template>

<script>
import { db } from '../store.js'
import HamburgherContent from '../components/HamburgherContent.vue';
export default {
    data() {
        return {
            db
        }


    },
    components: {

        HamburgherContent

    }

}
</script>

<style lang="scss" scoped>
@use '../style/partials/header.scss';
.bg-header{
    background-image: url('/img/avadabarbers-homepage-hero-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    //background-position: top;
    
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
}
</style>