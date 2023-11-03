<template>
  <main>
    <input
      placeholder="Enter keywords"
      v-model="searchKeyWord"
      @input="searchRequest"
    />

    <table class="books-results">
      <tbody>
        <tr v-for="book in searchResults" :key="getId(book)" class="book">
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
export default {
  data() {
    return {
      searchKeyWord: "",
      searchResults: [],
      debounceTimer: null,
      emptyBookImage: "/src/assets/empty book.png",
    };
  },
  methods: {
    searchRequest() {
      if (this.debouncedTimer) {
        clearTimeout(this.debouncedTimer);
      }
      this.debouncedTimer = setTimeout(this.searchBooks, 500);
    },
    searchBooks() {
      if (!this.searchKeyWord) {
        this.searchResults = [];
        return;
      }
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.searchKeyWord}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.searchResults = data.items;
          console.log(this.searchResults);
        })
        .catch((error) => {
          console.error("Ошибка при запросе к API:", error);
        });
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