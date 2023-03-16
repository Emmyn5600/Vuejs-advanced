const app = Vue.createApp({
  data() {
    return {
      enteredGoal: "",
      goals: [],
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredGoal);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
