<script>
export default {};
</script>
<template>
<main>
  <div class="jumbotron pt-5 text-white">
    <div class="container pt-5">
      <div class="jumbo_text ps-3 ps-md-0">
        <h1 class="py-5">Hi, I'm ALESSIA BERTINATO</h1>
        <h3 class="pb-3 pt-5">I'm a Junior Fullstack Developer to be.</h3>

        <router-link :to="{'name': 'projects'}" class="py-2 text-white d-block d-md-inline-block text-decoration-none">
          &rarr;
          Take a look at my projects
        </router-link>
        <router-link :to="{'name': 'contacts'}" class="py-2 text-white ps-md-4 d-block d-md-inline-block text-decoration-none">
          &rarr; 
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
  svg {
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
