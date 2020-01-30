<template>
  <div>
    <div>
      <div class="postinfo">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple postinline">
              <span>标题:</span>
              <el-input class="postinput" placeholder="请输入标题" v-model="title" clearable></el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light postinline">
              Slug:
              <el-input class="postinput" placeholder="请输入Slug" v-model="slug" clearable></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="displayarea">
      <MarkdownPro v-model="markdown" />
    </div>

    <el-button class="btnConfirm" v-on:click="Confirm">确定</el-button>
  </div>
</template>

<script>
import { MarkdownPro } from "vue-meditor";
const Request = require("@/utils/HttpUtil");
export default {
  name: "EditPost",
  components: {
    MarkdownPro
  },
  created: async function() {
    await this.GetPost();
  },
  data: function() {
    return {
      postId: null,
      title: "",
      slug: "",
      markdown: "# haha",
      content: "",
      tags: ''
    };
  },
  watch: {
    title: function(newVal) {
      this.slug = this.slugify(newVal);
    },
    $route: "GetPost"
  },
  methods: {
    slugify: function(text, ampersand = "and") {
      const a = "àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ";
      const b = "aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh";
      const p = new RegExp(a.split("").join("|"), "g");
      this.slug = "123";
      return text
        .toString()
        .toLowerCase()
        .replace(/[\s_]+/g, "-")
        .replace(p, c => b.charAt(a.indexOf(c)))
        .replace(/&/g, `-${ampersand}-`)
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+|-+$/g, "");
    },
    ClearInput: function() {
      this.postId = null;
      this.title = "";
      this.slug = "";
      this.markdown = "";
      this.content = "";
      this.tags = "";
    },
    GetPost: async function() {
      this.ClearInput();
      var slug = this.$route.params.slug;
      if (slug) {
        var post = await Request.GetPost(slug);
        if (post) {
          console.log(post);
          this.postId = post.postId;
          this.title = post.title;
          this.slug = post.slug;
          this.markdown = post.markDown;
          this.content = post.content;
          this.tags = post.tags;
        }
      }
    },
    Confirm: async function() {
      var postData = {
        postId: this.postId,
        title: this.title,
        slug: this.slug,
        markDown: this.markdown,
        content: this.content,
        tags: this.tags
      };
      var ret = await Request.AddOrUpdatePost(postData);
      console.log(ret);
    }
  }
};
</script>

<style>
.postinfo {
  width: 750px;
}
.postinline {
  display: inline;
}
.postinput {
  width: 300px;
}
.displayarea {
  margin-top: 30px;
  font-family: "Microsoft YaHei", Helvetica, "Meiryo UI", "Malgun Gothic",
    "Segoe UI", "Trebuchet MS", Monaco, monospace, Tahoma, STXihei, "华文细黑",
    STHeiti, "Helvetica Neue", "Droid Sans", "wenquanyi micro hei", FreeSans,
    Arimo, Arial, SimSun, "宋体", Heiti, "黑体", sans-serif;
}
.displayarea a {
  text-decoration-line: none;
}
</style>
