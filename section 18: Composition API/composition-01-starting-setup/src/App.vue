<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <p>{{ user }}</p>
    <h3>{{ user.age }}</h3>
    <!-- <button @click="count++">{{ count }}</button> -->
  </section>
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue'

export default {
  setup() {
    

    const user = reactive({
      name: 'Emmy',
      age: 24
    })

    setTimeout(function () {
      // uName.value = 'Cool';
      // uAge.value = '30' 
      user.name = 'Maestro';
      user.age = 30
    }, 2000);

    return { user:user };
  },
  // data() {
  //   return {
  //     userName: 'Emmy1',
  //   };
  // },
};

// const uName = ref('Emmy');
// const uAge = ref(29);
// const user = ref({
//   name: 'Emmy',
//   age: 29
// })

// const count = ref(0);

// setTimeout(function () {
//   user.value.name = 'Maestro';
//   user.value.age = 32;
// }, 2000);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}

button {
  cursor: pointer;
}
</style>
