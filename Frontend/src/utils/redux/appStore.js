import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import feedSliceReducer from "./feedSlice";
import connectionsSliceReducer from "./connectionsSlice";
import pendingRequestsReducer from "./pendingRequestsSlice";

const appStore = configureStore({

    reducer:{
        user:userSliceReducer,
        feed:feedSliceReducer,
        connections:connectionsSliceReducer,
        requests:pendingRequestsReducer
    }
});

export default appStore;