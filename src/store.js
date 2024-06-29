import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/Cart/cartSlice';
import orderSlice from './features/Order/orderSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    order: orderSlice,
  },
});
