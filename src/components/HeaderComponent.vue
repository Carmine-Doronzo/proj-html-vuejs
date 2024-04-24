<template>
    <div class="bg-header" id="header"></div>
    <div class="nav-bar">
        <img src="/img/avadabarbers-logo-x2-300x104.png" alt="" class="logo">
        <div class="nav-items">
            <a href="#"><i class="fa-solid fa-bars" @click="db.openMenu = true"></i></a>
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>

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


</style>