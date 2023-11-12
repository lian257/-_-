<template>
  <div v-html="externalHtml"></div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      externalHtml: ''
    }
  },
  mounted() {
    axios.get('../responsive-book-website-main/index.html').then(response => {
      this.externalHtml = response.data;
    });
  }
}
</script>

