import { configureStore } from "@reduxjs/toolkit";
import bottomSheetReducer from "./actions/bottomSheet";

export default configureStore({
  reducer: {
    bottomSheet: bottomSheetReducer,
  },
});
