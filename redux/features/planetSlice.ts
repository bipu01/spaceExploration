import { createSlice } from "@reduxjs/toolkit";

const planetSlice = createSlice({
    name: "planetSlice",
    initialState: {
        planetSelected: false,
        selectedPlanetName: "",
        selectedPlanetIndex: 0,
        showPlayground: false,
    },
    reducers: {
        setPlanetSelected: (state, action) => {
            state.planetSelected = action.payload;
        },
        setSelectedPlanetName: (state, action) => {
            state.selectedPlanetName = action.payload;
        },

        setSelectedPlanetIndex: (state, action) => {
            state.selectedPlanetIndex = action.payload;
        },
        setShowPlayground: (state, action) => {
            state.showPlayground = action.payload;
        },
    },
});

export const {
    setPlanetSelected,
    setSelectedPlanetName,
    setSelectedPlanetIndex,
    setShowPlayground,
} = planetSlice.actions;
export default planetSlice.reducer;
