import { SafeAreaView, View, Text, Image } from 'react-native'
import React from 'react'
import GlobalStyles from "../Config/GlobalStyles"
import Logo from "../assets/logo.png"

const Welcome = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="h-full bg-[#14141414]">
      <View className=" items-center">
        <View className="mt-10">
          <Image 
            source={Logo}
            className="w-24 h-24 p-"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Welcome