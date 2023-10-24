import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { categoryData } from '../helper'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Categories = ({active, setActive}) => {
  return (
    <View>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      className="space-x-4"
      contentContainerStyle={{paddingHorizontal: 15}}
      >
       {categoryData && categoryData.map((category,index)=>{
        let isactive = category.name == active
        let activeBtn = isactive ? "bg-black" : "bg-yellow-400"

        return(
          <TouchableOpacity key={index} className="flex items-center mt-4" onPress={()=>setActive(category.name)}>
            <View className={"rounded-full p-[6px] "+activeBtn}>
              <Image source={{uri:"https://i.ibb.co/nMdcxWw/avatar.jpg" }} className="rounded-full" style={{height:hp(6), width:hp(6)}}/>
            </View>
            <Text className="" style={{fontSize:hp(2.0)}}>{category.name}</Text>
          </TouchableOpacity>
        )
       })}
      </ScrollView>
    </View>
  )
}

export default Categories