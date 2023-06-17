<script>
import axios from 'axios';
export default {
  data() {
    return {
      project: null,
      results: null,
      base_api: "http://127.0.0.1:8000/api/projects/",
    }
  },
  mounted() {
    const url = this.base_api + this.$route.params.slug
    axios
    .get(url)
    .then(response => {
      if(response.data.success) {
        this.project = response.data.result
      } else {
        this.$router.push({
          name: 'project-not-found',
          params: {pathMatch: this.$route.path.substring(1).split('/')}})
      }
    })
    .catch(error => {
      console.error(error)
    })
  }
};
</script>
<template>
<main>
  <div class="container" v-if="project">
    <h1>{{ project.title }}</h1>
  </div>
</main>
</template> 

<style lang="sass" scoped></style>