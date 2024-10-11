import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const LtpDataComponent = () => {
  const ltpStock = useSelector((state) => state.webSocket.ltpData);

  return (
    <View>
    <Text>HELLO MR BIKASH</Text>
      {ltpStock.length > 0 ? (
        ltpStock.map((item) => (
          <Text key={item.symbol}>
            Symbol: {item.symbol}, LTP: {item.ltp}
          </Text>
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

export default LtpDataComponent;
