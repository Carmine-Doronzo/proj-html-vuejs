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
@use '../style/partials/footer.scss';
</style>