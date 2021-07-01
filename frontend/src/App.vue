<template>
  <div id="app">
    <div id="nav">
      <Nav/>
    </div>
    <div id="container">
      <Top/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Top from "@/components/Top";
export default ({
  components: {
    Nav,
    Top,
  }
})
</script>

<style lang="scss">
  @import url("./assets/css/reset.css");
  #container {min-height: 3000px; background: #F1F2F4;}
  #container .section_featured {padding: 84px calc((100% - 1160px)/2) 130px;}
  #container .section_featured .tit {height: 51px; line-height: 51px; font-size:34px; font-weight: 500; margin: 0 0 13px;}
</style>
