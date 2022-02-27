<template>
  
<div>

<div class="text-center pttest">
  <p class="text-indigo-200 text-1xl">Bem vindo, você descobriu uma pagina secreta, parabens.</p>
  <p class="text-indigo-200 text-1xl">Irei te dar um cupom de 600k de coins no back<a v-on:click="say('Volte a pagina inicial e procure a letra ... e depois ...')">+</a></p>
    <p class="text-indigo-200 text-1xl">Basta resolver o misterio por tras desta pagina.</p>
      <p class="text-indigo-200 text-1xl" v-on:click="say('Um lugar verde que mostra os logs de uma pagina talvez o ... do navegador')">Ajude-me a começar.</p>
</div>

  </div>
</template>

<style>
.pttest {
  padding-top: 300px
}
</style>

<script>


export default {
  data () {
      return {
          count: 0
      }
  },
  methods: {
    say: function (message) {
      alert(message)
      console.log(`Parabens você me achou hahahaha`);
      console.log(`não seja experto contando vitoria, não é simples como você imagina.`);
      console.log('assim como um sinal de + tem um significado na matematica');
      console.log('aqui tambem tem !')
    }
  }
}

</script>

<style>
body {
  background-color: rgba(0, 0, 0, 0.877)
}
</style>