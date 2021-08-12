let app = new Vue ({                      // Simples associação
  el:'#app',
  data:{
    nome:'Carlos'
  },
    // beforeCreate:function(){
    //     alert(this.nome);
    // }
    // created:function(){
    //     alert(this.nome);
    // }
    updated:function(){
        alert(this.nome);
    }

});



/*
beforeCreate - antes do elemento ser criado vc executa algo, influenciar um outro elemento que já esta na tela.
created - elemento é criado na memoria, mas não foi rederizado na tela ainda. Já tem acesso as informações.

beforeMount - elemento ser rederizado pela primeira vez, foi montado.
Mounted - foi rederizado

beforeUpdate - item a disposição, não é parte da sequencia, só se acontecer algo para rodar
updated - registra o nove nome, primeiro roda o before depois o updated.
//Atualizando no console:
 app.nome='João';
 + UTILIZADO , influencia outro elemento que esta na tela.

beforeDestroy
destroyed - pouco utilizado, mas de destruir elemento
*/