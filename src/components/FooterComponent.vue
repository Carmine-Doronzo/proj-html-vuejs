<template>
    <div class="bg-191a1a">
        <div class="container-footer">
            <div class="row-footer">
                <div class="card-footer" v-for="(item, i) in footer" :key="i">
                    <img :src="`${item.img}`" alt="">
                    <div v-if="i === 1">
                        <p class="grey-color" v-for="(item,j) in contact" :key="j">{{ item }}</p>
                        
                    </div>
                    <div :class="i === 1 ? 'orange-color':'orange-color button-footer'">{{ item.button }}</div>
                    <div v-if="i === 1" class="social white-color">
                        <span v-for="(item,y) in socialLink" :key="y"><i :class="`${item}`"></i></span>
                    </div>

                </div>
            </div>

        </div>
    </div>
    <div class="bg-1c1d1e">
        <p class="dark-grey">&copy; Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Right Reserved | powered by WordPress</p>
    </div>
</template>

<script>
import { db } from '../store.js'
export default {
    data() {
        return {
            footer: db.footer,
            contact: db.contact,
            socialLink: db.socialLink
        }
    },

  

}
</script>

<style lang="scss" scoped>
.bg-191a1a {
    background-color: #191a1a;
}
.bg-1c1d1e{
    background-color: #1c1d1e;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container-footer{
    padding: 50px 0;
}
.row-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;
}
.card-footer{
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 50px;
     
}


.social{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
}
.orange-color{
    color: #be9359;
}
.button-footer{
    border: 3px solid ;
    padding: 15px 15px;
    width: 290px;
    text-align: center;
    color: #be9359;
    //font-size: 20px;
}
.white-color{
    color:white;
}
.grey-color{
    color: #5d5b5b;
}
.dark-grey{
    color: #292929;
}
</style>