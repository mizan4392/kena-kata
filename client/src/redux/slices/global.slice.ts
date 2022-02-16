import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  isSidebarOpen: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  isSidebarOpen: true,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleSideBar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { toggleSideBar } = globalSlice.actions;
export default globalSlice.reducer;
