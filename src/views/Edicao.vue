<template>
  <div class="edicao">
      <NavBar :spacer="true"/>
      <div class="mes-wrapper" v-for="mes in eg" v-bind:key="mes">
          <h2>{{mes[0].mes}}</h2>
          <div class="dia-wrapper" v-for="dia in mes" v-bind:key="dia">
              <h3>{{dia.dia}} de {{dia.mes}} - <b>{{dia.title}}</b></h3>
              <div class="content-wrapper" v-for="img in dia.imagens" v-bind:key="img">
                  <ul>
                    <li v-for="passo in dia.passos" :key="passo">{{passo}}</li>
                  </ul>
                  <div class="images-wrapper">
                    <div class="image-box ori">
                        <img v-if="img.ori" :src="'/images/ori/'+img.ori+'.jpg'" :alt="dia.title">
                    </div>
                    <div class="image-box alt">
                        <img v-if="img.alt" :src="'/images/alt/'+img.alt+'.jpg'" :alt="dia.title">
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import projects from "../stores/projects.js"
import NavBar from "../components/NavBar.vue"

export default {
    components: {
        NavBar
    },
    data() {
        return {
            eg: projects.data.disciplinas.eg,
        }
    }
}
</script>

<style>
.mes-wrapper h2 {
    font-size: 2rem;
}

.dia-wrapper h3 {
    font-weight: lighter;
}

.dia-wrapper b {
    font-size: 1.3em;
    vertical-align: baseline;
}

.content-wrapper {
    max-width: 1000px;
    margin: 0 auto;
}

.images-wrapper {
    display: flex;
    align-content: center;
    justify-content: center;
    max-width: 1000px;
}

.image-box {
    width: 45%;
}

.images-wrapper img {
    width: 100%;
}

.edicao ul {
    list-style-type: none;
}

</style>