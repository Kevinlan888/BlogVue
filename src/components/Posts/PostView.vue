<template>
  <div>
    <MarkdownPro v-model="text" :isPreview="true" />
  </div>
</template>

<script>
const Request = require("@/utils/HttpUtil")
import { MarkdownPro } from 'vue-meditor'
export default {
  name: "PostView",
  components: {
    MarkdownPro
  },
  created: function() {
    console.log("666");
    this.GetPost();
  },
  data: function() {
    return {
      title: "",
      slug: "",
      text: ""
    };
  },
  watch: {
    $route: 'GetPost'
  },
  methods: {
    GetPost: async function() {
      var slug = this.$route.params.slug;
      if (slug) {
        var post = await Request.GetPost(slug);
        if (post) {
          this.title = post.title;
          this.slug = post.slug;
          this.text = post.markDown;
          document.title = post.title;
        } else {
          this.$router.push("/404")
        }
      }
    },
  }
};
</script>

<style>
</style>