<template>
  <main>
    <h2>Login</h2>
    <input
      type="text"
      @keyup.enter="login"
      v-model="newToken"
      placeholder="Enter your userToken"
    />
    <button @click="login">Log In</button>
  </main>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      newToken: "",
    };
  },
  computed: {
    ...mapGetters(["getUserToken"]),
  },
  methods: {
    ...mapMutations(["setUserToken"]),
    login() {
      const tokenPattern = /^[A-Za-z]{16}$/;

      if (tokenPattern.test(this.newToken)) {
        this.setUserToken(this.newToken);
        console.log(`Логин сохранен в LocalStorage ${this.newToken}`);

        this.$router.replace("/");
      } else {
        console.log(this.newToken);
        console.log("Токен неверного формата");
      }
    },
  },
  created() {
    if (this.getUserToken) {
      this.$router.replace("/");
    }
  },
};
</script>


<style>
</style>
