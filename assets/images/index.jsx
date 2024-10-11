import {Image, ScrollView, Text, View } from 'react-native'
import { router,Link,Navigator} from 'expo-router'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'

import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'

export default function App(){
  useEffect(() => {
    // Timer for 3 seconds
    const timer = setTimeout(() => {
      router.replace('/(tab)'); // Navigate to Home screen after 3 seconds
    }, 3000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className='w-full justify-center items-center h-full px-4'>
          <Image  
          source={images.nexa}
          className="scale-50"
          resizeMethod='contain'
         
          />
          
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161688' style='light'/>
    </SafeAreaView>
  )
}
