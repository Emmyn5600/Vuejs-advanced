const app = Vue.createApp({
  data() {
    return {
      name: "NSABIMANA Emmanuel",
      age: 24,
      secname: "",
      confirmedName: "",
      counter: 10,
      imageUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fobamawhitehouse.archives.gov%2F1600%2Fpresidents%2Fbarackobama&psig=AOvVaw3voVOzUSNdhlncsmc755wC&ust=1678859027233000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCHm7Hb2v0CFQAAAAAdAAAAABAE",
    };
  },
  methods: {
    add() {
      this.counter++;
    },

    reduce() {
      this.counter--;
    },

    resetInput(){
      this.name = ''
    },

    ageInFive() {
      return this.age + 5;
    },

    outRandom() {
      const randonNumber = Math.random();
      return randonNumber;
    },

    setName(event, lastName) {
      this.secname = event.target.value + " " + lastName;
    },

    confirmInput() {
      this.confirmedName = this.secname;
    },

    submitForm() {
      alert("submitted");
    },
  },
});

app.mount("#assignment");
