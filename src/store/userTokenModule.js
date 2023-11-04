export const userTokenModule = {
	state: {
		userToken: localStorage.getItem("userToken") || ""
	},
	getters: {
		getUserToken(state) {
			return state.userToken;
		}
	},
	mutations: {
		setUserToken(state, token) {
			state.userToken = token;
			localStorage.setItem("userToken", token);
		},
		exitUserToken(state) {
			state.userToken = '';
			localStorage.removeItem("userToken");
		}
	},
	actions: {}
};
