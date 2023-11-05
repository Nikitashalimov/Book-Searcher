<template>
  <main>
    <form @submit.prevent="submit" class="form_login" v-if="!isLoading">
      <input
        ref="tokenInput"
        class="form_login_input"
        type="text"
        @keyup.enter="login"
        v-model="newToken"
        placeholder="Your token (16 Latin characters only)"
      />
      <button class="form_login_button" @click="login">Log In</button>
    </form>

    <div class="spinner" v-if="isLoading"></div>
  </main>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      newToken: "",
      isLoading: false,
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
        this.isLoading = true;
        setTimeout(() => {
          this.setUserToken(this.newToken);
          this.isLoading = false;
          this.$router.replace("/");
        }, 3000);
      } else {
        this.newToken = "";
        this.$refs.tokenInput.classList.add("invalid-token");
        setTimeout(() => {
          this.$refs.tokenInput.classList.remove("invalid-token");
        }, 400);
        return;
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
.form_login {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Main_fonts;
}

.form_login_input,
.form_login_button {
  width: 30rem;
  height: 3.2rem;
  border: 1px solid;
  border-radius: 1.5rem;
  border-color: var(--outline-color);
  background-color: var(--primary-color);
  text-align: center;
  font-size: 1.6rem;
}

.form_login_input {
  outline: none;
}

.form_login_input:focus {
  cursor: pointer;
  background-color: var(--secondary-color);
}

.invalid-token {
  animation: shake 0.4s ease-in-out;
}

.invalid-token::placeholder {
  color: var(--accent-color);
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
    font-size: 1.6rem;
  }
  25% {
    transform: translateX(-2px);
    font-size: 1.66rem;
  }
  50% {
    transform: translateX(2px);
    font-size: 1.66rem;
  }
  75% {
    transform: translateX(-2px);
    font-size: 1.66rem;
  }
}

.form_login_button {
  margin-top: 1rem;
  position: relative;
}

.form_login_button:hover {
  cursor: pointer;
  background-color: var(--secondary-color);
}

.form_login_button:active {
  cursor: pointer;
  background-color: var(--accent-color);
  font-size: 1.4rem;
}

.spinner {
  content: "";
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border-left: 5px solid var(--secondary-color);
  border-top: 5px solid var(--secondary-color);
  border-right: 5px solid transparent;
  border-bottom: 5px solid var(--secondary-color);
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;
  animation: spinner 0.8s linear infinite;
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
