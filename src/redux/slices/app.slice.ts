import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  isSidebarOpen: boolean;
}

const initialState: AppState = {
  isSidebarOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = appSlice.actions;

export default appSlice.reducer;
