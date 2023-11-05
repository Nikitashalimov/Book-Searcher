<template>
  <main>
    <input
      class="search_book_input"
      placeholder="Enter keywords"
      v-model="searchKeyWord"
      @input="searchRequest"
    />

    <table class="books-results">
      <tbody>
        <Book v-for="book in getBooks" :key="book.id" :book="book"></Book>
      </tbody>
    </table>
  </main>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Book from "../components/Book.vue";

export default {
  components: {
    Book,
  },
  data() {
    return {
      searchKeyWord: "",
      debounceTimer: null,
    };
  },
  computed: {
    ...mapGetters(["getBooks"]),
  },
  methods: {
    ...mapActions(["fetchBooks"]),
    searchRequest() {
      if (this.debouncedTimer) {
        clearTimeout(this.debouncedTimer);
      }
      this.debouncedTimer = setTimeout(
        () => this.fetchBooks(this.searchKeyWord),
        500
      );
    },
  },
};
</script>


<style scoped>
@media (max-width: 767px) {
  .search_book_input {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .search_book_input {
    width: 70%;
  }
}

.search_book_input {
  outline: none;
  max-width: 80rem;
  height: 3.2rem;
  border: 2px solid;
  border-radius: 1rem;
  border-color: var(--outline-color);
  background-color: var(--primary-color);
  font-size: 1.6rem;
  padding: 0 1rem;
}

.search_book_input::placeholder {
  background-image: url("../assets/icons/icon_magnifier.png");
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: right center;
}

.books-results {
  width: 100%;
  border-collapse: collapse;
  margin-top: 3rem;
}
</style>