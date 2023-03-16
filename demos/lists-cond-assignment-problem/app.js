const app = Vue.createApp({
  data(){
    return {
        enteredTask: '',
        tasks: [],
        isHidden: true
    }
  },

  computed: {
    showHide(){
        return this.isHidden ? 'Hide List' : 'Show List'
    }
  },

  methods: {
    AddTask(){
      this.tasks.push(this.enteredTask)
    },

    toggleList(){
        this.isHidden = !this.isHidden
    }
  }
})

app.mount('#assignment')