<template>
    
    <li class="link"><a :href="`${item.src}`"></a>{{ item.name }}</li>
    
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
.link:hover{
    color: #be9359;
    cursor: pointer;
}

</style>