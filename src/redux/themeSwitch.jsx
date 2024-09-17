import { configureStore } from "@reduxjs/toolkit";

const TOGGLE_THEME = "TOGGLE_THEME";

const todos = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_THEME:

            return {
                current_theme: action.current_theme,
            }

        default:
            return {
                current_theme: 'light',
            }
    }
}

const store = configureStore({ reducer: todos });

export default store;

