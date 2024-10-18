import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import {
//   MasterVehicleFuelTypeReducer,
//   MasterVehicleReducer,
//   MasterFoodItemsReducer,
//   MasterAppliancesReducer
// } from "../slice/MasterApiSlices";
// import { CalcEmissionReducer } from "../slice/CalculationSlice";
// import { TransactionReducer } from "../slice/TransactionSlice";
// import UserReducer from "../slice/UserSlice";

// Combine your reducers
// const rootReducer = combineReducers({
//   masterVehicles: MasterVehicleReducer,
//   masterFoodItems: MasterFoodItemsReducer,
//   masterAppliances: MasterAppliancesReducer,
//   carbonValue: CalcEmissionReducer,
//   transactionData: TransactionReducer,
//   masterVehicleFuelType: MasterVehicleFuelTypeReducer,
//   user: UserReducer
// });

// Create the store without persisting the state
export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
});
