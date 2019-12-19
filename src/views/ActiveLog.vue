<template>
  <main class="activeLog container-fluid">
    <h1>{{activeLog.date}}</h1>
    <form @submit.prevent="findFood">
      <input v-model="query" type="text" placeholder="food..." />
      <button type="submit">Find</button>
    </form>
  </main>
</template>

<script>
export default {
  name: "activeLog",
  mounted() {
    this.$store.dispatch("getActiveLog", this.$route.params.id);
  },
  computed: {
    activeLog() {
      return this.$store.state.activeLog;
    },
    searchResults() {
      return this.$store.state.searchResults;
    }
  },
  data() {
    return {
      query: ""
    };
  },
  methods: {
    findFood() {
      let query = {
        query: this.query
      };
      this.$store.dispatch("getSearchResults", query);
      this.query = "";
    }
  }
};
</script>


<style>
</style>