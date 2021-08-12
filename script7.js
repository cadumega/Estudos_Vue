function bandeira (pais) {               //criar fç bandeira e essa fç é simples recebe nome do país e retorna o html do img. 
  return'<img src="./'+pais+'.png" >';
}

// Vue.component("brazil" ,{                    //onde iremos colocar o nome do componente "brazil, e o segundo varias propriedades, 2 principais template(resultado do html) ,crase"
//   // template:`<p> Alguma coisa</p>`         //consigo criar um site inteiro aqui
//   template:bandeira('brazil')
// })

// Vue.component("argentina" ,{  
//   template:bandeira('argentina')
// }) //+ teria muitos componentes, maneira mais prática abaixo:


Vue.component("pais", {              //irei colocar a lista de props = propriedades
  props:['bandeira', 'continente'],
  template: '<p v-html="bandeira + continente"></p>'        //irá aparecer o nome china
});


let app = new Vue ({                      // Simples associação
  el:'#app',
  data:{
    argentina:bandeira('argentina'),
    brazil:bandeira('brazil'),
    china:bandeira('china'),
    uk:bandeira('uk'),
    usa:bandeira('usa')
  },
});

