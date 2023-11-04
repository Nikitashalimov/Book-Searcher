<template>
  <main>
    <input
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
      emptyBookImage: "/src/assets/emptybook.png",
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
.books-results {
  width: 100%;
  border-collapse: collapse;
  margin-top: 50px;
}

.book {
  height: 200px;
}
</style>