<template>
  <div>
    <el-menu mode="horizontal" :router="true">
      <el-menu-item index="/home">Home</el-menu-item>
      <el-menu-item index="/archive">Archive</el-menu-item>
      <el-menu-item index="/">About</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
      return {
          isLogged: false
      }
  }
};
</script>

<style>
</style>