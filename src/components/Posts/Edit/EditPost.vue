<template>
  <div>
    <div>
      <div class="postinfo">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple postinline">
              <span>标题: </span>
              <el-input class="postinput" placeholder="请输入标题" v-model="postdata.title" clearable></el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light postinline">Slug: 
              <el-input class="postinput" placeholder="请输入Slug" :readonly="true" v-model="postdata.slug" clearable></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="textareawrapper">
        <span>内容:</span>
        <el-input type="textarea" class="textareainput" :rows="30" placeholder="请输入内容" v-model="postdata.text"></el-input>
      </div>
    </div>
    <div class="displayarea">
      <vue-markdown :source="postdata.text" :linkify="false" :toc="true"></vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  name: "EditPost",
  components: {
    VueMarkdown
  },
  created: function() {
    console.log(this.$route.params.slug)
    this.postdata.slug = this.$route.params.slug
  },
  data: function(val) {
    return {
      postdata: {
      title: "",
      slug: "",
      text: "# haha"
      }
    }
  },
  watch: {
    title: function(val) {
      this.slug = this.slugify(val);
    }
  },
  methods: {
    slugify(text, ampersand = "and") {
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
    }
  }
};
</script>

<style>
.postinfo{
  width: 750px;
}
.postinline{
  display: inline;
}
.postinput{
  width: 300px;
}
.textareawrapper{
  margin-top: 20px;
}
.textareainput {
  width: 100%;
  min-width: 900px;
  margin-top: 6px;
}
.displayarea {
  font-family: "Microsoft YaHei", Helvetica, "Meiryo UI", "Malgun Gothic",
    "Segoe UI", "Trebuchet MS", Monaco, monospace, Tahoma, STXihei, "华文细黑",
    STHeiti, "Helvetica Neue", "Droid Sans", "wenquanyi micro hei", FreeSans,
    Arimo, Arial, SimSun, "宋体", Heiti, "黑体", sans-serif;
}
.displayarea a {
  text-decoration-line: none;
}
</style>
