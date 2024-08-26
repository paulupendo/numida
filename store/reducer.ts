import { combineReducers } from "@reduxjs/toolkit";

import loans from "./loans.slice";

const rootReducer = combineReducers({
  loans,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
