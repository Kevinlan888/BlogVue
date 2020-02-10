<template>
  <div class="wrapper">
    <div>
      <h1 class="text">404</h1>
      <div class="descriptionbox">
        <h2 class="description">The page could not be found.</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text {
  display: inline-block;
  border-right: 1px solid #000;
  color: #000;
  padding: 10px 23px 10px 10px;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 500;
}
.descriptionbox {
  display: inline-block;
}
.description {
  color: #000;
  font-size: 12px;
  font-weight: 100;
}
</style>