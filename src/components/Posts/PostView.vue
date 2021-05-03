<template>
  <div>
    <div class="container">
      <div class="nameWrapper">
        <p>
          <span></span>
          {{ title }}
          <span></span>
        </p>
      </div>
      <div class="contentWrapper">
        <MarkdownPro v-model="text" :isPreview="true" />
      </div>
    </div>
  </div>
</template>

<script>
const Request = require("@/utils/HttpUtil");
import { MarkdownPro } from "vue-meditor";
export default {
  name: "PostView",
  components: {
    MarkdownPro,
  },
  created: function () {
    this.GetPost();
  },
  data: function () {
    return {
      title: "",
      slug: "",
      text: "",
    };
  },
  watch: {
    $route: "GetPost",
  },
  methods: {
    GetPost: async function () {
      var slug = this.$route.params.slug;
      if (slug) {
        var post = await Request.GetPost(slug);
        if (post) {
          this.title = post.title;
          this.slug = post.slug;
          this.text = post.markDown;
          document.title = post.title;
        } else {
          this.$router.push("/404");
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 156px;
}
.nameWrapper {
  margin: 0px 16px 0px 16px;;
}
.nameWrapper p {
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
}
.nameWrapper p span {
  display: inline-block;
  width: 16px;
  height: 10px;
  background: lightblue;
}
.contentWrapper {
  margin-top: 6px;
}
.markdown {
  height: auto !important;
}
.markdown.border {
  border: 0 !important;
}
@media (max-width: 420px) {
  .container {
    padding-top: 90px;
  }
}
</style>