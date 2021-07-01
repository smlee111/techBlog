<template>
    <div class="nav" v-on:scroll.passive="onScroll">
       <p class="logo"><router-link to="/">LeeSeungMin <span>Tech</span></router-link></p>
       <ul class="menu">
           <li><router-link to="/about">About</router-link></li>
           <li><router-link to="/">Post</router-link></li>
       </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .nav {width: 100%; height: 74px; padding: 12px 32px; position: fixed;top: 0;left: 0; z-index: 999;}
    .nav .logo {float: left;}
    .nav .logo a {line-height: 50px; color:#fff; font-size:21px; font-weight: 500;}
    .nav .logo a span {font-weight: 300; opacity: .8;}
    .nav .menu {overflow: hidden; float: right;}
    .nav .menu li {float: left; margin: 0 0 0 20px;}
    .nav .menu li a {line-height: 50px; color:#fff; font-size:18px; font-weight: 500; opacity: .6;}
    .nav .menu li a.router-link-exact-active {font-weight: 600; opacity: 1;}
</style>
