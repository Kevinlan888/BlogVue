<template>
  <div>
    <div class="header">
      <Header />
    </div>
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

<style>
.header{
  margin-bottom: 50px;
}
</style>