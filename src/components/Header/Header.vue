<template>
  <!-- <el-menu mode="horizontal" :router="true">
      <el-menu-item index="/home">Home</el-menu-item>
      <el-menu-item index="/archive">Archive</el-menu-item>
      <el-menu-item index="/">About</el-menu-item>
      <el-menu-item index="/">Contact</el-menu-item>
  </el-menu>-->
  <div class="wrapper container">
    <router-link to="/Home" class="navbrand" :class="navcolorName">Kevin Lan</router-link>
    <div class="navcontent">
      <ul class="navbar-nav nav-automar">
        <li><router-link :class="navcolorName" to="/">Recent</router-link></li>
        <li><router-link :class="navcolorName" to="/Archive">Archive</router-link></li>
      </ul>
      <ul class="navbar-nav">
        <li><router-link :class="navcolorName" to="/">About</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  created() {
    this.changeStyle(this.$route);
  },
  data() {
    return {
      isLogged: false,
      navcolorName: 'navcolorwhite'
    };
  },
  watch: {
    $route(to, from) {
      this.changeStyle(to);
    }
  },
  methods: {
    changeStyle(to) {
      if (to.name === 'Archive') {
          this.navcolorName = 'navcolorblack';
      } else {
        this.navcolorName = 'navcolorwhite';
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
.navbrand {
  display: inline-block;
  font-size: 1.75rem;
  white-space: nowrap;
  text-decoration: none;
  color: #fff;
  font-family: 'Lobster-Regular';
}
.navcontent {
  display: flex;
  align-items: center;
  flex-basis: 100%;
}
.navbar-nav {
  display: flex;
  flex-direction: row;
  list-style: none;
}
.navbar-nav li {
  padding-left: 10px;
  padding-right: 10px;
}
.navbar-nav li a {
  text-decoration: none;
  font-family: 'Lobster-Regular';
  font-size: 1.2rem;
}
.nav-automar {
  margin-right: auto;
}
.navcolorwhite {
  color: #fff;
}
.navcolorblack {
  color:#000;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 962px;
  }
}
</style>