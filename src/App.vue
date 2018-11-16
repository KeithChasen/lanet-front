<template>
  <div id="app">
    <Header/>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
}
</style>
