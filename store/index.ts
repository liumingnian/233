/**
 * 配置redux store（状态管理）
 * languageSlice挂载到store
 */
import { configureStore } from "@reduxjs/toolkit";
import FiltersSlice from "./filters";
import LanguageSlice from "./languageSlice";

export const store = configureStore({
    reducer: {
        language: LanguageSlice,
        filters: FiltersSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;