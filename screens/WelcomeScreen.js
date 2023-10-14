import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text,Image } from 'react-native'

const WelcomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-green-300 space-y-10">
        <View className="rounded-full">
            <Image source={require("../assets/images/chef.jpg")} style={{width:200, height:200}} className="rounded-full"/>
        </View>
        <StatusBar style="light"/>
     
      {/* welcome message */}
      <View className="flex  items-center gap-2">
        <Text className="font-bold text-white text-5xl tracking-widest">CHEFS</Text>
        <Text>Get ready to embark on a culinary journey with us</Text>
      </View>
    </View>
  )
}

export default WelcomeScreen
