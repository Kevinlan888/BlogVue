<template>
  <div class="wrapper">
    <div class="homeimg">
      <transition name="fade">
        <div class="center" v-if="isLoaded">
          <h1 class="titlemain">Kevin Lan</h1>
          <h3
            class="selfdescription"
          >Software engineer, mainly use C#, a bit of C/C++, Self-learning through research and development.</h3>
        </div>
      </transition>
      <div class="readmore">
        <div class="readmorebox" v-on:click="readMore">
          <h4 class="readmoretext">Read More</h4>
          <div class="morepic"></div>
        </div>
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
    return {
      isLoaded: false
    };
  },
  mounted() {
    this.isLoaded = true;
  },
  methods: {
    readMore() {
      window.scrollTo(0, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homeimg {
  height: 100vh;
  background: url("/static/custombg.jpg") no-repeat;
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
  margin-top: 10px;
  font-weight: 500;
  font-size: 1.75rem;
  font-family: "DancingScript-Regular";
  color: #fff;
}
.readmorebox {
  position: absolute;
  cursor: pointer;
  top: calc(100% - 126px);
  left: calc(50% - 60px);
}
.readmoretext {
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
}
.morepic {
  background: url("/static/more.svg");
  background-size: cover;
  height: 50px;
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
}
.recentact {
  background: #191919;
  padding: 10px;
}
.recentact .container {
  padding-top: 50px;
  padding-bottom: 50px;
}
.worktitle {
  font-family: "Lobster-Regular";
  font-weight: 500;
  color: #fff;
}
.content {
  padding: 15px 0 15px;
}
.contentdescription {
  color: #fff;
  height: 500px;
}
</style>
