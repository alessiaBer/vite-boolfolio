<script>
import axios from "axios";
export default {
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
  <div class="container projects_container">
    <h1 class="pb-4">My projects</h1>
    <div class="row">
      <div class="col-12" v-for="project in projects">
        <div class="card d-flex">
          <div class="card_left">
            <img
              :src="base_api + '/storage/' + project.project_image"
              :alt="project.title"
            />
          </div>
          <div class="card_right">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped></style>
