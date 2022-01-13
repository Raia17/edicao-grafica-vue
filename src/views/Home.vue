<template>
  <div class="home">
    <NavBar :spacer="false"/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
  }
}
</script>
