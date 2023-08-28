import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: true },
  reducers: {
    changeToggle: (state) => {
      state.theme = !state.theme
    },
  },
});

export const { changeToggle } = themeSlice.actions;
export default themeSlice.reducer;
