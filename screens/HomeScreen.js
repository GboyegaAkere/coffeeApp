import React from 'react'
import { View, Text, StatusBar, ScrollView,Image, TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from './Categories';
import Recipes from '../components/Recipes';

const HomeScreen = () => {
  const [active, setActive] = React.useState("Beef")
  
  return (
    <View className ="flex-1 bg-white">
      <ScrollView 
       contentContainerStyle={{paddingBottom: 50, padding:5}}
       className="space-y-6 pt-6">
      
         <View className="flex flex-row items-center justify-between">
           <Image source={{uri:"https://i.ibb.co/nMdcxWw/avatar.jpg"}} style={{height: hp(5), width: hp(5.5)}} className="rounded-full" />
           <BellIcon size={hp(4)} color="gray"/>
         </View>


        <View className="">
          <Text style={{fontSize:hp(2)}}>Hello,Gboyega!</Text>
          <Text className="text-2xl font-semibold">Discover and Cook,</Text>
          <Text style={{fontSize:hp(4)}} className="">amazing <Text className="text-yellow-500">dishes</Text> </Text>
        </View>

        <View className="flex flex-row justify-between p-2 bg-gray-200 rounded-full">
          <TextInput className="flex-1 text-base tracking-wider mb-1 pl-3" style={{fontSize:hp(1.7)}} placeholder='search for favorite food'/>
          <View className="bg-white rounded-full w-8 h-8 items-center justify-center">
            <MagnifyingGlassIcon/>
          </View>
        </View>
        <Categories active={active} setActive={setActive}/>
        <Recipes/>
      </ScrollView>
      
    </View>
  )
}

export default HomeScreen
