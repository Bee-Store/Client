import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
    email: null,
    access_token: null,
    is_admin: null,
    id: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { name, email, access_token, is_admin, id } = action.payload;
      state.name = name;
      state.email = email;
      state.access_token = access_token;
      state.is_admin = is_admin;
      state.id = id;
    },
    clearUser: (state) => {
      state.name = null;
      state.email = null;
      state.access_token = null;
      state.is_admin = null;
      state.id = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
