<template>
  <div class="wrapper">
    <div class="homeimg">
      <div class="center">
        <h1 class="titlemain">Kevin Lan</h1>
        <h3
          class="selfdescription"
        >This is some test random words, used to describe myself, just for fun, welcome you to my personal site, hahah</h3>
      </div>
    </div>
    <div class="recentact">
      <div class="container">
        <h2 class="worktitle">My work</h2>
        <div class="content">
          <h3 class="contentdescription">this is some random works I'm gonna explain, listen up!!!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homeimg {
  height: 100vh;
  background: url("/static/login_bg.svg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50%;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.titlemain {
  font-size: 5rem;
  letter-spacing: 20px;
  font-weight: 500;
  line-height: 1.1;
  font-family: "Lobster-Regular";
  color: #fff;
}
.selfdescription {
  font-size: 16px;
  line-height: 1.1;
  font-weight: 500;
  font-size: 1.75rem;
  font-family: "DancingScript-Regular";
  color: #fff;
}
.recentact {
  background: #191919;
}
.worktitle {
  font-family: 'Lobster-Regular';
  font-weight: 500;
  color: #fff; 
}
.contentdescription {
  color: #fff;
  height: 500px;;
}
</style>
