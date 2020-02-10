<template>
  <div>
    <nav class="header">
      <Header />
    </nav>
    <div>
      <router-view></router-view>
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
.header{
  height: 120px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: .5rem 1rem;
  transition: height .5s, line-height .5s;
}
</style>