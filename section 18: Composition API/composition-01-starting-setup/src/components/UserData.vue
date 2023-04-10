<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstname', 'lastname'],
  setup(props, context) {
    const uName = computed(() => {
      return props.firstname + ' ' + props.lastname;
    });

    const age = inject('userAge');

    console.log(context);

    onBeforeMount(function () {
      console.log('onBeforeMount');
    });

    onMounted(function () {
      console.log('onMounted');
    });

    onBeforeUpdate(function () {
      console.log('onBeforeUpdate');
    });

    onUpdated(function () {
      console.log('onUpdated');
    });

    onBeforeUnmount(function () {
      console.log('onBeforeUnmount');
    });

    onUnmounted(function () {
      console.log('onUnmounted');
    });

    // context.emit('save-data', 1); //this.$emit('save-data', 1)
    //   computed: {
    //     userName() {
    //       return this.firstname + ' ' + this.lastname;
    //     },
    //   },
    //   data() {
    //     return {};
    //   },
    return { userName: uName, age };
  },
};
</script>
