<template>
  <div>
     <div class="bg-indigo-600">
    <div class="max-w-7xl mx-auto py-1 px-3 sm:px-7 lg:px-7">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden">
              Site e bot possivelmente instavel
            </span>
            
            <span class="align-center hidden md:inline">
             Estamos em atualizações frequentes, oque pode causar instabilidade no site 
             ou no bot e poderá resultar em bugs contate o suporte caso ache um !
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
<div>
  <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
  <div class="flex-none px-2 mx-2">
    <span class="text-lg font-bold ">
            Back+
          </span>
  </div> 
  <div class="flex-1 px-2 mx-2">
    <div class="items-stretch hidden lg:flex">
          
      <a href="/" class="btn btn-ghost btn-sm rounded-btn">
            Home
            </a> 
      <a href="Sobre" class="btn btn-ghost btn-sm rounded-btn">
            Sobre
            </a> 
      <a href="Suporte" class="btn btn-ghost btn-sm rounded-btn">
            Suporte
            </a> 
      <a href="infraestrutura" class="btn btn-ghost btn-sm rounded-btn">
            infraestrutura
            </a>
    </div>
  </div> 
  <div class="flex-none">
    <a href="http://google.com" target="_blank">
        <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">              
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />       
      </svg>
    </button>
         </a>
  </div> 
</div>
</div> 
<div class="overflow-x-auto">
  <table class="table w-full table-zebra">
    <thead>
      <tr>
        <th></th> 
        <th>Nome</th> 
        <th>Função</th> 
        <th>Gatilho</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>Ban</td> 
        <td>Banir uma pessoa do servidor.</td> 
        <td>!ban @pessoaAlvo</td>
      </tr>
      <tr>
        <th>2</th> 
        <td>Mute</td> 
        <td>Silenciar uma pessoa por algum tempo.</td> 
        <td>!mute @pessoaAlvo 24H</td>
      </tr>
      <tr>
        <th>3</th> 
        <td>Play</td> 
        <td>Produz uma musica.</td> 
        <td>!play @musica</td>
      </tr>
      <tr>
        <th>4</th> 
        <td>Pause or stop</td> 
        <td>Pausar uma musica que esta sendo tocada.</td> 
        <td>!pause ou !stop</td>
      </tr>
            <tr>
        <th>5</th> 
        <td>Pay</td> 
        <td>Envie uma quantia de coins para outros jogador.</td> 
        <td>!pay @pessoaAlvo @ValorX</td>
      </tr>
      <tr>
        <th>6</th> 
        <td>Paybank</td> 
        <td>Peça dinheiro emprestado pro pago</td> 
        <td>!paybank (valor minimo: 1$) (valor maximo: 100$)</td>
      </tr>
            <tr>
        <th>6</th> 
        <td>PayUnBank</td> 
        <td>Pague sua divida no pago (obrigatorio)</td> 
        <td>!payunbank</td></tr>
         <tr>
        <th>7</th> 
        <td>Deposite</td> 
        <td>deposite um valor no banco.</td> 
        <td>!deposite @valorX</td></tr>
    </tbody>
  </table>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');

body {
  font-family: 'Cabin', sans-serif;
  background-color: whitesmoke;

}
</style>