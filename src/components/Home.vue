<template>
    <div class="container">
        <h2>{{welcome}}</h2>
    </div>
</template>

<script>
    export default {
        name: "home",
        computed: {
            welcome() {
                return this.$store.getters.welcome
            }
        }
    }
</script>

<style scoped>

</style>