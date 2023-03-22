<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name: </label>
      <input type="text" name="name" v-model="enteredName" />
    </div>
    <div>
      <label>Phone: </label>
      <input type="tel" name="email" v-model="enteredPhone" />
    </div>
    <div>
      <label>E-mail: </label>
      <input type="email" name="phoneNumber" v-model="enteredEmail" />
    </div>
    <div><button @click="submit">Add Contact</button></div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
