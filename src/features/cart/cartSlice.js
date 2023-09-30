import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.findIndex(item => item.product.id === action.payload.id);
      if (itemIndex >= 0) {
        // The item is already in the cart, increase quantity
        state[itemIndex].quantity += action.payload.quantity;
      } else {
        // The item is not in the cart, add new item
        state.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
