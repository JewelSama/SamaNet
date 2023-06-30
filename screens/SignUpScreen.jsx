import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, TextInput} from 'react-native'
import React from 'react'
import GlobalStyles from '../Config/GlobalStyles'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="h-full bg-white">
      <View className="px-7">
        <View className="mt-4 space-y-2">
          <Text className="text-3xl font-bold">Create Account</Text>
          <Text className="text-md font-bold text-slate-400">Connect with your friends today!</Text>
        </View>

        
        <ScrollView className="mt-7 space-y-3" showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true}  contentContainerStyle={{paddingBottom: 60}}>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Username<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 w-full h-14 border rounded-md"
              placeholder='Enter Username'
              textAlignVertical='center'
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Email Address<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 w-full h-12 border rounded-md"
              placeholder='Enter your email'
              textAlignVertical='center'
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Firstname<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 w-full h-12 border rounded-md"
              placeholder='Enter your Firstname'
              textAlignVertical='center'
              autoCapitalize='words'
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Lastname<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 w-full h-12 border rounded-md"
              placeholder='Enter your Lastname'
              textAlignVertical='center'
              autoCapitalize='words'
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Password<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 w-full h-12 border rounded-md"
              placeholder='Enter Password'
              textAlignVertical='center'
              secureTextEntry={true}
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Confirm Password<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 w-full h-12 border rounded-md mb-6"
              placeholder='Confirm Password'
              textAlignVertical='center'
              secureTextEntry={true}
            />
          </View>

        </ScrollView>
        <TouchableOpacity
          className="bg-[#eeca70] h-14 w-full items-center absolute bottom-10 left-6  justify-center rounded-md" 
          onPress={()=> navigation.navigate("SignUp")}>
            <Text className="font-bold text-white text-lg">Sign Up</Text>
        </TouchableOpacity>
        <View className="flex flex-row items-center justify-center">
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}><Text className="font-bold text-lg text-[#eeca70]">Sign In</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
  
}

export default SignUpScreen