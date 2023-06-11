<template>
  <Navbar></Navbar>
  <router-view />
  <Footer></Footer>
</template>

<script>

import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
export default {
  components:{
    Navbar, 
    Footer
  }
};
</script>

<style scoped>

</style>
