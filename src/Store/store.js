import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productSlice from "../features/product/productSlice";
import cartSlice from "../features/cart/cartSlice";
import userSlice  from "../features/login/loginSlice"
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
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
