<template>
  <div>
    <nav class="header nav-expand" :class="scrollCls">
      <div class="headerbox container">
        <router-link to="/Home" class="navbrand" :class="changeClrCls">Kevin Lan</router-link>
        <div class="navcontent">
          <ul class="navbar-nav nav-automar">
            <li>
              <router-link :class="changeClrCls" to="/Recent">Recent</router-link>
            </li>
            <li>
              <router-link :class="changeClrCls" to="/Archive">Archive</router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li>
              <router-link :class="changeClrCls" to="/About">About</router-link>
            </li>
          </ul>
        </div>
      </div>
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
export default {
  name: "Index",
  mounted() {
    this.changeStyle(this.$route);
    document.addEventListener("scroll", this.scroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.scroll);
  },
  watch: {
    $route: function(route) {
      this.changeStyle(route);
    }
  },
  data() {
    return {
      changeClrCls: "navcolorblack",
      scrollCls: ""
    };
  },
  methods: {
    changeStyle(to) {
      if (to.name === "Home") {
        this.changeClrCls = "navcolorwhite";
      } else {
        this.changeClrCls = "navcolorblack";
      }
    },
    scroll(e) {
      if (window.scrollY >= 60) {
        this.scrollCls = "headerscroll";
      } else {
        this.scrollCls = "";
      }
    }
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
.nav-expand {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.headerscroll {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid lightblue;
  -webkit-transition: background-color 0.3s ease-out;
  -moz-transition: background-color 0.3s ease-out;
  -o-transition: background-color 0.3s ease-out;
  transition: background-color 0.3s ease-out
}
.headerscroll a {
  color: #000 !important;
}
.headerbox {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.navbrand {
  display: inline-block;
  font-size: 1.75rem;
  margin-right: 1rem;
  white-space: nowrap;
  text-decoration: none;
  color: #fff;
  font-family: "Lobster-Regular";
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
  font-family: "Lobster-Regular";
  font-size: 1.2rem;
  color: #fff;
}
.nav-automar {
  margin-right: auto !important;
}
.navcolorwhite {
  color: #fff !important;
}
.navcolorblack {
  color: #000 !important;
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

@media (min-width: 1200px) {
  .navbar-nav li {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (min-width: 992px) {
  .navbar-nav li {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media (max-width: 376px) {
  .header {
    height: 60px;
  }
}
</style>