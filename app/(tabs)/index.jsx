import { Text, View,TextInput,Button } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch,useSelector } from 'react-redux';
import { removeSymbol } from '../features/webSocketSlice';
import { connectWebSocket,subscribeToSymbol,unSubscribeToSymbol } from '../features/webSocketThunk';
import { useEffect,useState } from 'react';
import LtpDataComponent from './../components/LtpData'

export default function Home() {
  const dispatch = useDispatch();
  const [newSymbol, setNewSymbol] = useState('');
   // Assuming you store the WebSocket instance in Redux state

  useEffect(() => {
    // Connect WebSocket and subscribe to 'aapl' symbol when the app loads
    dispatch(connectWebSocket(['bpl']));

   
  },[dispatch])

  const handleSubscribe = () => {
    if (newSymbol) {
      subscribeToSymbol(newSymbol);  // Subscribe to the new symbol
    }
  };
  const handleUnSubscribe = () => {
    if (newSymbol) {
      unSubscribeToSymbol(newSymbol);
      dispatch(removeSymbol(newSymbol))  // Subscribe to the new symbol
    }
  };
  return (
    <SafeAreaView>
      <View className='items-center w-full mt-8 '>

        <Text className=' text-[20px] font-bold'>Home Page</Text>
        <TextInput
          
          placeholder="Enter symbol"
          value={newSymbol}
          onChangeText={setNewSymbol}
        />
        <Button className='mb-16' title="Subscribe to Symbol" onPress={handleSubscribe} />
        <Button className='mb-16' title="UnSubscribe to Symbol" onPress={handleUnSubscribe} />
        <LtpDataComponent />
      </View>
    </SafeAreaView>


  );
}


