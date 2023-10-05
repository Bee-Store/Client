import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";
import cartSlice from "../features/cart/cartSlice";
export default configureStore({
    reducer:{
        products: productSlice,
        cart: cartSlice,
    },
})