<template>
  <div class="hero">
      <div class="container">
          <h1>{{message}}</h1>
          <p>“Quando algo é importante para si, <b>nós fazemos</b>, mesmo que as chances não estejam a nosso favor”</p>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        message: String,
    }
}
</script>

<style scoped>
    .hero {
        width: 100%;
        height: 100vh;

        background-image: url('../assets/hero-photo.png');
        background-color: hsla(0, 0%, 100%, 0.25);
        background-blend-mode: screen;
        background-size: contain;
        background-repeat: no-repeat;
        background-position-x: 65%;
    }

    .container {
        position:absolute;
        width: 460px;

        padding: 1.8rem;

        left: 30%;
        top: 35vh;

        background-color: hsla(0, 0%, 40%, 0.3)
    }

    h1 {
        padding: 0 2rem 0 8rem;
        text-align: left;

        position: relative;

        margin-bottom: .7rem;
    }

    h1::before {
        content: "A";

        top: -1.5rem;
        left: 1rem;
        font-size: 8.6rem;

        position: absolute;
    }

</style>