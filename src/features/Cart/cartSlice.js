import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //Payload:Item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload:id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearItems(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
