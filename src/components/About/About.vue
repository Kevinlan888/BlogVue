<template>
  <div class="container">
    <div class="cardView">
      <div class="nameWrapper">
        <p>Kevin Lan</p>
      </div>
      <div class="bioWrapper">
        <p>Software engineer</p>
        <br />
        <p>3 years of work experiences</p>
        <p>Working in a machine vision company</p>
        <p>Love to explore new things</p>
        <br />
        <p>mainly use C#， new to C++</p>
        <br />
        <p>e-mail: kevin@kevinlan.top</p>
        <p>wechat: Kevinlan888</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.container {
  padding-top: 136px;
}
.cardView {
  border: 1px dashed lightblue;
  padding: 6px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.nameWrapper p {
  font-family: "Courier New", Courier, monospace;
  font-size: 26px;
}
.bioWrapper p {
  font-family: "Courier New", Courier, monospace;
}
</style>