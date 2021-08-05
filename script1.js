//  Criar uma var que iremos inicar a classe do Vue, como parametro passamos um objeto o Vue e iremos associar qual elemento?
let app = new Vue ({
    el:'#app',                  //elemento associado
    data:{                     //Dado interno
      frase:'Olá Mundo!',
      frase2:'Opa,tudo bem?',
      frase3:'Olá <strong>Carlos</strong>, tudo bem?'
    }
});



// Referencia na associação qro exibir text, o que mando através do html precedem um v- , como quero mostrar um text , coloco um v-text e a var q quero exibir. 

// No DOM do navegador  digite:
// app.frase3 = "Texto trocado";
// "Texto trocado"
// Troca o texto exibido no html.