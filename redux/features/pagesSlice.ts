import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "pageSlice",
    initialState: {
        activePage: "",
        satelliteLoading: false,
    },
    reducers: {
        setActivePage: (state, action: PayloadAction<string>) => {
            state.activePage = action.payload;
        },

        setSatelliteLoading: (state, action: PayloadAction<boolean>) => {
            state.satelliteLoading = action.payload;
        },
    },
});

export const { setActivePage, setSatelliteLoading } = pageSlice.actions;
export default pageSlice.reducer;
