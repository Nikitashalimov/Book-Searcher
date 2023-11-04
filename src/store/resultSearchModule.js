export const resultSearchModule = {
	state: {
		books: [],
	},
	getters: {
		getBooks(state) {
			return state.books;
		}
	},
	mutations: {
		setBooks(state, books) {
			state.books = books;
		},
		removeBooks(state) {
			if (state.books.length > 0) {
				state.books = [];
			}
		},
	},
	actions: {
		async fetchBooks(context, searchKeyWord) {
			if (!searchKeyWord) {
				context.commit('removeBooks');

			} else {
				try {
					const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchKeyWord}`);

					if (!res.ok) {
						throw new Error("Failed to fetch books.");
					}

					const data = await res.json();

					if (data.items) {
						context.commit('setBooks', data.items);
					} else {
						throw new Error("No books found.");
					}
				} catch (error) {
					console.error("Error fetching books:", error);
				}
			}
		}
	}
};