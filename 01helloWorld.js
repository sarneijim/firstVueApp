// wait until the DOM specified in <body> has loaded before executing the
// function, if you have ever used jQuery $(document).ready() it is
// basically the same thing.

// If you don't link in the html footer you must wait that it is ready
// document.addEventListener('DOMContentLoaded', function () {
  // create a new Vue.js instance and specify the template as well as the
  // data that should be displayed in it.
  new Vue({
    el: '#app',
    data: {
      inputWord:'Input',
      title: 'Hello World!',
      link: 'http://google.com',
      finishedLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
      changeTitle: function(event){
      	this.title = event.target.value;
        this.inputWord = event.target.value;
      },
      sayHello: function(){
        this.title = 'Hello';
        return this.title + ' Sara';
      }
    }
  });
// });
