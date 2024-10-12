import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    ltpData:[],
    isConnected:false,
    error:null,
}

export const webSocketSlice = createSlice({
    name:"webSocket",
    initialState,
    reducers:{
        setConnected:(state,action)=>{
            state.isConnected =true;
            state.ws = action.payload;
        },
        setDisconnected:(state)=>{
            state.isConnected =false;
        },
        setError:(state,action)=>{
            state.error = action.payload
        },
        updateLtpData: (state, action) => {
            
            action.payload.forEach((item) => {
              const existingItem = state.ltpData.find((i) => i.symbol === item.symbol);
              if (existingItem) {
                // Update the existing symbol data
                state.ltpData = state.ltpData.map((i) =>
                  i.symbol === item.symbol ? { ...i, ltp: item.ltp } : i
                );
              } else {
                // Add the new symbol data
                state.ltpData.push(item);
              }
            });
        },
        removeSymbol: (state, action) => {
          const symbolToRemove = action.payload;
          state.ltpData = state.ltpData.filter((item) => item.symbol !== symbolToRemove);
        }
    }
})
export const { setConnected, setDisconnected, setError, updateLtpData,removeSymbol} = webSocketSlice.actions;

export default webSocketSlice.reducer;