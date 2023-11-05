<template>
  <header class="header">
    <h1 class="header_logo">Book researcher</h1>
    <div v-if="getUserToken" class="header_login_block">
      <h3 class="user_token">{{ getUserToken }}</h3>
      <button class="button_logout" @click="logout">Exit</button>
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
@media (max-width: 767px) {
  .header {
    flex-direction: column-reverse;
  }

  .header_logo {
    margin-right: auto;
  }

  .header_login_block {
    width: 100%;
    justify-content: space-between;
  }
}

@media (min-width: 768px) {
  .header {
    justify-content: space-between;
    align-items: center;
  }
}

.header {
  display: flex;
  margin-bottom: 2rem;
}

.header_logo {
  font-size: 4rem;
  font-family: Bold_fonts;
  color: var(--text-color);
}

.header_login_block {
  display: flex;
}

.user_token {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  font-size: 1.6rem;
  font-family: Main_fonts;
  color: var(--text-color);
}

.button_logout {
  font-size: 1.6rem;
  font-family: Main_fonts;
  width: 6rem;
  height: 3.5rem;
  background-color: var(--primary-color);
  border: 3px solid var(--outline-color);
  border-radius: 1rem;
  box-sizing: border-box;
}

.button_logout:hover {
  cursor: pointer;
  border-width: 4px;
  background-color: var(--secondary-color);
}

.button_logout:active {
  font-size: 1.4rem;
  border-width: 4px;
  background-color: var(--accent-color);
}
</style>