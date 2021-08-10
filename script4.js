let app = new Vue ({
  el:"#app",
  data:{
      nome:"Carlos",        // dados que chamamos de prop
      idade:90
  },
methods: {             // criar fç que iremos executar dentro do nosso elemento
    mostrar: (nome, idade) =>{
        let txt = ' Olá, ' +nome+' - '+idade+'anos';
        return txt;
    },
    testar: ()=> {             //fç anônima, iremos usar de diversas formas
      return ' Testando 1,2,3...';
    }

  }
});