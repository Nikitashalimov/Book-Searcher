import { createStore } from "vuex";
import {userTokenModule} from "@/store/userTokenModule.js";

export default createStore({
	modules: {
		userTokenStore: userTokenModule,
	}
});