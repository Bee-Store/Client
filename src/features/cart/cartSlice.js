import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
      if (itemIndex >= 0) {
        // The item is already in the cart, increase quantity
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        // The item is not in the cart, add new item
        state.items.push(action.payload);
      }
      // Update total amount
      state.totalAmount += action.payload.product.price * action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
      if (itemIndex >= 0) {
        // The item is in the cart, decrease quantity or remove
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= action.payload.quantity;
        } else {
          state.items.splice(itemIndex, 1);
        }
        // Update total amount
        state.totalAmount -= action.payload.product.price * action.payload.quantity;
      }
    },
    clearCart: (state) => {
      // Clear all items from the cart
      state.items = [];
      // Reset total amount
      state.totalAmount = 0;
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
      if (itemIndex >= 0) {
        // The item is in the cart, increase quantity
        state.items[itemIndex].quantity++;
        // Update total amount
        state.totalAmount += state.items[itemIndex].product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
      if (itemIndex >= 0) {
        // The item is in the cart, decrease quantity or remove
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity--;
          // Update total amount
          state.totalAmount -= state.items[itemIndex].product.price;
        } else {
          // Update total amount before removing the item
          state.totalAmount -= state.items[itemIndex].product.price * state.items[itemIndex].quantity;
          state.items.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;


// import axios from 'axios';
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
//       if (itemIndex >= 0) {
//         // The item is already in the cart, increase quantity
//         state.items[itemIndex].quantity += action.payload.quantity;
//       } else {
//         // The item is not in the cart, add new item
//         state.items.push(action.payload);
//       }
//       // Update total amount
//       state.totalAmount += action.payload.product.price * action.payload.quantity;

//       // Make API call to add product to cart on server
//       axios.post('/api/cart', { productId: action.payload.product._id, quantity: action.payload.quantity })
//         .then(response => {
//           console.log('Product added to cart on server');
//         })
//         .catch(error => {
//           console.error('Error adding product to cart on server', error);
//         });
//     },
//     removeFromCart: (state, action) => {
//       const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
//       if (itemIndex >= 0) {
//         // The item is in the cart, decrease quantity or remove
//         if (state.items[itemIndex].quantity > 1) {
//           state.items[itemIndex].quantity -= action.payload.quantity;
//         } else {
//           state.items.splice(itemIndex, 1);
//         }
//         // Update total amount
//         state.totalAmount -= action.payload.product.price * action.payload.quantity;

//         // Make API call to remove product from cart on server
//         axios.delete('/api/cart', { data: { productId: action.payload.product._id } })
//           .then(response => {
//             console.log('Product removed from cart on server');
//           })
//           .catch(error => {
//             console.error('Error removing product from cart on server', error);
//           });
//       }
//     },
//     clearCart: (state) => {
//       // Clear all items from the cart
//       state.items = [];
//       // Reset total amount
//       state.totalAmount = 0;

//       // Make API call to clear cart on server
//       axios.delete('/api/cart/clear')
//         .then(response => {
//           console.log('Cart cleared on server');
//         })
//         .catch(error => {
//           console.error('Error clearing cart on server', error);
//         });
//     },
//     increaseQuantity: (state, action) => {
//       const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
//       if (itemIndex >= 0) {
//         // The item is in the cart, increase quantity
//         state.items[itemIndex].quantity++;
//         // Update total amount
//         state.totalAmount += state.items[itemIndex].product.price;

//         // Make API call to increase product quantity in cart on server
//         axios.put('/api/cart/increase', { productId: action.payload.product._id })
//           .then(response => {
//             console.log('Product quantity increased in cart on server');
//           })
//           .catch(error => {
//             console.error('Error increasing product quantity in cart on server', error);
//           });
//       }
//     },
//     decreaseQuantity: (state, action) => {
//       const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
//       if (itemIndex >= 0) {
//         // The item is in the cart, decrease quantity or remove
//         if (state.items[itemIndex].quantity > 1) {
//           state.items[itemIndex].quantity--;
//           // Update total amount
//           state.totalAmount -= state.items[itemIndex].product.price;

//           // Make API call to decrease product quantity in cart on server
//           axios.put('/api/cart/decrease', { productId: action.payload.product._id })
//             .then(response => {
//               console.log('Product quantity decreased in cart on server');
//             })
//             .catch(error => {
//               console.error('Error decreasing product quantity in cart on server', error);
//             });
//         } else {
//           // Update total amount before removing the item
//           state.totalAmount -= state.items[itemIndex].product.price * state.items[itemIndex].quantity;
//           state.items.splice(itemIndex, 1);

//           // Make API call to remove product from cart on server
//           axios.delete('/api/cart', { data: { productId: action.payload.product._id } })
//             .then(response => {
//               console.log('Product removed from cart on server');
//             })
//             .catch(error => {
//               console.error('Error removing product from cart on server', error);
//             });
//         }
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

// export default cartSlice.reducer;



// import axios from 'axios';
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
//       if (itemIndex >= 0) {
//         state.items[itemIndex].quantity += action.payload.quantity;
//       } else {
//         state.items.push(action.payload);
//       }
//       state.totalAmount += action.payload.product.price * action.payload.quantity;

//       if (action.payload.userId) {
//         axios.post('/api/cart', { userId: action.payload.userId, productId: action.payload.product._id, quantity: action.payload.quantity })
//           .then(response => console.log('Product added to cart on server'))
//           .catch(error => console.error('Error adding product to cart on server', error));
//       }
//     },
//     removeFromCart: (state, action) => {
//       const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
//       if (itemIndex >= 0) {
//         if (state.items[itemIndex].quantity > 1) {
//           state.items[itemIndex].quantity -= action.payload.quantity;
//         } else {
//           state.items.splice(itemIndex, 1);
//         }
//         state.totalAmount -= action.payload.product.price * action.payload.quantity;

//         if (action.payload.userId) {
//           axios.delete('/api/cart', { data: { userId: action.payload.userId, productId: action.payload.product._id } })
//             .then(response => console.log('Product removed from cart on server'))
//             .catch(error => console.error('Error removing product from cart on server', error));
//         }
//       }
//     },
//     clearCart: (state, action) => {
//       state.items = [];
//       state.totalAmount = 0;

//       if (action.payload.userId) {
//         axios.delete('/api/cart/clear', { data: { userId: action.payload.userId } })
//           .then(response => console.log('Cart cleared on server'))
//           .catch(error => console.error('Error clearing cart on server', error));
//       }
//     },
//     increaseQuantity: (state, action) => {
//       const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
//       if (itemIndex >= 0) {
//         state.items[itemIndex].quantity++;
//         state.totalAmount += state.items[itemIndex].product.price;

//         if (action.payload.userId) {
//           axios.put('/api/cart/increase', { userId: action.payload.userId, productId: action.payload.product._id })
//             .then(response => console.log('Product quantity increased in cart on server'))
//             .catch(error => console.error('Error increasing product quantity in cart on server', error));
//         }
//       }
//     },
//     decreaseQuantity: (state, action) => {
//       const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
//       if (itemIndex >= 0) {
//         if (state.items[itemIndex].quantity > 1) {
//           state.items[itemIndex].quantity--;
//           state.totalAmount -= state.items[itemIndex].product.price;

//           if (action.payload.userId) {
//             axios.put('/api/cart/decrease', { userId: action.payload.userId, productId: action.payload.product._id })
//               .then(response => console.log('Product quantity decreased in cart on server'))
//               .catch(error => console.error('Error decreasing product quantity in cart on server', error));
//           }
//         } else {
//           state.totalAmount -= state.items[itemIndex].product.price * state.items[itemIndex].quantity;
//           state.items.splice(itemIndex, 1);

//           if (action.payload.userId) {
//             axios.delete('/api/cart', { data: { userId: action.payload.userId, productId: action.payload.product._id } })
//               .then(response => console.log('Product removed from cart on server'))
//               .catch(error => console.error('Error removing product from cart on server', error));
//           }
//         }
//       }
//     },
//     loginUser: (state, action) => {
//       axios.post('/api/cart/login', { userId: action.payload.userId, cart: state.items })
//         .then(response => console.log('Cart associated with user account'))
//         .catch(error => console.error('Error associating cart with user account', error));
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, loginUser } = cartSlice.actions;

// export default cartSlice.reducer;
