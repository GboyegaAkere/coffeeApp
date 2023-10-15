import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text,Image } from 'react-native'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
 

const WelcomeScreen = () => {
  const ringPadding1 = useSharedValue(0)
  const ringPadding2 = useSharedValue(0)

  React.useEffect (()=>{
    // ringPadding1.value = 0
    // ringPadding2.value = 0

    setTimeout(() => {
      ringPadding1.value = withSpring(ringPadding1.value+hp(5))
    },100);

    setTimeout(() => {
      ringPadding2.value = withSpring(ringPadding2.value+hp(5))
    },100);

  },[])
  return (
    <View className="flex-1 justify-center items-center bg-green-300 space-y-10">
        <Animated.View className="rounded-full bg-white/20" style={{padding:ringPadding1}}>
          <Animated.View className="rounded-full bg-white/20" style={{padding:ringPadding2}}>
           <Image source={require("../assets/images/chef.jpg")} style={{width:hp(20), height:hp(20)}} className="rounded-full"/>
          </Animated.View>
        </Animated.View>
        <StatusBar style="light"/>
     
      {/* welcome message */}
      <View className="flex  items-center gap-2">
        <Text style={{fontSize:hp(7)}} className="font-bold text-white text-5xl tracking-widest">CHEFS</Text>
        <Text  style={{fontSize:hp(2)}}>Get ready to embark on a culinary journey with us</Text>
      </View>
    </View>
  )
}

export default WelcomeScreen
