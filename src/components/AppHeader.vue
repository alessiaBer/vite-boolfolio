<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <nav
      class="navbar flex-md-nowrap py-3 px-4 align-items-center container-md"
    >
      <router-link class="navbar-brand col-md-3 col-lg-2 mr-0" :to="{'name': 'home'}">ciao.quore</router-link>
      <!-- <button class="navbar-toggler d-md-none collapsed ms-auto" type="button" data-toggle="collapse"
                      data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button> -->
      <ul class="d-flex list-unstyled gap-3 m-0 pe-2">
        <li><router-link :to="{'name': 'projects'}" class="text-white">Projects</router-link></li>
        <li><router-link :to="{'name': 'contacts'}" class="text-white">Contacts</router-link></li>
      </ul>

      <div class="resume_btn">
        <a href="#" class="text-white">Resume</a>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style lang="sass"></style>
