import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { id: 1, name: 'One', description: 'Lorem ipsum dolor sit amet. ', price: 15000, available: true },
        { id: 2, name: 'Two', description: 'Lorem ipsum dolor sit amet. ', price: 81000, available: true },
        { id: 3, name: 'Three', description: 'Lorem ipsum dolor sit amet. ', price: 62000, available: true },
        { id: 4, name: 'Four', description: 'Lorem ipsum dolor sit amet. ', price: 45000, available: true }
    ]
}
const changeSlice = createSlice({
    name: 'delete',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items = [...new Set([...state.items, action.payload])]  
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
    }
});

export const selectItems = state => state.delete.items;
export const { addItem, deleteItem} = changeSlice.actions;
export default changeSlice.reducer; 