<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer />
    <goTop />
  </div>
</template>

<script>
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import goTop from "./pages/goTop/GoTop";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    goTop
  },
  created() {
    setTimeout(() => {
      document.body.removeChild(document.getElementById("Loading"));
    }, true);
  }
};
</script>
