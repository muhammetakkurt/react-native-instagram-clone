import { createSlice } from "@reduxjs/toolkit";

export const bottomSheet = createSlice({
  name: "bottomSheet",
  initialState: {
    value: false,
  },
  reducers: {
    setBottomSheet: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setBottomSheet } = bottomSheet.actions;

export default bottomSheet.reducer;
