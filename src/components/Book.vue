<template>
  <div class="book" @click="openMoreDetail">
    <div class="book_cover">
      <img class="book_logo" :src="getThumbnail(book)" alt="Book cover" />
      <h2 class="book_title">{{ getTitle(book) }}</h2>
      <span class="book_authors">{{ getAuthors(book) }}</span>
    </div>
    <div class="book_description" v-if="isBookOpen">
      <div>{{ getDescription(book) }}</div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["book"],
  data() {
    return {
      emptyBookImage: "/src/assets/icons/icon_emptybool.png",
      isBookOpen: false,
    };
  },
  methods: {
    openMoreDetail() {
      this.isBookOpen = !this.isBookOpen;
    },
    getThumbnail(book) {
      const imageLinks = book.volumeInfo.imageLinks;
      return imageLinks ? imageLinks.thumbnail : this.emptyBookImage;
    },
    getTitle(book) {
      return book.volumeInfo.title;
    },
    getAuthors(book) {
      const authors = book.volumeInfo.authors;

      return authors
        ? authors.slice(0, 2).join(", ")
        : "The authors are unknown";
    },
    getDescription(book) {
      const description = book.volumeInfo.description;
      return description ? description : "Description is missing";
    },
  },
};
</script>


<style scoped>
.book {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 1rem;
  background-color: var(--secondary-color);
  box-shadow: 5px 5px 15px var(--outline-color);
  cursor: pointer;
}

.book:not(:last-child) {
  margin-bottom: 3rem;
}

.book_cover {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.book_logo {
  max-height: 180px;
  width: 25%;
  max-width: 120px;
}

.book_title {
  font-family: Main_fonts;
  color: var(--text-color);
  font-size: 1.6rem;
  width: 40%;
  text-align: left;
}

.book_authors {
  font-size: 1.6rem;
  width: 25%;
  color: var(--text-color);
  text-align: right;
}

.book_description {
  font-family: Main_fonts;
  color: var(--text-color);
  font-size: 1.4rem;
  margin-top: 2rem;
  font-style: italic;
}
</style>