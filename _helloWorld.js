console.log("hola");
// wait until the DOM specified in <body> has loaded before executing the
// function, if you have ever used jQuery $(document).ready() it is
// basically the same thing.
document.addEventListener('DOMContentLoaded', function () {
  // create a new Vue.js instance and specify the template as well as the
  // data that should be displayed in it.
  new Vue({
    el: '#app',
    data: {
      title: 'Hello World!'
    }
  })
  // methods: {
  //   changeTitle: function(event){
  //   	this.title = event.target.value;
  //   }
  // }
})
