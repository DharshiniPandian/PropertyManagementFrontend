import { createSlice } from "@reduxjs/toolkit";

const units = []
const amenity = []
const utility = []

const MasterUnit = createSlice({
    name: "MasterUnit",
    initialState: units,
    reducers: {
        addMasterUnit(state, action){
            const data = action.payload;
            return state = data
        },

        removeMasterUnit(state, action){
            const id = action.payload
            return state = state.filter(unit => unit.id !== id)
        }
    }
})

const MasterAmenity = createSlice({
    name: "MasterAmenity",
    initialState: amenity,
    reducers: {
        addMasterAmenity(state, action){
            const data = action.payload;
            return state = data
        },
    }
})

const MasterUtility = createSlice({
    name: "MasterUtility",
    initialState: utility,
    reducers: {
        addMasterUtility(state, action){
            const data = action.payload;
            return state = data
        },
    }
})

export const {addMasterAmenity} = MasterAmenity.actions
export const {addMasterUtility} = MasterUtility.actions
export const { addMasterUnit, removeMasterUnit } = MasterUnit.actions

export const MasterAmenityReducer = MasterAmenity.reducer
export const MasterUtilityReducer = MasterUtility.reducer
export const MasterUnitReducer = MasterUnit.reducer