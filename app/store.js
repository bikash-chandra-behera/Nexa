import { configureStore } from '@reduxjs/toolkit';
import webSocketReducer from './features/webSocketSlice';

export const store = configureStore({
  reducer: {
    webSocket:webSocketReducer,
  },
});