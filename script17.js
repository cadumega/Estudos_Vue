let app = new Vue ({                      // Simples associação
  el:'#app',
  data:{
    nomeInput:'',
    aviso:'',
    nomePronto:false,    //inicialmente será falso para não aparecer
    lista:[],
    timer:null
  },
  watch: {
    nomeInput:function() {
      if(this.timer != null) {
        clearTimeout(this.timer);
      }

      if(this.nomeInput != '') {
        this.aviso = 'Digitando...';
        this.nomePronto = false;
        this.timer = setTimeout(this.ficarPronto, 500);      //espera 1 seg para ficar pronto
      }
    }
  },
  methods:{
      ficarPronto:function(){
        this.aviso = '';
        
        if(this.nomeInput.length > 2) {
          this.nomePronto = true;
        }
    },
        add:function() {
          this.lista.push(this.nomeInput);

          this.nomeInput='';
          this.nomePronto = false;
        }
    },
    computed:{
        totalTexto:function() {
          return 'Total de nomes: ' +this.lista.length
        }
    }
});