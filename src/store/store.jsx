import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { QuoteReducer } from  "../slice/QuoteSlice"
import { MasterAmenityReducer, MasterUtilityReducer, MasterUnitReducer } from "../slice/MasterSlice";

export const store = configureStore({
  reducer: {
    quote: QuoteReducer,
    masterAmenity: MasterAmenityReducer,
    masterUtility: MasterUtilityReducer,
    masterunit: MasterUnitReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
});
