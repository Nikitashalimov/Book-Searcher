import { createStore } from "vuex";
import { userTokenModule } from "@/store/userTokenModule.js";
import { resultSearchModule } from "@/store/resultSearchModule";

export default createStore({
	modules: {
		userTokenStore: userTokenModule,
		resultSearchStore: resultSearchModule,
	}
});