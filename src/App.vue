<template>
  <div class="row">
    <div class="col my-3 mx-auto">
      <img src="./assets/logo.png" class="logo-img"/>
    </div>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Neucha&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

.color1 {color: #29140b;}
.color2 {color: #472b21;}
.color3 {color: #6e4f3a;}
.color4 {color: #9d7a5b;}
.color5 {color: #d3b282;}
.color6 {color: #908286;}

body {
  height: 100%;
  background-color: #6e4f3a !important;
}

@font-face {
    font-family: CYNPiatakin;
    src: url("./assets/font/CYN_Piatakin.otf") format("opentype");
}

#app {
  font-family: 'CYNPiatakin', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d3b282;
}

.logo-img {
  width: 15rem;
}

/* Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) { 
  .card-body {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  } 
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .card-body {
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
  } 
} 

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
  .card-body {
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
