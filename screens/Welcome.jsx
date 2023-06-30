import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyles from "../Config/GlobalStyles"
import Logo from "../assets/logo.png"
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation =useNavigation()
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="h-full bg-white">
      <View className="items-center px-7">
        <View className="mt-28">
          <Image 
            source={Logo}
            className="w-40 h-40"
          />
        </View>
        <View className="mt-24 items-center">
          <Text className="font-bold text-xl">Hey! Welcome to <Text className=" text-[#c78964] text-2xl font-extrabold">SamaNet</Text></Text>
          <View className="items-center justify-center mt-2">
            <Text className="font-semibold text-slate-400 text-md">Get ready to share your photos and videos,</Text>
            <Text className="font-semibold text-slate-400 text-md">connect and chat with friends and our AI bot(Sama),</Text>
            <Text className="font-semibold text-slate-400 text-md">and discover new things every day.</Text>
          </View>
        </View>

        <View className="space-y-5 w-full mt-16">
        <TouchableOpacity
          className="bg-[#eeca70] h-14 w-full items-center justify-center rounded-md" 
          onPress={()=> navigation.navigate("SignUp")}>
            <Text className="font-bold text-slate-700 text-lg">Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-slate-200 h-14 w-full items-center justify-center rounded-md shadow-sm" 
          onPress={()=> navigation.navigate("SignIn")}
          >
            <Text className="font-bold text-slate-700 text-lg">I already have an account</Text>
        </TouchableOpacity>
        
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Welcome