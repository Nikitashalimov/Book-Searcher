<template>
  <main>
    <input
      placeholder="Enter keywords"
      v-model="searchKeyWord"
      @input="searchRequest"
    />

    <table class="books-results">
      <tbody>
        <tr v-for="book in getBooks" :key="getId(book)" class="book">
          <td>
            <img :src="getThumbnail(book)" alt="Book cover" />
          </td>
          <td>{{ getTitle(book) }}</td>
          <td>{{ getAuthors(book) }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      searchKeyWord: "",
      searchResults: [],
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
      this.debouncedTimer = setTimeout(() => 
        this.fetchBooks(this.searchKeyWord),
        500
      );
    },
    getId(book) {
      return book.id;
    },
    getThumbnail(book) {
      const imageLinks = book.volumeInfo.imageLinks;
      if (imageLinks) {
        return imageLinks.thumbnail;
      }
      return this.emptyBookImage;
    },
    getTitle(book) {
      return book.volumeInfo.title;
    },
    getAuthors(book) {
      const authors = book.volumeInfo.authors;

      if (authors) {
        if (authors.length >= 3) {
          return authors.slice(0, 2).join(", ");
        }
        return authors.join(", ");
      }
      return "The authors are unknown";
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