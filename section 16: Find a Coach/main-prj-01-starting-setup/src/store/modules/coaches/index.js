import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'NSABIMANA',
          lastName: 'Emmanuel',
          areas: ['frontend', 'backend', 'career'],
          description:
            "Persistent and ambitious software engineer with a desire to grow fast in this domain. Capable of ramping up quickly and efficiently, and of both working in a team and independently. Lover of remote work. Skilled in various languages, frameworks, and technologies. Built 30+ projects while completing Microverse, an online software development school that accepts less than 1% of its applicansts.",
          hourlyRate: 20,
        },
        {
          id: 'c2',
          firstName: 'Elie',
          lastName: 'HABIMANA',
          areas: ['frontend', 'career'],
          description:
            'I am Elie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 15,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
