<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view class="routeview" />
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.routeview {
  text-align: left;
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
</style>
