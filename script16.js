
let app = new Vue ({                      // Simples associação
  el:'#app',
  data:{
    primeiroNome:'',
    segundoNome:''
  },

  computed: {
    nomeCompleto:{             //irei criar um objeto e não fç
      get:function() {
        return this.primeiroNome+' '+this.segundoNome;
      },
        set:function(novoValor) {     //quer alterar a prop computada
          let nomes = novoValor.split(' ');
          this.primeiroNome = nomes [0];
          this.segundoNome = nomes [1];
        }
      }
  }
});