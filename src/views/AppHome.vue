<script>
export default {};
</script>
<template>
<main>
  <div class="jumbotron pt-5">
    <div class="container">
      <div class="jumbo_text ps-3 ps-md-0">
        <h1 class="pb-3">Hi, I'm Alessia!</h1>
        <h3 class="pb-3">I'm a Junior Fullstack Developer to be!</h3>
        <router-link :to="{'name': 'projects'}" class="btn_proj btn btn-dark py-2 px-4 text-white">
          Take a look at my projects!
        </router-link>
        <router-link :to="{'name': 'projects'}" class="btn_proj btn btn-light py-2 px-4 text-dark ms-2">
          Contact me
        </router-link>
      </div>
    </div>
   
  </div>
</main>
</template>

<style lang="scss" scoped>
  main {
    height: calc(100vh - 78px);
    height: calc(100svh - 78px);
  }
</style>
