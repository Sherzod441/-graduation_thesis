<template>
  <div>
    <!-- Header -->
    <header id="header">
      <div class="container">

        <!-- Navigation -->
        <nav id="nav" class="navbar navbar-expand-lg bg-white py-4">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item me-3">
                  <router-link class="custom-link" to="/">Bosh sahifa</router-link>
                </li>
                <li class="nav-item me-3">
                    <router-link class="custom-link" to="/lessons">Darsliklar</router-link>
                </li>
                <li class="nav-item me-3">
                    <router-link class="custom-link" to="/about">Bilimingizni sinash</router-link>
                </li>
              </ul>
            </div>
        </nav>

        <!-- /Navigation -->
      </div>
    </header>
    <!-- /Header -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#header {
position:fixed;
left:0;
right:0;
top:0;
z-index:99;
border-bottom:1px solid rgba(235, 235, 235, 0.25);
background-color: transparent;
-webkit-transition:0.2s all;
transition:0.2s all;
}



.navbar-nav li .custom-link {
text-transform:uppercase;
-webkit-transition:0.2s all;
transition:0.2s all;
color: #374050;
}

.navbar-nav li .custom-link:hover , .navbar-nav li .custom-link:focus {
background-color:transparent;
}

.navbar-nav li .custom-link:after {
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

.navbar-nav li .custom-link:hover:after , .navbar-nav li .custom-link:focus:after {
-webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
        transform: translateY(0px);
opacity:1;
}

</style>
