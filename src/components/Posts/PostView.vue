<template>
  <div>
    <div class="container">
      <MarkdownPro v-model="text" :isPreview="true" />
    </div>
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

<style scoped>
.container {
  padding-top: 156px;
}

.markdown.border {
  border: 0 !important;
}
</style>