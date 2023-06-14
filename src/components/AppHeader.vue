<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <nav
      class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-3 shadow align-items-center"
    >
      <router-link class="navbar-brand col-md-3 col-lg-2 mr-0" :to="{'name': 'home'}">> Boolfolio</router-link>
      <!-- <button class="navbar-toggler d-md-none collapsed ms-auto" type="button" data-toggle="collapse"
                      data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button> -->
      <ul class="d-flex list-unstyled gap-3 m-0 pe-2">
        <li><router-link :to="{'name': 'projects'}">Projects</router-link></li>
        <li><router-link :to="{'name': 'contacts'}">Contacts</router-link></li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<style lang="sass"></style>
