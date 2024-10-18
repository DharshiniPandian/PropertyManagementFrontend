import { createSlice } from "@reduxjs/toolkit";

const initialState = { }

const CalculationLogic = createSlice({
    name: "Calculation",
    initialState: initialState,
    reducers: {
        // selectVehicle(state, action) {
        //     const { vehicleId, vehicleValue } = action.payload;
        //     state.vehicle.vehicle_id = vehicleId;
        //     state.vehicle.vehicle_value = vehicleValue;
      
        //     // Recalculate total emission
        //     state.vehicle.total_vehicle_emission = calculateVehicleEmission(state.vehicle);
        //     state.total_emission.total_emission = calculateTotalEmission(state);
        //   },
      
    }
})

export const {} = CalculationLogic.actions;

export const CalcultionReducer = CalculationLogic.reducer;