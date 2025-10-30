import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => action.payload,
    removeAConnection: (state, action) => null
  },
});

export const {addConnections,removeAConnection} = connectionsSlice.actions;
export default connectionsSlice.reducer;