<template>
  <tr class="book">
    <td>
      <img :src="getThumbnail(book)" alt="Book cover" />
    </td>
    <td>{{ getTitle(book) }}</td>
    <td>{{ getAuthors(book) }}</td>
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
        if (authors) {
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
.book {
  height: 200px;
}
</style>