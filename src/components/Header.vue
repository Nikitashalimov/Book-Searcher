<template>
  <header>
    <h1>Book researcher</h1>
    <div>
      <span>user:</span>
      <h3>{{ getUserToken }}</h3>
      <button @click="logout">exit</button>
    </div>
  </header>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["getUserToken"]),
  },
  methods: {
    ...mapMutations(["exitUserToken"]),
    logout() {
      this.exitUserToken();
      this.$router.replace("/login");
    },
  },
};
</script>


<style>
</style>