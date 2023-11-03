<template>
  <main>
    <h2>Login</h2>
    <input
      type="text"
      @keyup.enter="login"
      v-model="userToken"
      placeholder="Enter your userToken"
    />
    <button @click="login">Log In</button>
  </main>
</template>


<script>
export default {
  data() {
    return {
      userToken: localStorage.getItem("userToken") || "",
    };
  },
  methods: {
    login() {
      const tokenPattern = /^[A-Za-z]{16}$/;

      if (tokenPattern.test(this.userToken)) {
        localStorage.setItem("userToken", this.userToken);
        console.log(`Логин сохранен в LocalStorage ${this.userToken}`);

        this.$router.replace("/");
      } else {
        console.log(this.userToken);

        console.log("Токен неверного формата");
      }
    },
  },
  created() {
    if (localStorage.getItem("userToken")) {
      this.$router.replace("/");
    }
  },
};
</script>



<style>
</style>
