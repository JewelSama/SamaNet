import { TransitionPresets, createStackNavigator } from "@react-navigation/stack" 
import { Platform } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import HomeScreen from "./screens/HomeScreen"
import SignInScreen from "./screens/SignInScreen"
import SignUpScreen from "./screens/SignUpScreen"
import Welcome from "./screens/Welcome"
import ValidateScreen from "./screens/ValidateScreen"
import ChatListScreen from "./screens/ChatListScreen"
import ProfileScreen from "./screens/ProfileScreen"
import SearchScreen from "./screens/SearchScreen"
import SettingsScreen from "./screens/SettingsScreen"
import EditProfileScreen from "./screens/EditProfileScreen"
import CreatePostScreen from "./screens/CreatePostScreen"
import ImgScreen from "./screens/ImgScreen"
import ChatScreen from "./screens/ChatScreen"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "./context"




const StackNavigator = () => {
  const [ firstTime, setFirstTime ] = useState(true)

  const {setLoggedIn, loggedIn, setToken, setId} = useContext(GlobalContext)



  useEffect(() => {
    const isFirstTime = async () => {
      try {
        const result = await AsyncStorage.getItem('first-time')
        if(result === null){
          setFirstTime(true)
          await AsyncStorage.setItem('first-time', "myFirstTime");
        } 
        if(result !== null){
          setFirstTime(false)
        }
        // console.log(result)
        // console.log(firstTime)
      } catch (e) {
        // saving error
        console.log(e)
      }
    };
    isFirstTime()

  }, [])

  useEffect(() => {
    const saa = async () => { 
      value = await AsyncStorage.getItem('Token')
      setToken(value)
      setLoggedIn(true)
      // console.log(value)
      
    }
    const jaa = async () => {
      value = await AsyncStorage.getItem('UserId')
      setId(value)
      setLoggedIn(true)
      // console.log("onValScr", value)
    }
    jaa()
    saa()
  }, [])

  






    const Stack = createStackNavigator()
    const transi = () => {
      if(Platform.OS === 'android'){
        return {...TransitionPresets.RevealFromBottomAndroid}
      } else if(Platform.OS === 'ios'){
        return {...TransitionPresets.ModalSlideFromBottomIOS}
      }
    }
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {firstTime &&
        <Stack.Screen name="Welcome" component={Welcome} />
      }
      {!loggedIn ? (
         <> 
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Validate" component={ValidateScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
         </> 
       ) : ( 
         <> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChatList" component={ChatListScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={
          transi()
          
        } />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={
          transi()
          
        } />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={
          transi()
          
        } />
        <Stack.Screen name="Create" component={CreatePostScreen} options={
          transi()
          
        } />

        <Stack.Screen name="ImgScreen" component={ImgScreen} options={
          transi()
          
        } />
         </> 
       )} 

        

    </Stack.Navigator>
  )
}

export default StackNavigator