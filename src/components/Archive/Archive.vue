<template>
  <div>
    <ul>
      
    </ul>
  </div>
</template>

<script>
const Request = require("@/utils/HttpUtil");
export default {
  name: "Archive",
  created: async function () {
    var jObj = await Request.GetAllPostDescs();
    console.log(jObj);
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>