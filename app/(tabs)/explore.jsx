
import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';


export default function TabTwoScreen() {
  const [stock, setStock] = useState(['bpl', 'vv','kk'])
  const ltpStock = useSelector((state) => state.webSocket.ltpData);
  return (
    <SafeAreaView>
      <View className='items-center w-full mt-8 '>

      <Text className="text-[30px] font-bold">Explore</Text>
      {ltpStock.length > 0 ? (
        ltpStock.map((item) => {
          if(stock.includes(item.symbol)){
            return (
              <Text key={item.symbol}>
                Symbol: {item.symbol}, LTP: {item.ltp}
              </Text>
            )
          }
        })
      ) : (
        <Text>No data available</Text>
      )}
      </View>

    </SafeAreaView>
  );
}

