// let app = new Vue ({                      // Simples associação
//   el:'#app',
//   data:{
//     primeiroNome:'',
//     segundoNome:'',
//     nomeCompleto:''
//   },
//   watch: {
//     primeiroNome:function(){
//         this.nomeCompleto = this.primeiroNome+' '+this.segundoNome;
//     },
//     segundoNome:function() {
//       this.nomeCompleto = this.primeiroNome +' '+this.segundoNome;

//     }
//   }
// });

// processamento mais rápido, watch se fosse precisar de um processamento de time, mas se é em tempo real pode usar prop computada

let app = new Vue ({                      // Simples associação
  el:'#app',
  data:{
    primeiroNome:'',
    segundoNome:''
  },

  computed: {
    nomeCompleto:function() {
      return this.primeiroNome+' '+this.segundoNome;
    }
  }
});