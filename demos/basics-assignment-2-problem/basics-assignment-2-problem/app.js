const app = Vue.createApp({
  data() {
    return {
        name: '',
        inputData: '',
        inputDataEnter:''
    }
  },

  computed: {
    fullname(){
        if(this.name === ''){
            return '';
        }
        return this.name +' ' + 'messi'
    }
  },

  methods:{
    showAlert(){
       alert('Hello there')
    },

    showInput(event){
       this.inputData = event.target.value
    },

    showInputEnter(){
       this.inputDataEnter = this.inputData
    },

    resetInput(){
        this.inputData = '',
        this.inputDataEnter = ''
    }
  }
});

app.mount('#assignment')