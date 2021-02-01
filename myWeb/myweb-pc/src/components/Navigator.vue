<template>
  <div>
    <div class="spinner-wrapper">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
    <!-- End preloader -->

    <div id="main-wrapper">
      <!-- Start Navbar -->
      <div class="menu-toggler">
        <span>
          <i class="mdi mdi-menu"></i>
        </span>
      </div>
      <header>
        <div class="header-navbar h-100">
          <a class="navbar-brand" href="#">
            <p>S</p>
            <span>Song</span>
          </a>
          <nav class="navbar menu-list">
            <ul class="list-group text-center" id="menu">
              <li class="list-group-item">
                <router-link to="/">
                  <span class="menu-icon mx-auto"><i class="mdi mdi-home-outline"></i></span>
                  <span>Home</span>
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/blog">
                  <span class="menu-icon mx-auto"><i class="mdi mdi-grid-large"></i></span>
                  <span>Blog</span>
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/about">
                  <span class="menu-icon mx-auto"><i class="mdi mdi-account-outline"></i></span>
                  <span>About</span>
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/contact">
                  <span class="menu-icon mx-auto"><i class="mdi mdi-chat-processing-outline"></i></span>
                  <span>Contact</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <!-- End Navbar -->
      </div>
  </div>
</template>
<style scoped>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/materialdesignicons.min.css";
@import "../assets/css/navigator.css";
</style>