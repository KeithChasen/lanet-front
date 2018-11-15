<template>
  <div id="app">

    <Header/>
    <div class="content">
      <router-view></router-view>
    </div>

    This is main app
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
