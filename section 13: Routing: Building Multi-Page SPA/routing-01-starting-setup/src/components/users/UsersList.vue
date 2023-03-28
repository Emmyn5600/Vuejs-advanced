<template>
  <div>
    <button @click="confirmInput">confirm</button>
    <button @click="saveChanges">Save Change</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false,
    };
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      this.$router.push('/teams');
      // this.$router.back()/forward()
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },

  beforeRouteEnter(to, from, next) {
    console.log('UserList Cmp beforeRouterEnter');
    console.log(to, from);
    next();
  },

  beforeRouteLeave(to, from, next) {
    console.log('UserList Cmp beforeRouteLeave');
    console.log(to, from);

    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        'Are you sure? You got unsaved changes!'
      );
      next(userWantsToLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
