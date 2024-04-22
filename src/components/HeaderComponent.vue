<template>
    <div class="nav-bar">
        <img src="/img/avadabarbers-logo-x2-300x104.png" alt="" class="logo">
        <div class="nav-items">
            <i class="fa-solid fa-bars"></i>
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.nav-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo{
    width: 150px;
}
.nav-items{
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
}
</style>