<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstname', 'lastname'],
  setup(props, context) {
    const uName = computed(() => {
      return props.firstname + ' ' + props.lastname;
    });

    const age = inject('userAge')

    console.log(context);

    // context.emit('save-data', 1); //this.$emit('save-data', 1)
    //   computed: {
    //     userName() {
    //       return this.firstname + ' ' + this.lastname;
    //     },
    //   },
    //   data() {
    //     return {};
    //   },
    return { userName: uName, age}
  },
};
</script>
