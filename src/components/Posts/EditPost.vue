<template>
  <div>
    <div class="container">
      <div>
        <el-row class="inputrow">
          <el-col :span="12">
            <div class="grid-content bg-purple postinline">
              <span>标题:</span>
              <el-input
                class="postinput"
                placeholder="请输入标题"
                v-model="title"
                clearable
              ></el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light postinline">
              Slug:
              <el-input
                class="postinput"
                placeholder="请输入Slug"
                v-model="slug"
                clearable
              ></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="displayarea">
        <MarkdownPro v-model="markdown" />
      </div>
      <el-button class="btnConfirm" v-on:click="Confirm">确定</el-button>
    </div>
  </div>
</template>

<script>
import { MarkdownPro } from "vue-meditor";
import { Message } from "element-ui";
const Request = require("@/utils/HttpUtil");
export default {
  name: "EditPost",
  components: {
    MarkdownPro,
  },
  created: async function () {
    await this.GetPost();
  },
  data: function () {
    return {
      postId: null,
      title: "",
      slug: "",
      markdown: "# haha",
      content: "",
      tags: "",
      dirty: true,
    };
  },
  watch: {
    title: function (newVal) {
      this.slug = this.slugify(newVal);
    },
    $route: "GetPost",
  },
  beforeRouteLeave(to, from, next) {
    if (this.dirty) {
      const answer = window.confirm("Do you really want to leave?");
      if (answer) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
  methods: {
    slugify: function (text, ampersand = "and") {
      const a = "àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ";
      const b = "aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh";
      const p = new RegExp(a.split("").join("|"), "g");
      this.slug = "123";
      return text
        .toString()
        .toLowerCase()
        .replace(/[\s_]+/g, "-")
        .replace(p, (c) => b.charAt(a.indexOf(c)))
        .replace(/&/g, `-${ampersand}-`)
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+|-+$/g, "");
    },
    ClearInput: function () {
      this.postId = null;
      this.title = "";
      this.slug = "";
      this.markdown = "";
      this.content = "";
      this.tags = "";
    },
    GetPost: async function () {
      this.ClearInput();
      var slug = this.$route.params.slug;
      if (slug) {
        var post = await Request.GetPost(slug);
        if (post) {
          this.postId = post.postId;
          this.title = post.title;
          this.slug = post.slug;
          this.markdown = post.markDown;
          this.content = post.content;
          this.tags = post.tags;
        }
      }
    },
    Confirm: async function () {
      var postData = {
        postId: this.postId,
        title: this.title,
        slug: this.slug,
        markDown: this.markdown,
        content: this.content,
        tags: this.tags,
      };
      var ret = await Request.AddOrUpdatePost(postData);
      if (ret) {
        if (ret.result) {
          this.$message({
            showClose: true,
            message: "创建成功!",
            type: "success",
            onClose: (msg) => {
              this.dirty = false;
              this.$router.push({ name: "Home" });
            },
          });
        } else {
          this.$message({
            showClose: true,
            message: ret.msg,
            type: "error",
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 126px;
}
.inputrow {
  display: flex;
  flex-direction: row;
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

.btnConfirm {
  margin-top: 12px;
}

@media (max-width: 728px) {
  .inputrow {
    flex-direction: column;
  }
  .inputrow .el-col {
    margin-top: 10px;
  }
}
</style>
