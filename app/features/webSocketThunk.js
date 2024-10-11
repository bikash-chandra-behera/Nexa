import { setConnected, setDisconnected, setError, updateLtpData } from './webSocketSlice';
export const connectWebSocket = (symbols) => (dispatch) => {
    const ws = new WebSocket('ws://192.168.29.104:8080');
    
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
  
    return ws;
  };
  