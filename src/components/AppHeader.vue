<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <nav
      class="navbar flex-md-nowrap py-3 px-4 align-items-center container-md text-uppercase"
    >
      <router-link class="navbar-brand col-md-3 col-lg-2 mr-0 text-white" :to="{'name': 'home'}">> AB</router-link>
      <!-- <button class="navbar-toggler d-md-none collapsed ms-auto" type="button" data-toggle="collapse"
                      data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button> -->
      <ul class="d-flex list-unstyled gap-3 m-0 pe-2">
        <li><router-link :to="{'name': 'projects'}" class="header_link">Projects</router-link></li>
        <li><router-link :to="{'name': 'contacts'}" class="header_link">Contacts</router-link></li>
      </ul>

      <div class="resume_btn">
        <a href="https://www.linkedin.com/in/alessia-bertinato/overlay/1635537098924/single-media-viewer/?profileId=ACoAADR88xYBNB3GR2HYxBB7IL4ffvX7Pwh-Xn0" class="text-white" target="_blank">Resume</a>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style lang="sass"></style>
