<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            project: null,
            results: null,
            base_api: `${import.meta.env.VITE_HOST}/api/projects/`,
            base: import.meta.env.VITE_HOST
        };
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href;
        }
    },
    mounted() {
        const url = this.base_api + this.$route.params.slug;
        axios
            .get(url)
            .then(response => {
            if (response.data.success) {
                this.project = response.data.result;
            }
            else {
                this.$router.push({
                    name: "project-not-found",
                    params: { pathMatch: this.$route.path.substring(1).split("/") }
                });
            }
        })
            .catch(error => {
            console.error(error);
        });
    },
    components: { RouterLink }
};
</script>
<template>
<main>
  <div class="container text-white single_project d-flex flex-column flex-md-row" v-if="project">
    <div class="single_proj_left w-100">

      <h1 class="text-uppercase">{{ project.title }}</h1>
      <div class="proj_preview">
        <div class="first_img">
          <img :src="base + '/storage/' + project.project_image" :alt="project.title" width="300">
        </div>
        <div class="second_img">
          <img v-if="project.second_img" :src="base + '/storage/' + project.second_img" :alt="project.title" width="300" class="d-none">
        </div>
      </div>
    </div>
    <div class="single_proj_right pt-5 ps-md-3" v-if="project.type_id">
      <div class="type pb-3 pt-5">
        <span class="type"><strong>Type: </strong>{{ project.type.name }}</span>
      </div>
      <div class="technologies" v-if="project.technologies">
        <ul class="list-unstyled d-flex">
          <li v-for="technology in project.technologies" class="">
            <img :src="technology.tech_img_url" :alt="technology.name" height="30">
          </li>
        </ul>
      </div>
      <div class="description pt-4">
        <p>{{ project.description }}</p>
      </div>
      <div class="live_source text-uppercase">
        <a v-if="project.project_live_url" :href="project.project_live_url" target="_blank" class="text-white text-decoration-none">Go to Github &gt;</a>
        <a v-if="project.project_source_code" :href="project.project_source_code" target="_blank" class="text-white text-decoration-none">Go to Source Code &gt;</a>
      </div>
    </div>
    
    </div>
</main>
</template> 

<style lang="sass" scoped></style>