<template>
  <div>
    <ul>
      <li class="postList" v-for="desc in postData" :key="desc.postId" v-on:click="titleClick(desc.slug)">
        {{ desc.title }}
      </li>
    </ul>
  </div>
</template>

<script>
const Request = require("@/utils/HttpUtil");
export default {
  name: "Archive",
  created: async function () {
    this.postData = await Request.GetAllPostDescs();
  },
  data() {
    return {
      postData: []
    };
  },
  methods: {
    titleClick(slug) {
      console.log("click " + slug);
      this.$router.push('/view/' + slug);
    }
  }
};
</script>

<style>
.postList {
  list-style-type: none;
  margin-bottom: 20px;
}
.postList:hover {
  cursor: default;
  text-decoration: underline;
  color: blue;
}
</style>