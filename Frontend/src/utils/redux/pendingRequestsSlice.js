import { createSlice } from "@reduxjs/toolkit";

const pendingRequestsSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => action.payload,
    removeARequest: (state, action) => {
      const newArray = state.filter(
        (connection) => connection._id !== action.payload
      );
      return newArray;
    },
  },
});

export const {addRequests,removeARequest} = pendingRequestsSlice.actions;
export default pendingRequestsSlice.reducer;