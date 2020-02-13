<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <transition name="fade">
      <router-view v-if="isLoaded" class="routeview" />
    </transition>
  </div>
</template>

<script>
import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
import { mapMutations } from "vuex";
import { Message } from "element-ui";
export default {
  name: "App",
  created: function() {
    const connection = new HubConnectionBuilder()
      .withUrl("/chathub")
      .configureLogging(LogLevel.Information)
      .build();
    connection.on("News", function(user, message) {
      console.log("News from %s:  %s", user, message);
      Message({
        showClose: true,
        message: message,
        type: "success"
      });
    });
    connection.start();
    console.log("refresh");
    var token = localStorage.getItem("token");
    var name = localStorage.getItem("name");
    if (token) {
      this.$store.state.user = {
        token: token,
        name: name
      };
    }
  },
  data() {
    return {
      isLoaded: false
    };
  },
  mounted() {
    this.isLoaded = true;
  },
  methods: {
    ...mapMutations(["set_User"])
  }
};
</script>

<style>
@font-face {
  font-family: "Lobster-Regular";
  src: url("/static/fonts/Lobster-Regular.ttf");
}
@font-face {
  font-family: "PlayfairDisplay-Regular";
  src: url("/static/fonts/PlayfairDisplay-Regular.ttf");
}
@font-face {
  font-family: "DancingScript-Regular";
  src: url("/static/fonts/DancingScript-Regular.ttf");
}
* {
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
.routeview {
  text-align: left;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 2.3s ease;
}
.slide-fade-leave-active {
  transition: all 2.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
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
@media (max-width: 520px) {
  .container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
