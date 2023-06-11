<template>
  <div class="mb-5">
    <!-- Header -->
    <header id="header" class="transparent-nav">
      <div class="container">
        <!-- Navigation -->
        <nav id="nav">
          <ul class="main-menu nav navbar-nav navbar-right">
            <li><router-link class="custom-link" style to="/">Bosh sahifa</router-link></li>
            <li><router-link class="custom-link" style to="/lessons">Darsliklar</router-link></li>
            <li><router-link class="custom-link" to="/about">bilimingizni sinash</router-link></li>
          </ul>
        </nav>
        <!-- /Navigation -->
      </div>
    </header>
    <!-- /Header -->
  </div>
  <router-view />
</template>

<script>
import HomeView from "./views/HomeView.vue";
export default {};
</script>

<style scoped>
#nav li .custom-link{
    display:block;
    text-transform:uppercase;
    -webkit-transition:0.2s color;
    transition:0.2s color;
    color:#374050;
  }
  #nav  li .custom-link:hover , .footer-nav li a:focus {
      color:#FF6700;
  }
  #nav li .custom-link:after {
    content:"";
    display:block;
    height:2px;
    background-color:#FF6700;
    width:100%;
    -webkit-transform: translateY(5px);
        -ms-transform: translateY(5px);
            transform: translateY(5px);
    opacity:0;
    -webkit-transition:0.2s all;
    transition:0.2s all;
  }
  #nav li .custom-link:hover:after , .footer-nav li .custom-link:focus:after {
    -webkit-transform: translateY(0px);
        -ms-transform: translateY(0px);
            transform: translateY(0px);
    opacity:1;
    }
</style>
