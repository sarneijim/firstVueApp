// Store in a variable if you want access to your instance from outside 

var vm1 = new Vue({
  // Reference of html
  el: '#app1',
  // Object
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs);
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

console.log(vm1);
// We can't add new properties outside the instance
// vm1.newPro = "new";


// But we can change it
setTimeout(function(){
  vm1.title = 'Change by Timer';
  vm1.show();
},3000);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance',
    showParagraph: false
  },
  methods:{
    onChange: function(){
      vm1.title = 'Changed!'
    }
  }
})

// Find data natural form data

var data = {
  title: 'The third Instance'
}
var vm3 = new Vue({
  el: '#app3',
  data: data,
  methods:{
    refExample: function(){
      this.$refs.myButton.innerText = 'Modificando por $ref'
    }
  }
})

console.log(vm3.$data === data);
// Si no le pongo defino el 'el' lo puedo definir despues.
var vm4 = new Vue({
  data: {
    title: 'The fourth Instance',
  }
});
vm4.$mount('#app4');
// Add html by vue
var vm5 = new Vue({
  template: '<h1>Hello!</h1>'
});
// Opcion 1
vm5.$mount('#app5');
// Opcion 2
// vm5.$mount();
// document.getElementById('app5').appendChild(vm5.$el);

// Directamente aplicando a clase, tag,..
var vm6 = new Vue({
  el: 'tag',
  template: '<h1>By tag!</h1>'
});
// var vm6 = new Vue({
//   el: '.class',
//   template: '<h1>By class!</h1>'
// });