// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async() => {
//     const res = await fetch('http://127.0.0.1:5000/api/products')
//     const data = await res.json()
//     return data
// })

// const productsSlice = createSlice({
//     name: 'products',
//     initialState:[],
//     reducers: {
//         addProduct: (state, action) => {
//             state.push(action.payload)
//         },
//         removeProduct: (state, action) => {
//             return state.filter(product => product._id !== action.payload);
//           },
//         },
//         extraReducers: (builder) => {
//             builder.addCase(fetchProducts.fulfilled, (state, action) => {
//               return action.payload;
//             });
//     },
// })

// export const { addProduct, removeProduct } = productsSlice.actions;
//  export default productsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async() => {
    const res = await fetch('http://127.0.0.1:5000/api/products')
    const data = await res.json()
    return data
})

export const fetchProduct = createAsyncThunk('products/fetchProduct', async(id) => {
    const res = await fetch(`http://127.0.0.1:5000/api/products/${id}`)
    const data = await res.json()
    return data
})

export const addProductAsync = createAsyncThunk('products/addProduct', async(product) => {
    const res = await fetch('http://127.0.0.1:5000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    })
    const data = await res.json()
    return data
})

export const updateProductAsync = createAsyncThunk('products/updateProduct', async({ id, updatedProduct }) => {
    const res = await fetch(`http://127.0.0.1:5000/api/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
    })
    const data = await res.json()
    return data
})

export const removeProductAsync = createAsyncThunk('products/removeProduct', async(id) => {
    await fetch(`http://127.0.0.1:5000/api/products/${id}`, {
        method: 'DELETE',
    })
    return id
})

const productsSlice = createSlice({
    name: 'products',
    initialState:[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            return state.map(product => product._id === action.payload._id ? action.payload : product);
        });
        builder.addCase(addProductAsync.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        builder.addCase(updateProductAsync.fulfilled, (state, action) => {
            return state.map(product => product._id === action.payload._id ? action.payload : product);
        });
        builder.addCase(removeProductAsync.fulfilled, (state, action) => {
            return state.filter(product => product._id !== action.payload);
        });
    },
})

export default productsSlice.reducer;
