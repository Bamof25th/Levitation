import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { userSliceInitialState } from "../../Pages/Login";

const initialState: userSliceInitialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
   
  },
});

export const {} = itemSlice.actions;
export default itemSlice.reducer;
