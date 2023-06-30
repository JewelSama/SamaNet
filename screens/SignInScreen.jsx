import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import GlobalStyles from '../Config/GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import Logo from "../assets/logo.png"


const SignInScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="h-full bg-white">
    <View className="px-7 relative h-full">
    <View className="mt-12 space-y-2">
          <Text className="text-3xl font-bold">Ohayo, Welcome Back!👋</Text>
          <Text className="text-lg font-semibold text-slate-400">Hello again, you've been missed!</Text>
    </View>
    <View className="mt-10 space-y-4">
    <View className="space-y-1">
            <Text className="text-lg font-semibold">Email Address<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 w-full h-14 border rounded-md"
              placeholder='Enter Email'
              textAlignVertical='center'
            />
    </View>

    <View className="space-y-1">
            <Text className="text-lg font-semibold">Password<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 w-full h-12 border rounded-md mb-6"
              placeholder='Enter Password'
              textAlignVertical='center'
              secureTextEntry={true}
            />
    </View>          

    </View>

    <TouchableOpacity
          className="bg-[#eeca70] h-14 w-full items-center mt-10  justify-center rounded-md" 
          onPress={()=> navigation.navigate("Home")}>
            <Text className="font-bold text-white text-lg">Sign In</Text>
    </TouchableOpacity>
    
    <View className="flex flex-row items-center mt-8 justify-center">
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}><Text className="font-bold text-lg text-[#eeca70]">Sign Up</Text></TouchableOpacity>
    </View>

    <View className="w-full items-center mt-20">
      <Image 
        source={Logo}
        className="h-28 w-28"
        />
    </View>

    </View>
    </SafeAreaView>
  )
}

export default SignInScreen