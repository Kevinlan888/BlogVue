<template>
  <div>
    <nav class="header">
      <Header />
    </nav>
    <router-view class="routerview"></router-view>
    <div class="footer">
      <div class="container">
        <span class="footersaying">Last, but not least</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
export default {
  name: "Index",
  components: {
    Header
  }
};
</script>

<style scoped>
.header {
  height: 120px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.5rem 1rem;
  transition: height 0.5s, line-height 0.5s;
}
.routerview {
  min-height: 100vh;
}
.footer {
  background: #282828;
}
.footersaying {
  text-align: center;
  font-family: "Lobster-Regular";
  font-size: 1.75rem;
  color: #fff;
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>