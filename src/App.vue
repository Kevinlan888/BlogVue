<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view class="routeview"/>
  </div>
</template>

<script>
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  created: function(){
    const connection = new HubConnectionBuilder().withUrl("/chathub").configureLogging(LogLevel.Information).build();
    connection.on("News", function(user, message){
        console.log("News from %s:  %s", user, message);
        
    });
    connection.start();
    var token = localStorage.getItem('token');
    var name = localStorage.getItem('name');
    if (token) {
      this.set_User({token: token, name: name?name:""});
    }
  },
  methods: {
    ...mapMutations(['set_User'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.routeview{
  text-align: left;
  width: 80%;
  margin: 0 auto;
}
</style>
