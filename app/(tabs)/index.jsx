import { Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { connectWebSocket } from '../features/webSocketThunk';
import { useEffect } from 'react';
import LtpDataComponent from './../components/LtpData'
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Connect WebSocket and subscribe to 'aapl' symbol when the app loads
    const ws = dispatch(connectWebSocket(['aapl']));

    return () => {
      if (ws) ws.close(); // Cleanup WebSocket on unmount
    };
  },[dispatch])
  return (
    <SafeAreaView>
      <View className='items-center w-full mt-8'>

          <Text className=' text-[20px] font-bold'>Home Page</Text>
        <LtpDataComponent/>
      </View>
    </SafeAreaView>


  );
}


