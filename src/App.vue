<template>

  <HeaderComponent />
  <MainComponent />
  <FooterComponent />




</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  }

}
</script>

<style lang="scss" scoped>
@use './style/general.scss';
</style>