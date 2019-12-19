<template>
  <div class="log">
    <h1>iAte</h1>
    <form @submit.prevent="createLog">
      <input v-model="date" type="date" required />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="log in logs" :key="log._id">
        <router-link :to="{name: 'log', params: { id: log._id}}">{{ log.date }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "log",
  mounted() {
    this.$store.dispatch("getAllLogs");
  },
  data() {
    return {
      date: ""
    };
  },
  methods: {
    createLog() {
      let log = {
        date: this.date,
        foods: []
      };
      this.$store.dispatch("createLog", log);
      this.log = "";
    }
  },
  computed: {
    logs() {
      return this.$store.state.logs;
    }
  }
};
</script>