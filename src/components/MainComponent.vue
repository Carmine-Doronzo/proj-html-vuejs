<template>
    <div class="row">

        <div class="hero-section col-6">
            <h1>Barber Shop</h1>
            <p>the Pinnacle of Male Grooming </p>
            <div class="learn">
                <h4>LEARN MORE</h4>
            </div>
        </div>
        <div class="col-6">
            <img src="/img/avadabarbers_hero_focalmirror-800x1100.png" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hero-section {
    padding-top: 30%;
}
.row{
    display: flex;
}
.col-6{
    width: calc((6 * 100%) / 12);
}
</style>