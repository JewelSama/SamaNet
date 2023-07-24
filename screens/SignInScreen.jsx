import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { useState, useContext } from 'react'
import GlobalStyles from '../Config/GlobalStyles'
import Logo from "../assets/logo.png"
import { GlobalContext } from '../context'
import { baseUrl } from '../utils/endPoints'
import AsyncStorage from '@react-native-async-storage/async-storage'


const SignInScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUser, user, setToken, setLoggedIn, setId } = useContext(GlobalContext)

  

  const formData = {
    email: email.toLowerCase().trim(),
    password: password.trim()
  }
  


  const Login = () => {
    if(!(email && password)){
      setLoading(false)
      return alert("Please fill in all fields")
    }
    setLoading(true)
    fetch(`${baseUrl}/user/login`, {
      method: "POST",
      headers: new Headers({
        "Accept": "application/json",
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(resp => {
      setLoading(false)
      // console.log(resp)
      
        
          AsyncStorage.setItem(
            'Token',
            resp?.authToken,
          )
          AsyncStorage.setItem(
            'UserId', resp?.id.toString());
            setId(resp?.id)
      setToken(resp?.authToken)
      setUser(resp)
      if(resp?.error){
        return alert(resp?.error)
      }
      setLoggedIn(true)
      navigation.navigate("Home")
    })
    .catch(err =>{
      setLoading(false)
      alert("Something went wrong")
      console.log(err.message)
    })
  }

  


  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="h-full bg-white">
    <ScrollView className="px-7 relative h-full" contentContainerStyle={{paddingBottom: 10}} automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false}>
    <View className="mt-12 space-y-2">
          <Text className="text-3xl font-bold">Ohayo, Welcome Back!👋</Text>
          <Text className="text-lg font-semibold text-slate-400">Hello again, you've been missed!</Text>
    </View>
    <View className="mt-10 space-y-4">
    <View className="space-y-1">
            <Text className="text-lg font-semibold">Email Address<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 w-full  font-semibold h-12 border rounded-md"
              placeholder='Enter Email'
              textAlignVertical='center'
              spellCheck={false}
              value={email}
              onChangeText={setEmail}
            />
    </View>

    <View className="space-y-1">
            <Text className="text-lg font-semibold">Password<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-12  border rounded-md mb-6"
              placeholder='Enter Password'
              textAlignVertical='center'
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
    </View>          

    </View>

    <TouchableOpacity
          className="bg-[#eeca70] h-14 w-full items-center mt-10  justify-center rounded-md" 
          onPress={Login}>
            {!loading ? (<Text className="font-bold text-white text-lg">Sign In</Text>) : (
              <ActivityIndicator color="white" size="large" />
            )}
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
    </ScrollView>
    </SafeAreaView>
  )
}

export default SignInScreen