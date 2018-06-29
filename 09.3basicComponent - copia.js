// Store in a variable if you want access to your instance from outside 
Vue.component('hello',{
  template: '<h1>Hello!</h1>'
});
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
  }
});

