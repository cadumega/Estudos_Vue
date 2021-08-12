function bandeira (pais) {               //criar fç bandeira e essa fç é simples recebe nome do país e retorna o html do img. 
  return'<img src="/paises'+pais+'.svg" >';
}


let app = new Vue ({                      // Simples associação
  el:'#app',
  data:{
    argentina:bandeira('argentina'),
    brazil:bandeira('brazil'),
    china:bandeira('china'),
    uk:bandeira('uk'),
    usa:bandeira('usa')
  },
  methods:{
    paises:function(){
      return [
        {bandeira:this.argentina, continen:'América do Sul'},
        {bandeira:this.brazil, continen:'América do Sul'},
        {bandeira:this.china, continen:'Ásia'},
        {bandeira:this.uk, continen:'Europa'},
        {bandeira:this.usa, continen:'América do Norte'},
      ];
    }
  }
});
