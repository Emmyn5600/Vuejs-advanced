<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goalIsVisible">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleButtonVisiblity">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { reactive } from 'vue';

export default {
  data(){
    return {
      goal : 'Finish the course',
      goalIsVisible: false
    }
  },

  methods:{
    toggleButtonVisiblity(){
      this.goalIsVisible = !this.goalIsVisible
    }
  }
  // setup() {
  //   // const courseGoal = ref('Finish vue course');
  //   // const isCourseVisible = ref(false);
  //   // const courseData = ref({
  //   //   goal: 'Finish vue course',
  //   //   goalVisibility : false
  //   // })

  //   const courseData = reactive({
  //     goal: 'Finish vue course',
  //     goalVisibility: false,
  //   });

  //   const toggleButtonVisiblity = () => {
  //     // isCourseVisible.value = !isCourseVisible.value;
  //     // courseData.value.goalVisibility = !courseData.value.goalVisibility
  //     courseData.goalVisibility = !courseData.goalVisibility;
  //   };

  //   return { goal: courseData.goal, courseData, toggleButtonVisiblity };
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
