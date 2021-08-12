let app = new Vue ({                      // Simples associação
  el:'#app',
  data:{
    aviso:true,
    divid:'qualquer',
    link:'https://google.com',
    n:14
  },
  methods:{
    clicou:() => {                // criando fç anonima mesmo
        alert('Evento funcionou de Clique!')
    },
    enviou:() =>{
        alert("Enviou!")
    }
  }
});