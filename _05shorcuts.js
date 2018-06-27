new Vue({
  el: '#app',
  data: {
    link:'http://google.com'
  },
  methods: {
    changeLink: function(step, event){
      this.link = 'http://apple.com';
    }
  }
});

