import { configureStore } from "@reduxjs/toolkit";

import typeSlice from "../utils/slices/typeSlice";
import objectSlice from "../utils/slices/objectSlice";
import houseSlice from "../utils/slices/houseSlice";
import homeSlice from "../utils/slices/homeSlice";

export const store = configureStore({
    reducer:{
        typeSlice,
        objectSlice,
        houseSlice,
        homeSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
})