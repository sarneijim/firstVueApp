new Vue({
  el: '#app',
  data: {
    counter:0,
    secondCounter:0
  },
  // Computed es cuando es como una propiedad, es lo mismo pero no necesita ()
  // Computed is sincrono
  computed: {
    output: function() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
    }
  },
  watch:{
    // Only make something when some data change
    // In this occasion example data.
    counter: function(value){
      // Keep my view instance in a separate variable
      // Dont have a return
      var vm = this;
      setTimeout(function(){
        vm.counter=0;
      }, 2000)
    }
  },
  methods: {
    result: function(){
      console.log('Method');
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    }
  }
});

