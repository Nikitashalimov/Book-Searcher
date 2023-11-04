<template>
  <tr class="book" @click="openMoreDetail">
    <td>
      <img :src="getThumbnail(book)" alt="Book cover" />
    </td>
    <td>{{ getTitle(book) }}</td>
    <td>{{ getAuthors(book) }}</td>
  </tr>
  <tr>
    <td :colspan="3">{{ getDescription(book) }}</td>
  </tr>
</template>


<script>
export default {
  props: ["book"],
  data() {
    return {
      emptyBookImage: "/src/assets/emptybook.png",
    };
  },
  methods: {
    openMoreDetail() {},
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
  height: 200px;
}
</style>