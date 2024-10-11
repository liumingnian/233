/**
 * 
 * Redux：二级检索
 * 
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    key: string;
    color: string;
    size: string;
    tags: string;
    grade: string;
    // active: string;
};

interface RootState {
    filters: FilterState;
};

const initialState: FilterState = {
    key: "",
    color: "",
    size: "",
    tags: "",
    grade: "",
    // active: "0",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilterState: (state, action: PayloadAction<{ key: keyof FilterState; value: string }>) => {
            const { key, value } = action.payload;
            if (value !== "") {
                state[key] = value;
            }
        }
    },
});

export const { setFilterState } = filtersSlice.actions;
export default filtersSlice.reducer;