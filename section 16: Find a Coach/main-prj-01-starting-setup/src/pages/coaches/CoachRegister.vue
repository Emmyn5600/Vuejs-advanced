<template>
  <div>
    <section>
      <base-card>
        <h2>Register as a developer now!</h2>
        <coach-form @save-data="saveData"></coach-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: { CoachForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      //   this.$router.push('/coaches')
      this.$router.replace('/coaches');
    },
  },
};
</script>
