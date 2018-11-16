<template>
  <div id="app">
    <Header/>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {Header}
}
</script>

<style>
#app {
}
</style>
