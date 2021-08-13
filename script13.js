let app = new Vue ({                      // Simples associação de prop
  el:'#app',
  data:{      //proprs
    nome:"Carlos",
    numero:5
  },
  // computed:{        //criar uma prop computada , //posso fazer por método também
  //     nomeInvertido:function() {   
  //       return this.nome.split('').reverse().join('')  // criei um método uma fç que é uma prop computada //fazer a msm coisa q fiz no html, fica + orgnaizado
  //     } 
  methods:{              
      nomeInvertido:function() {   
      return this.nome.split('').reverse().join('')  // criei um método uma fç que é uma prop computada //fazer a msm coisa q fiz no html, fica + orgnaizado
      },
      aleatorioFuncao:function(){
        let aleat = Math.floor(Math.random()*100);
        return this.numero+ "+" +aleat+ "=" +(this.numero+aleat);
     }
   },

   computed:{
      aleatorio:function(){
        let aleat = Math.floor(Math.random()*100);
        return this.numero+ "+" +aleat+ "=" +(this.numero+aleat);
     }
   }
});

//Se precisar gerar algo só uma vez, use a computada, evita o processamento extra desnecessário.
// Se for necessário que seja executado sempre que for chamado ,utilize o método.
 
// Propriedade computada gerou e salvou ,meio q como cache, aleatorio so muda se eu mudar numero
 // Método toda vez que é chamado, requer mais processamento