<template>
  <section class="container">
    <user-data
      :firstname="firstName"
      :lastname="lastName"
    ></user-data>
    <!-- <h2>{{ userName }}</h2> -->
    <!-- <p>{{ user }}</p> -->
    <!-- <h3>{{ age}}</h3> -->
    <button @click="setAge">Change Age</button>
    <!-- <button @click="count++">{{ count }}</button> -->
    <div>
      <input type="text" placeholder="FirstName" v-model="firstName" />
      <input type="text" placeholder="lastName" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    const uAge = ref(23);
    // const user = reactive({
    //   name: 'Emmy',
    //   age: 24,
    // });
    provide('userAge', uAge)
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);

    const setNewAge = () => {
      uAge.value = 32;
    };

    // const setFirstName =(event) =>{
    //   firstName.value = event.target.value
    // }

    const setLastName = () => {
      lastName.value = lastNameInput.value.value;
    };

    const userName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, userName], function (newValues, oldValues) {
      console.log('Old Value', oldValues[0]);
      console.log('New Value', newValues[0]);
      console.log('Old Name', oldValues[1]);
      console.log('New Name', newValues[1]);
    });

    // console.log(uAge, user);

    // setTimeout(function () {
    //   // uName.value = 'Cool';
    //   // uAge.value = '30'
    //   user.name = 'Maestro';
    //   user.age = 30
    // }, 2000);

    return {
      firstName,
      setLastName,
      lastNameInput,
      lastName,
      setAge: setNewAge,
      userName,
      age: uAge,
    };
  },
  // data() {
  //   return {
  //     userName: 'Emmy1',
  //  age : 31
  //   };
  // },
  // methods:{
  //   setNewAge(){
  //     this.age = 32
  //   }
  // }

  // watch: {
  //   age(val){
  //     console.log(val);
  //   }
  // }
  // provide(){
  //   return { age: this.age}
  // }
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
