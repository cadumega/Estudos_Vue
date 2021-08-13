let app = new Vue ({                      // Simples associação
  el:'#app',
  data:{
    conta:'',                 //qd alterar em conta, executa algo
    aviso:'',
    resultado:'',
    timer:null
  },
  methodos: {
    fazerConta:function() {
        this.aviso = '';

        this.resultado = eval(this.conta);      //comando eval , armazena o resultado da conta

    }
  },
  watch:{
    conta:function() {         //executa essa fç toda vez q conta é modificado
        this.aviso = "Digitando...";

        if(this.timer != null) {        //zera um possível timer
          clearTimeout(this.timer);
        }

        this.timer = setTimeout(this.fazerConta, 1000);   // inicia o timer em 1 seg, se digitar outra tecla antes q acabar , irá zerar novamente
        
    }
  }
});

// olheiro que irá verificar uma prop específica, baseado em algo.
// a prop computada cria uma prop, executa só qd precisa exibir. O watcher não, olha e observa uma prop q já existe e executa qd essa prop for modificada.
