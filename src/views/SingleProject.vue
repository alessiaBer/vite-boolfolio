<script>
import axios from 'axios';
export default {
  data() {
    return {
      project: null,
      base_api: "http://127.0.0.1:8000/api/projects/",
    }
  },
  mounted() {
    const url = this.base_api + this.$route.params.slug
    axios
    .get(url)
    .then(response => {
      this.project = response.data.result
    })
    .catch(error => {
      console.error(error)
    })
  }
};
</script>
<template>
  <div class="container">
    <h1>{{ project.title }}</h1>
  </div>
</template>

<style lang="sass" scoped></style>