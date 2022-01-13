<template>
    <div class="header fixed">
        <div id="logo">
            <img src="../assets/logo.svg" alt="logo">
        </div>
        <div class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/sobre">About</router-link>
            <router-link to="/edicao">Edição Gráfica</router-link>
        </div> 
    </div>

    <div v-if="spacer" class="spacer"></div>
    
</template>

<script>
export default {
    props: {
        spacer: Boolean,
    }
}
</script>

<style>
    .spacer {
        width: 100%;
        padding: 2.5rem 0;
    }

    .header {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        width: 100%;

        padding: 1.2rem 2rem;

        font-family: 'Alata', sans-serif;     
        
        position: fixed;
    }

    #logo{
        width: 5rem;
        position: absolute;

        left: 1rem;
        top: 1rem;
    }

    #logo img {
        width: 100%;
        vertical-align: bottom;
    }

    .nav {
        display: flex;
        justify-content: space-between;

        width: 60%;

        counter-reset: nav-counter;
    }

    .nav a {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;

        font-size: .9rem;

        position: relative;
    }

    .nav a::before {
        counter-increment: nav-counter;
        content: '0' counter(nav-counter);
        
        position: absolute;
        left: -2rem;
    }

    .nav a.router-link-exact-active {
  color: hsl(0, 47%, 49%);
}
</style>