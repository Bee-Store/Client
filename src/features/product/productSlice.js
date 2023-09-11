import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('http://localhost:3000/products', async() => {
    const res = await fetch('api')
    const data = await res.json()
    return data
})

const productsSlice = createSlice({
    name: 'products',
    initialState:[],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        removeProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload);
          },
        },
        extraReducers: (builder) => {
            builder.addCase(fetchProducts.fulfilled, (state, action) => {
              return action.payload;
            });
    },
})

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;