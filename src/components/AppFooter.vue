<script>
export default {
    name: 'AppFooter'
};
</script>

<template>
    <footer>
        <div style="height: 70px; overflow: hidden;" ><svg viewBox="0 80 500 70" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-0.27,111.03 C149.99,150.00 350.17,35.05 501.41,104.13 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #E64298;"></path></svg></div>
        <div class="container text-white text-center py-4">
            <span class="d-block pb-4">
                Made with <font-awesome-icon icon="fa-solid fa-heart" /> + <font-awesome-icon icon="fa-solid fa-brain" /> by A. B. 
            </span>
            <span class="social d-block">
                <a class="text-white px-2 fs-5" href="">
                    <font-awesome-icon icon="fa-brands fa-github" />
                </a>
                <a class="text-white px-2 fs-5" href="">
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </a>
                <a class="text-white px-2 fs-5" href="">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
            </span>
        </div>
    </footer>
</template>

<style lang="sass" scoped></style>
