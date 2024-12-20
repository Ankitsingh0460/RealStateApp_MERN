import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      (state.currentUser = action.payload),
        (state.loading = false),
        (state.error = null);
    },
    signinFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
    signoutStart: (state) => {
      state.loading = true;
    },
    signoutSuccess: (state) => {
      (state.currentUser = null), (state.loading = false), (state.error = null);
    },
    signoutFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    updateStart: (state) => {
      state.loading = true;
    },
    updateSuccess: (state, action) => {
      (state.currentUser = action.payload),
        (state.loading = false),
        (state.error = null);
    },
    updateFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      (state.currentUser = null), (state.loading = false), (state.error = null);
    },
    deleteUserFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
  },
});

export const {
  signinFailure,
  signinStart,
  signinSuccess,
  signoutFailure,
  signoutSuccess,
  signoutStart,
  updateFailure,
  updateStart,
  updateSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;
