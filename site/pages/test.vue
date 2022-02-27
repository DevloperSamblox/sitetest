<template>
  <div>
      <div class="page">
      <p class="text-indigo-500 text-2xl text-center pg">Obrigado por participar clicke aqui para  <a v-on:click="say('Seu cupom e: back6585155151 para resgatar use !rsgcupom (cupom)')">resgatar</a></p>

    
      </div>
      <div class="py text-center">
        
      </div>
  </div>
</template>

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
   font-family: 'Indie Flower', cursive;
     background-color: whitesmoke;
}
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}
.pg { 
    padding-top: 300px
}

.py { 
    padding-top: 100px
}
</style>