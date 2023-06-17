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
<main>
  <div class="container projects_container">
    <h1 class="pb-4">My projects</h1>
    <div class="row">
      <div class="col-12" v-for="project in projects">
        <div class="project_container d-md-flex p-2 mb-3">
          <div class="card_left">
            <img
              :src="base_api + '/storage/' + project.project_image"
              :alt="project.title"
              class="w-100"
            />
          </div>
          <div class="card_right ps-md-2">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <router-link
              :to="{ name: 'single-project', params: { slug: project.slug } }"
              class="nav-link"
            >
              More info
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
  
</template>

<style lang="sass" scoped></style>
