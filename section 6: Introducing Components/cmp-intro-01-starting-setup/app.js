const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Emmanuel Jason",
          phone: "01234 5678 991",
          email: "emmy@localhost.com",
        },
        {
          id: "julie",
          name: "julie Jason",
          phone: "01234 5678 991",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
