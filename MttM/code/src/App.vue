<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
/* Import all components */
import NavBar from './components/NavBar'

export default {
  components: {
    NavBar,
  },
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>
