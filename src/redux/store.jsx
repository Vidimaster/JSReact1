import { configureStore } from "@reduxjs/toolkit";

import deleteReducer from "./slices/EditSlice";
import themeReducer from "./slices/ThemeSwitch";

const store = configureStore({
    reducer: {
 
        theme: themeReducer,
        delete: deleteReducer,
    }
});
export default store;