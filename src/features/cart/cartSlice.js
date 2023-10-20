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
//       }
//     },
//     clearCart: (state) => {
//       // Clear all items from the cart
//       state.items = [];
//       // Reset total amount
//       state.totalAmount = 0;
//     },
//     increaseQuantity: (state, action) => {
//       const itemIndex = state.items.findIndex(item => item.product._id === action.payload.product._id);
//       if (itemIndex >= 0) {
//         // The item is in the cart, increase quantity
//         state.items[itemIndex].quantity++;
//         // Update total amount
//         state.totalAmount += state.items[itemIndex].product.price;
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
//         } else {
//           // Update total amount before removing the item
//           state.totalAmount -= state.items[itemIndex].product.price * state.items[itemIndex].quantity;
//           state.items.splice(itemIndex, 1);
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
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// function userIsLoggedIn() {
//   return !!localStorage.getItem('access_token');
// }

// // Async action to add a product to the cart
// export const addToCart = createAsyncThunk(
//   'cart/addToCart',
//   async (product, thunkAPI) => {
//     let response;
//     if (userIsLoggedIn()) {
//       response = await axios.post('http://localhost:5000/api/cart/add', { product });
//     } else {
//       let cart = JSON.parse(localStorage.getItem('cart')) || [];
//       const itemIndex = cart.findIndex(p => p.product.product._id === product._id);
//       if (itemIndex > -1) {
//         cart[itemIndex].quantity++;
//       } else {
//         cart.push({ product, quantity: 1 });
//       }
//       localStorage.setItem('cart', JSON.stringify(cart));
//       response = { data: { products: cart }};
//     }
//     return response.data;
//   }
// );

// // Async action to remove a product from the cart
// export const removeFromCart = createAsyncThunk(
//   'cart/removeFromCart',
//   async (productId, thunkAPI) => {
//     let response;
//     if (userIsLoggedIn()) {
//       response = await axios.post('http://localhost:5000/api/cart/remove', { productId });
//     } else {
//       let cart = JSON.parse(localStorage.getItem('cart')) || [];
//       const itemIndex = cart.findIndex(p => p.product === productId);
//       if (itemIndex > -1) {
//         cart.splice(itemIndex, 1);
//         localStorage.setItem('cart', JSON.stringify(cart));
//         response = { data: { products: cart }};
//       }
//     }
//     return response.data;
//   }
// );

// // Async action to increase the quantity of a product in the cart
// export const increaseQuantity = createAsyncThunk(
//   'cart/increaseQuantity',
//   async (productId, thunkAPI) => {
//     let response;
//     if (userIsLoggedIn()) {
//       response = await axios.post('http://localhost:5000/api/cart/increase', { productId });
//     } else {
//       let cart = JSON.parse(localStorage.getItem('cart')) || [];
//       const itemIndex = cart.findIndex(p => p.product === productId);
//       if (itemIndex > -1) {
//         cart[itemIndex].quantity++;
//         localStorage.setItem('cart', JSON.stringify(cart));
//         response = { data: { products: cart }};
//       }
//     }
//     return response.data;
//   }
// );

// // Async action to decrease the quantity of a product in the cart
// export const decreaseQuantity = createAsyncThunk(
//   'cart/decreaseQuantity',
//   async (productId, thunkAPI) => {
//     let response;
//     if (userIsLoggedIn()) {
//       response = await axios.post('http://localhost:5000/api/cart/decrease', { productId });
//     } else {
//       let cart = JSON.parse(localStorage.getItem('cart')) || [];
//       console.log(cart)
//       const itemIndex = cart.product.findIndex(p => p.product === productId);
//       if (itemIndex > -1) {
//         cart[itemIndex].quantity--;
//         if (cart[itemIndex].quantity === 0) {
//           cart.splice(itemIndex, 1);
//         }
//         localStorage.setItem('cart', JSON.stringify(cart));
//         response = { data: { products: cart }};
//       }
//     }
//     return response.data;
//   }
// );

// // Define the initial state of our slice
// const initialState = {
//   products: [],
// };

// // Define our slice
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addToCart.fulfilled, (state, action) => {
//         console.log(action)
//         console.log(state)
//         state.products = action.payload.products;
//       })
//       .addCase(removeFromCart.fulfilled, (state, action) => {
//         state.products = action.payload.products;
//       })
//       .addCase(increaseQuantity.fulfilled, (state, action) => {
//         console.log(action)
//         console.log(state)
//         state.products = action.payload.products;
//       })
//       .addCase(decreaseQuantity.fulfilled, (state, action) =>{
//         console.log(action)
//         console.log(state)
//         state.products = action.payload.products;
//       });
//   },
// });

// export default cartSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Async action to add a product to the cart
export const addToCartAsync = createAsyncThunk('cart/addToCart', async (product, { getState }) => {
  const { user } = getState();
  if (user) {
    const response = await axios.post(`http://localhost:5000/api/cart/add`, { userId: user.id, product, quantity: 1 }, { headers: { Authorization: `Bearer ${user.token}` } });
    console.log(user)
    return response.data;
  } else {
    // If the user is not logged in, add the product to the cart in local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(p => p.product._id === product._id);
    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  }
});
// Async action to fetch the cart from the backend
export const fetchCart = createAsyncThunk('cart/fetchCart', async (_, { getState }) => {
  const { user } = getState();
  if (user) {
    const response = await axios.get(`http://localhost:5000/api/cart/${user.id}`);
  console.log(user)
    return response.data;
  } else {
    // If the user is not logged in, get the cart from local storage
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
});

// Async action to sync the cart with the backend
export const syncCart = createAsyncThunk('cart/syncCart', async (_, { getState }) => {
  const { user, cart } = getState();
 console.log(user)
  if (user) {
    const response = await axios.post(
      /*`http://localhost:5000/api/cart/merge`*/ `http://localhost:5000/api/admin/test`,
      { userId: user.id, tempCart: cart }
    );
    return response.data;
  } else {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      console.log('Price:', product.price); // Log the price
      console.log('Quantity:', quantity);
      const existingProductIndex = state.findIndex(p => p.product._id === product._id);
      if (existingProductIndex >= 0) {
        state[existingProductIndex].quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      console.log(state, action)
      const productId = action.payload;
      console.log('Removing product from cart', action.payload);
      return state.filter(item => item.product._id !== productId);
    },
    increaseQuantity: (state, action) => {
      const { product: productId, quantity } = action.payload;
      const existingProductIndex = state.findIndex(p => p.product._id === productId);
      if (existingProductIndex >= 0) {
        state[existingProductIndex].quantity += quantity;
      }
    },
    decreaseQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProductIndex = state.findIndex(p => p.product._id === product);
      if (existingProductIndex >= 0) {
        if (state[existingProductIndex].quantity > 1) {
          // Decrease the quantity if it's more than 1
          state[existingProductIndex].quantity -= quantity;
        } else {
          // Remove the product from the cart if its quantity is 1
          state.splice(existingProductIndex, 1);
        }
      }
    },
    
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(syncCart.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export const selectTotalAmount = state => state.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
export default cartSlice.reducer;
