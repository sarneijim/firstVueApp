new Vue({
  el: '#app',
  data: {
    counter:0,
    counter2:0,
    counter3:0,
    secondCounter3:6,
    result:''
  },
  // Computed es cuando es como una propiedad, es lo mismo pero no necesita ()
  computed: {
    output: function() {
      console.log('Computed');
      return this.counter3 > 5 ? 'Greater 5' : 'Smaller 5';
    }
  },
  methods: {
    // Option 1
    increase: function(){
      this.counter ++;
      this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    },
    decrease: function(){
      this.counter --;
      this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    },
    // Option 2
    result2: function(){
      return this.counter2 > 5 ? 'Greater 5' : 'Smaller 5'
    },
    // Option 3
    result3: function(){
      console.log('Method');
      return this.counter3 > 5 ? 'Greater 5' : 'Smaller 5'
    }
  }
});

