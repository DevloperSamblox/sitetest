<template>

  <div class="pttest text-center text-indigo text-1xl">
    <h1 v-if="error.statusCode === 404">40<a href="/test">4</a></h1>
    <h1 v-else>Um erro ocorreu ao procurar a pagina.</h1>
    <NuxtLink to="/">Voltar a pagina inicial</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>



<style>
.pttest {
  padding-top: 300px
}
</style>

