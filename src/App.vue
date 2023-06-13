<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      base_api: "http://127.0.0.1:8000",
      projects_api: "/api/projects",
      projects: [],
    };
  },
  mounted() {
    axios
      .get(`${this.base_api + this.projects_api}`)
      .then((response) => {
        this.projects = response.data.projects;
        console.log(this.projects);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<template>
  <div class="container">
    <h1>My projects</h1>
    <div class="row">
      <div class="col-12" v-for="project in projects">
        <div class="card">
          <h2>{{ project.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
