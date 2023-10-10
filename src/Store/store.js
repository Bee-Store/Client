import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productSlice from "../features/product/productSlice";
import cartSlice from "../features/cart/cartSlice";
import sideBarSlice from "../features/sideBar/sideBarSlice";
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
    products: productSlice,
    cart: cartSlice,
    sideBar: sideBarSlice,
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
