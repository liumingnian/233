/**
 * 
 * Redux：语言显示
 * 
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Language = "CN" | "EN";

const initialState: Language = "CN";

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<any>) => {
            return action.payload;
        }
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
