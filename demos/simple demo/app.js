const app = Vue.createApp({
  data() {
    return {
      goalMessageA: "Hello I am learning vuejs well",
      goalMessageB: "<h2>Hello I am getting started in vuejs well</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.goalMessageA;
      } else {
        return this.goalMessageB;
      }
    },
  },
});

app.mount("#vue-data");
