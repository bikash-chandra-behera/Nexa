import { setConnected, setDisconnected, setError, updateLtpData } from './webSocketSlice';

let ws = null;
export const connectWebSocket = (symbols) => (dispatch) => {
    ws = new WebSocket('ws://192.168.29.104:8080');
    
    ws.onopen = () => {
      dispatch(setConnected());
      ws.send(JSON.stringify({ type: 'subscribe', symbols: symbols }));
    };
  
    ws.onmessage = (e) => {
      const { type, data } = JSON.parse(e.data);
      if (type === 'ltp_update') {
        dispatch(updateLtpData(data));  // Dispatch LTP updates to Redux store
      }
    };
  
    ws.onerror = (e) => {
      dispatch(setError(e.message));
    };
  
    ws.onclose = (e) => {
      dispatch(setDisconnected());
      console.log('WebSocket closed:', e.code, e.reason);
    };
  
    
  };
  export const subscribeToSymbol = (newSymbol) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: 'subscribe', symbols: [newSymbol] }));
      console.log(`Subscribed to ${newSymbol}`);
    } else {
      console.error('WebSocket is not open');
    }
  };
  export const unSubscribeToSymbol = (newSymbol) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: 'unsubscribe', symbols: [newSymbol] }));
      console.log(`UNSubscribed to ${newSymbol}`);
    } else {
      console.error('WebSocket is not open');
    }
  };