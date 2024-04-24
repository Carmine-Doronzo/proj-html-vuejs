<template>
    <img src="/img/triangle.svg" alt="" class="triangle tiangle-upside">
    <div class="bg-blogs">
        <div class="container-blogs">
            <h4 class="title-blogs">TALES FROM THE BARBER SHOP</h4>
            <h1 class="description-blogs">Recent Blog Post </h1>
            <div class="row-blogs">
                <div class="card-blogs" v-for="(blog, i) in blogs" :key="i">
                    <img :src="`${blog.img}`" alt="">
                    <h1 class="orange-color">{{ blog.title }}</h1>
                    <p class="text">{{ blog.text }}</p>
                </div>
                
            </div>
            <div class="read-more">READ MORE FROM OUR BLOG</div>

        </div>
    </div>
</template>

<script>
import { db } from '../store.js'
    export default {
        data() {
        return {
            
            blogs: db.blogs


        }

    },
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/blogs.scss';
</style>