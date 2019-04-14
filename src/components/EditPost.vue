<template>
    <div>
        <div class="textareawrapper">
            <textarea class="textarea" v-model="text"></textarea>
        </div>
        <div class="displayarea">
            <vue-markdown :source="text" :linkify="false" :toc="true"></vue-markdown>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
    name: 'EditPost',
    components: {
        VueMarkdown
    },
    created: function(){

    },
    data: function() {
        return{
            text: "# haha"
        }
    }
}
</script>

<style>
.textareawrapper{
    border: 2px solid #666;
    height: 300px;
    padding: 10px;
    border-radius: 15px;
}
.textarea{
    border: 0px;
    resize: none;
    width: 100%;
    height: 100%;
    outline: 0;
}
.textarea:focus{
    outline: 0;
}
.displayarea{
    font-family: "Microsoft YaHei",Helvetica,"Meiryo UI","Malgun Gothic","Segoe UI","Trebuchet MS",Monaco,monospace,Tahoma,STXihei,"华文细黑",STHeiti,"Helvetica Neue","Droid Sans","wenquanyi micro hei",FreeSans,Arimo,Arial,SimSun,"宋体",Heiti,"黑体",sans-serif;
}
.displayarea a{
    text-decoration-line: none;
}
</style>
