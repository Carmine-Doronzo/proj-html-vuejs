<template>
   <div class="card" >
                <img :src='`${item.img}`' alt="">
                <h1>{{ item.name }}</h1>
                <p>{{ item.description }}</p>
            </div>
    
</template>

<script>
    export default {

        props:{
            item:{
                type:Object
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/services.scss';
</style>