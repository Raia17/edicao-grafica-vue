<template>
  <div class="edicao">
      <NavBar :spacer="true"/>
      <div class="sub-nav">
          <a class="sub-nav-link" id="sub-nav1" v-on:click="filterTab('cut', 1)">Corte e Alinhamento</a> / 
          <a class="sub-nav-link" id="sub-nav2" @click="filterTab('select', 2)">Seleções</a> / 
          <a class="sub-nav-link" id="sub-nav3" @click="filterTab('color', 3)">Cor</a> / 
          <a class="sub-nav-link" id="sub-nav4" @click="filterTab('composition', 4)">Composição</a> / 
          <a class="sub-nav-link" id="sub-nav5" @click="filterTab('vetor', 5)">Vetores</a>
      </div>
      <div class="mes-wrapper" :id="'mes-'+idx" v-for="(mes, idx) in eg" v-bind:key="mes">
          <h2>{{mes[0].mes}}</h2>
          <div class="dia-wrapper" :id="'dia-'+index" v-for="(dia, index) in mes" v-bind:key="dia" :class="'style-' + ((index % 2) + 1)">
              <div class="content-wrapper" v-if="tab === dia.categoria || tab == 'all'">
                  <div class="title">
                      <h3>{{dia.dia}} de {{dia.mes}} - <b>{{dia.title}}</b></h3>
                  </div>
                  <ul>
                    <li v-for="passo in dia.passos" :key="passo">{{passo}}</li>
                  </ul>
                  <div class="images-wrapper" v-for="img in dia.imagens" v-bind:key="img" @click="openTab(dia.dia, dia.mes)">
                    <div class="image-box ori">
                        <img v-if="img.ori" :src="'/images/ori/'+img.ori+'.jpg'" :alt="dia.title">
                    </div>
                    <div class="image-box alt">
                        <img v-if="img.ori" :src="'/images/alt/'+img.ori+'.jpg'" :alt="dia.title">
                    </div>
                    <div class="line"></div>
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
        NavBar,
    },
    data() {
        return {
            eg: projects.data.disciplinas.eg,
            isTabVisible: false,
            dia: 1,
            mes: 'outubro',
            tab: 'all',
            isActive: false,
        } 
    },
    methods: {
        openTab(dia,mes) {
            this.dia = dia;
            this.mes = mes;

            this.isTabVisible = !this.isTabVisible;
        },
        filterTab(filter, id){
            if (this.tab === filter) {
                this.tab = 'all';
                this.isActive = false;
            } else {
                this.tab = filter;

                let btn = document.getElementById('sub-nav'+id);
                for(let i = 1; i <= 5; i++){
                    let button = document.getElementById('sub-nav'+i);
                    button.classList.remove('active');
                }
                btn.classList.add('active');
            }
        }
    }
}
</script>

<style>
.sub-nav > * {
    cursor: pointer;
}

.sub-nav .active {
    color: hsl(0, 47%, 49%);
}

.line {
    width: 80%;
    height: 2px;

    background-color: rgb(199, 199, 199);

    margin: 2rem auto;
}

.style-1 {
    background-color: white;
    text-align: left;
}

.style-2 {
    background-color: rgb(230, 230, 230);
    text-align: right;
}

.style-2 .content-wrapper li::before, .style-1 .content-wrapper li::before  {
    counter-increment: list;
    content: counter(list);
    position: absolute;

    width: 1.3rem;
    aspect-ratio: 1/1;
    color: white;

    top:0;

    display:grid;
    place-content: center;

    z-index: 10;
}

.style-2 .content-wrapper li::after, .style-1 .content-wrapper li::after  {
    content: "";
    position: absolute;

    width: 1.3rem;
    aspect-ratio: 1/1;

    top:0;

    display:grid;
    place-content: center;

    background-color: hsl(0, 47%, 49%);
    transform: rotate(45deg);

    z-index: 9;
}

.style-2 .content-wrapper li::after, .style-2 .content-wrapper li::before {
    right: -2rem;
}

.style-1 .content-wrapper li::before, .style-1 .content-wrapper li::after {
    left: -2rem;
}

.mes-wrapper h2 {
    font-size: 3rem;
    color: hsl(0, 47%, 49%);
    margin: 1em 0;
}

.dia-wrapper .title {
    text-align: center;
    margin-bottom: 3rem;
}

.dia-wrapper h3 {
    font-weight: 400;
    color: rgb(110, 110, 110);
}

.dia-wrapper b {
    font-size: 1.3em;
    vertical-align: baseline;
    color: black;
}

.content-wrapper {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 3rem;
    padding-block: 3rem;

    counter-reset: list;
}

.images-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 800px;

    margin: 0 auto;

    gap:0;
}

.image-box {
    width: 45%;
}

.images-wrapper img {
    width: 100%;
    aspect-ratio: 13/9;
    object-fit: contain;
    background-color: rgb(0 0 0 / .05);
    outline: 2px solid rgb(200 200 200 / .8);

    vertical-align: bottom;
}

.edicao ul {
    list-style-type: none;
    margin: 0 6rem;
    margin-bottom: 1rem;
}

.edicao li {
    position: relative;
    line-height: 1.5;
}

</style>