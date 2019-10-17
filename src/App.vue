<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer />
    <div style="height:1000px"></div>
  </div>
</template>

<script>
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style>

</style>
