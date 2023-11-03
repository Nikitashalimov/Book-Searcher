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
      userToken: "",
    };
  },
  methods: {
    login() {
      const tokenPattern = /^[A-Za-z]{16}$/;

      if (tokenPattern.test(this.userToken)) {
        console.log(this.userToken);
        console.log("Успешный вход");
      } else {
        console.log(this.userToken);

        console.log("Токен неверного формата");
      }
    },
  },
};
</script>



<style>
</style>
