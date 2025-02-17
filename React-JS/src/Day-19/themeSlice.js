import { creatSlice } from "react";

export const themeSlice = creatSlice({
  name: "theme",
  initialState: { mode: "light" },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducers;
