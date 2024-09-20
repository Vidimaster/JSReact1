import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current_theme: 'light'
}
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.current_theme = action.payload === 'light' ? "dark" : "light";
        },
    }
});
export const selectTheme = state => state.theme.current_theme;
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;



