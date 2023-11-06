<template>
  <div class="book" @click="openMoreDetail">
    <div class="book_cover">
      <img
        v-if="isBookCover"
        class="book_logo"
        :src="getThumbnail(book)"
        alt="Book cover"
      />

      <img
        v-if="!isBookCover"
        class="book_logo"
        src="../assets/icons/icon_emptybook.png"
        alt="Book cover"
      />

      <div class="book_info">
        <h2 class="book_title">{{ getTitle(book) }}</h2>
        <span class="book_authors">{{ getAuthors(book) }}</span>
      </div>
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
      isBookCover: true,
      isBookOpen: false,
    };
  },
  methods: {
    openMoreDetail() {
      this.isBookOpen = !this.isBookOpen;
    },
    setIsBookCover() {
      this.isBookCover = !this.isBookCover;
    },
    getThumbnail(book) {
      const imageLinks = book.volumeInfo.imageLinks;
      return imageLinks ? imageLinks.thumbnail : this.setIsBookCover();
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
@media (max-width: 767px) {
  .book_info {
    width: 60%;
  }

  .book_title {
    text-align: center;
    margin-bottom: 1rem;
  }

  .book_authors {
    text-align: center;
  }
}

@media (min-width: 768px) {
  .book_info {
    width: 70%;
  }

  .book_title {
    text-align: left;
  }

  .book_authors {
    text-align: right;
  }
}

.book {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 1rem;
  background-color: var(--secondary-color);
  box-shadow: 5px 5px 15px var(--outline-color);
  -webkit-box-shadow: 5px 5px 15px var(--outline-color);
  cursor: pointer;
}

.book:hover {
  box-shadow: 8px 8px 16px var(--outline-color);
  -webkit-box-shadow: 8px 8px 16px var(--outline-color);
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

.book_info {
  display: flex;
  flex-direction: column;
}

.book_title {
  font-family: Main_fonts;
  color: var(--text-color);
  font-size: 1.8rem;
  /* text-align: left; */
}

.book_authors {
  font-size: 1.6rem;
  color: var(--text-color);
  /* text-align: right; */
  font-style: italic;
}

.book_description {
  font-family: Main_fonts;
  color: var(--text-color);
  font-size: 1.4rem;
  margin-top: 2rem;
  font-style: italic;
}
</style>