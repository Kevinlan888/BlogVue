<template>
  <div class="wrapper">
    <div class="container">
      <ul class="postlist">
        <li v-for="desc in postData" :key="desc.postId" v-on:click="titleClick(desc.slug)">
          <div>
            <span>{{ desc.createDate.substring(0, desc.createDate.indexOf("T")) }}</span>
            <h2>{{ desc.title }}</h2>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const Request = require("@/utils/HttpUtil");
export default {
  name: "Archive",
  created: async function() {
    this.postData = await Request.GetAllPostDescs();
    console.log(this.postData);
  },
  data() {
    return {
      postData: []
    };
  },
  methods: {
    titleClick(slug) {
      console.log("click " + slug);
      this.$router.push("/view/" + slug);
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding-top: 136px;
}
.navbrand {
  color: #000;
}
.postlist {
  list-style-type: none;
}
.postlist li {
  padding: 20px 6px 20px 6px;
}
.postlist li:hover {
  cursor: hand;
}
.postlist li div {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.postlist li div h2 {
  position: relative;
  padding: 0 0 5px 0;
  font-family: "PlayfairDisplay-Regular";
}
.postlist li div h2::after {
  content: "";
  width: 20px;
  height: 3px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: skyblue;
}
</style>
