import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder(state, action) {
      //payload:newOrder
      state.orders.push(action.payload);
    },
    deleteOrder(state, action) {
      //payload:OrderId
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
  },
});

export const { deleteOrder, addOrder } = orderSlice.actions;
export default orderSlice.reducer;
