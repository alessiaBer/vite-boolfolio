<script>
import axios from "axios";
export default {
  data() {
    return {
      base_api: import.meta.env.VITE_HOST,
      projects_api: "/api/projects",
      projects: [],
    };
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href
    }
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

    <!-- <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 182.40000000000003,222.8 364.80000000000007,245.6 522,249 C 679.1999999999999,252.4 811.2,236.39999999999998 960,225 C 1108.8,213.60000000000002 1274.4,206.8 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 156.66666666666669,205.73333333333335 313.33333333333337,211.46666666666667 484,205 C 654.6666666666666,198.53333333333333 839.3333333333333,179.86666666666665 1001,177 C 1162.6666666666667,174.13333333333335 1301.3333333333335,187.06666666666666 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg> -->

    <div class="projects_container">
      <div class="container pb-0">

        <h1 class="text-uppercase mb-0 text-white">Projects</h1>
      </div>
      <div class="row" v-if="projects.length > 0">
        <div class="col-12" v-for="(project, index) in projects">
          <div style="height: 70px; overflow: hidden;" v-if="index % 2 === 0"><svg viewBox="0 80 500 70" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-0.27,121.88 C128.38,65.63 335.50,149.52 517.77,98.20 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #ffffff8f;"></path></svg></div>
          <div class="project_container proj_with_bg d-md-flex p-2" v-if="index % 2 === 0">
            <div class="container d-flex flex-column flex-md-row">

              <div class="img_wrapper position-relative flex-shrink-0">
                <img
                  :src="base_api + '/storage/' + project.project_image"
                  :alt="project.title"
                />
                <img
                  :src="base_api + '/storage/' + project.second_img"
                  :alt="project.title"
                  class="second-img position-absolute d-none d-md-inline-block"
                  v-if="project.second_img"
                />
              </div>
              <div class="card_right ps-md-3 d-flex flex-column justify-content-center text-end flex-grow-1 pe-3">
                <h2 class="text-uppercase fw-bold">{{ project.title }}</h2>
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
          <div style="height: 70px; overflow: hidden;" v-if="index % 2 === 0"><svg viewBox="0 0 500 70" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-1.12,36.03 C145.03,-20.20 381.49,112.02 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #ffffff8f;"></path></svg></div>
          <div class="project_container d-md-flex p-2 ms-auto" v-else>
            <div class="container d-flex flex-column flex-md-row">

              <div class=" text-end pe-md-3 flex-grow-1 d-flex flex-column justify-content-center">
                <h2 class="text-uppercase fw-bold text-white">{{ project.title }}</h2>
                <p class="text-white">{{ project.description }}</p>
                <router-link
                :to="{ name: 'single-project', params: { slug: project.slug } }"
                class="nav-link text-white"
                >
                More info
                </router-link>
              </div>
              <div class="img_wrapper position-relative flex-shrink-0">
                <img
                  :src="base_api + '/storage/' + project.second_img"
                  :alt="project.title"
                  class="second-img position-absolute d-none d-md-inline-block"
                  v-if="project.second_img"
                />
                <img
                  :src="base_api + '/storage/' + project.project_image"
                  :alt="project.title"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="loading text-center pt-5" v-else>
        <img :src="getImageUrl('brain-walk.gif')" alt="#" width="300" />
      </div>
    </div>
  </main>
</template>

<style lang="sass" scoped></style>
