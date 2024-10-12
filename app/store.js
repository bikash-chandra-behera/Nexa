import { configureStore } from '@reduxjs/toolkit';
import webSocketReducer from './features/webSocketSlice';

export const store = configureStore({
  reducer: {
    webSocket:webSocketReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      immutableCheck: {
        warnAfter: 64,  // Increase the warning threshold to 64ms (optional)
      },
      serializableCheck: false,  // Disable serializable check if WebSocket is in state
    }),
  devTools: process.env.NODE_ENV !== 'production',
});