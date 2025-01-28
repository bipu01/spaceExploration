import { createSlice } from "@reduxjs/toolkit";

const planetSlice = createSlice({
    name: "planetSlice",
    initialState: {
        planetSelected: false,
        selectedPlanetName: "",
        selectedPlanetIndex: 0,
        showPlayground: false,

        showAllSatellites: true,
        show30DaysSatellites: false,
        showISS: false,
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
        setShowAllSatellites: (state, action) => {
            state.showAllSatellites = action.payload;
        },
        setShowISS: (state, action) => {
            state.showISS = action.payload;
        },
        setShow30DaysSatellites: (state, action) => {
            state.show30DaysSatellites = action.payload;
        },
    },
});

export const {
    setPlanetSelected,
    setSelectedPlanetName,
    setSelectedPlanetIndex,
    setShowPlayground,
    setShowAllSatellites,
    setShowISS,
    setShow30DaysSatellites,
} = planetSlice.actions;
export default planetSlice.reducer;
