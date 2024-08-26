import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "redux";

import rootReducer, { RootState } from "./reducer";

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export default store;
