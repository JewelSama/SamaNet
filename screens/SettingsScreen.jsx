import {SafeAreaView, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import Logo from "../assets/logo.png"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useContext } from 'react'
import { GlobalContext } from '../context'



const SettingsScreen = ({navigation}) =>  {
    const { setUser, setToken, setId, setLoggedIn } = useContext(GlobalContext)

    const Logout = async() => {
        await AsyncStorage.removeItem(
            'Token')
        await AsyncStorage.removeItem(
            'UserId');

            setUser("") 
            setToken("") 
            setId("") 
            setLoggedIn(false)
            navigation.navigate("SignIn")
    }

  return (
    <SafeAreaView className="h-full bg-white">
        <View className="px-4 h-full">
            <View className="flex flex-row">
                <Text className="flex-1 text-3xl font-bold text-slate-700">Settings</Text>
                <TouchableOpacity className="h-10 w-10 rounded-full bg-gray-300 items-center justify-center" onPress={() => navigation.goBack()}>
                    <Entypo name='chevron-left' size={34} color="rgb(51, 65, 85)" />
                </TouchableOpacity>
            </View>

            <View className="w-full items-center mt-5">
              <Image 
                source={Logo}
                className="h-10 w-10"
                />
            </View>
            <>
                <ScrollView className="mt-8 h-full space-y-4" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:20}}>
                    <TouchableOpacity onPress={() => navigation.navigate("EditProfile")} className="w-full shadow-sm px-3 flex bg-white flex-row h-16 items-center rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <FontAwesome5 name='user-edit' size={30} color="rgb(51, 65, 85)" />
                            <Text className="text-lg font-bold text-slate-700">Edit Profile</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="rgb(51, 65, 85)" />
                    </TouchableOpacity>


                    <TouchableOpacity className="w-full shadow-sm px-3 flex flex-row h-16 items-center bg-white rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <Entypo name='block' size={30} color="rgb(51, 65, 85)" />
                            <Text className="text-lg font-bold text-slate-700">Blocked Accounts</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="rgb(51, 65, 85)" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full shadow-sm px-3 flex flex-row h-16 items-center bg-white rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <Entypo name='bell' size={30} color="rgb(51, 65, 85)" />
                            <Text className="text-lg font-bold text-slate-700">Notifications</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="rgb(51, 65, 85)" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full shadow-sm px-3 flex flex-row h-16 items-center bg-white rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <MaterialIcons name='privacy-tip' size={30} color="rgb(51, 65, 85)" />
                            <Text className="text-lg font-bold text-slate-700">Privacy Policy</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="rgb(51, 65, 85)" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full px-3 shadow-sm flex flex-row h-16 items-center bg-white rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <MaterialCommunityIcons name='vector-triangle' size={30} color="rgb(51, 65, 85)" />
                            <Text className="text-lg font-bold text-slate-700">Terma Of service</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="rgb(51, 65, 85)" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full px-3 flex flex-row h-16 shadow-sm items-center bg-white rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <FontAwesome5 name='file-contract' size={30} color="rgb(51, 65, 85)" />
                            <Text className="text-lg font-bold text-slate-700">Community Guidelines</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="rgb(51, 65, 85)" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full px-3 flex flex-row shadow-sm h-16 items-center bg-white rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <FontAwesome5 name='question-circle' size={30} color="rgb(51, 65, 85)" />
                            <Text className="text-lg font-bold text-slate-700">Support</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="rgb(51, 65, 85)" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full px-3 flex flex-row h-16 items-center bg-red-100 rounded-lg" onPress={Logout}>
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <MaterialCommunityIcons name='logout' size={30} color="color: rgb(220, 38, 38)" />
                            <Text className="text-lg font-bold text-red-600">Logout</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="rgb(220, 38, 38)" />
                    </TouchableOpacity>

                </ScrollView>
            </>
        </View>
    </SafeAreaView>
  )
}




export default SettingsScreen