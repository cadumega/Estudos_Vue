
// Iniciar uma instância de Vue:

let placar = new Vue ({
  el:'#placar',         // se fosse class do html '.placar'
  data:{              //dar a reatividade aos estados, definindo os getters e setters, recebe um objeto ou função
    n:0,
    aparecer:true
  }
});



//  Condicionar elemento do span
// Ao manipular o DOM, colocando:
//  placar.n = 3 , não mostra o span
//  placar.n = 5 , mostra o span

// DOM:
// placar.aparecer=false
// false


// LOOP - Irei criar uma array de nomes
let lista = new Vue ({
  el:'#lista',
  data:{
    nomes:[
      {nome:'Carlos', sobrenome:'Lopes', idade:30},
      {nome:'Ana', sobrenome:'Silva', idade:20},
      {nome:'Pedro', sobrenome:'Gomes', idade:10},
      {nome:'Maria', sobrenome:'Freire', idade:90},
    ]
  }
});



