const app = Vue.createApp({
  data() {
    return {
        counter: 0
    }
  },
  methods: {
    add5(){
        this.counter += 5
    },
    add1() {
        this.counter += 1
    }
  },
  watch: {
//    counter(value) {
//     const that = this
//       setTimeout(function(){
//         if(value) {
//             that.counter = 0
//         }
//       }, 5000)
//    }
    setTo37Logic(){
        that = this
        setTimeout(function(){
            that.counter = 0 
        }, 5000)    
    }
  },
  computed: {
    setTo37Logic(){
        if(this.counter === 37){
            return this.counter;
        } else if (this.counter < 37) {
            return 'Not there yet';
        } else {
            return 'Too much!'
        }
    }
  }
})

app.mount('#assignment')