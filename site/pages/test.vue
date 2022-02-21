<template>
  <div>
      <div class="page">
      <p class="text-indigo-500 text-2xl text-center pg">Você ficou 30 minuntos parado em um site !</p>
      <p class="text-indigo-500 text-1xl text-center">Você foi transferido para este site que irá te manter 
          <br>acolhido enquanto esta AFK.
      </p>
    
      </div>
      <div class="py text-center">
        
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Gothic+A1:wght@500&family=Indie+Flower&family=KoHo:wght@300&family=Lexend+Deca:wght@100;800&family=Patua+One&family=Shadows+Into+Light&display=swap');
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