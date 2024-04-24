<template>
    
    <li class="link"><a :href="`${item.src}`" @click="db.openMenu = false">{{ item.name }}</a></li>
    
</template>

<script>
    import { db } from '../store.js'
    export default {
        data(){
            return{
                db
            }
        },   
     props:{
        item:{
            type:Object
        }
     }   
    }
</script>

<style lang="scss" scoped>
.link:hover{
    color: #be9359;
    cursor: pointer;
}

</style>