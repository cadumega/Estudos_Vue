let app = new Vue ({                      // Simples associação
  el:'#app',
  data:{
      url:'https://google.com'
  },
  methods:{
    fazAlgumaCoisa:()=>{
      alert('Fez!')
    }
  }
});