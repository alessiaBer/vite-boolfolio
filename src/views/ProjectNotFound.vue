<script>
export default {
}
</script>

<template>
    <main>
        <div class="container text-center">
            <h1>\(o_o)/</h1>
            <span>Hey bro! Project not found</span>
            <router-link :to="{'name': 'projects'}" class="d-block">&LeftArrow; Go back to projects</router-link>
        </div>
    </main>

</template>


<style lang="scss" scoped>
    h1 {
        font-size: 6rem;
    }
    span {
        font-size: 2rem;
    }
</style>