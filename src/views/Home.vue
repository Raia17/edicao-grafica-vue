<template>
  <div class="home">
    <NavBar :spacer="false" :showLogo="false"/>
    <HeroSection message="new idea, new better, new future"/>
    <SocialMedia/>
  </div>
</template>

<script>
import SocialMedia from '../components/SocialMedia.vue'
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/Hero.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    HeroSection,
    SocialMedia,
  }
}
</script>
