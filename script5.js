function bandeira (pais) {               //criar fç bandeira e essa fç é simples recebe nome do país e retorna o html do img. 
  return'<img src="/paises'+pais+'.png" >';
}


let app = new Vue ({                      // Simples associação
  el:'#app',
  data:{
    pais:"",               //prop
    argentina:bandeira('argentina'),
    brazil:bandeira('brazil'),
    china:bandeira('china'),
    uk:bandeira('uk'),
    usa:bandeira('usa')
  },
  methods:{

  }
});

app.pais= 'brazil';



// function bandeira (pais) {               //criar fç bandeira e essa fç é simples recebe nome do país e retorna o html do img. 
//   return'<img src="/paises'+pais+'.png" >';
// }


// let app2 = new Vue ({                      // Simples associação
//   el:'#app2',
//   data:{
//     pais:"",               //prop
//     argentina:bandeira('argentina'),
//     brazil:bandeira('brazil'),
//     china:bandeira('china'),
//     uk:bandeira('uk'),
//     usa:bandeira('usa')
//   },
//   methods:{

//   }
// });

// app.pais= 'brazil';
