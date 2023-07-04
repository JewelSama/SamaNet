import {SafeAreaView, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import Logo from "../assets/logo.png"



const SettingsScreen = ({navigation}) =>  {

    const Logout = () => {

    }

  return (
    <SafeAreaView className="bg-white h-full">
        <View className="px-4">
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
                    <TouchableOpacity onPress={() => navigation.navigate("EditProfile")} className="w-full shadow-sm px-3 flex bg-yellow-500 flex-row h-16 items-center rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <FontAwesome5 name='user-edit' size={30} color="white" />
                            <Text className="text-lg font-bold text-white">Edit Profile</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="white" />
                    </TouchableOpacity>


                    <TouchableOpacity className="w-full shadow-sm px-3 flex flex-row h-16 items-center bg-yellow-400 rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <Entypo name='block' size={30} color="white" />
                            <Text className="text-lg font-bold text-white">Blocked Accounts</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full shadow-sm px-3 flex flex-row h-16 items-center bg-yellow-500 rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <Entypo name='bell' size={30} color="white" />
                            <Text className="text-lg font-bold text-white">Notifications</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full shadow-sm px-3 flex flex-row h-16 items-center bg-yellow-400 rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <MaterialIcons name='privacy-tip' size={30} color="white" />
                            <Text className="text-lg font-bold text-white">Privacy Policy</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full px-3 shadow-sm flex flex-row h-16 items-center bg-yellow-500 rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <MaterialCommunityIcons name='vector-triangle' size={30} color="white" />
                            <Text className="text-lg font-bold text-white">Terma Of service</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full px-3 flex flex-row h-16 shadow-md items-center bg-yellow-400 rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <FontAwesome5 name='file-contract' size={30} color="white" />
                            <Text className="text-lg font-bold text-white">Community Guidelines</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full px-3 flex flex-row shadow-sm h-16 items-center bg-yellow-500 rounded-lg">
                        <View className="flex flex-row space-x-3 items-center flex-1">
                            <FontAwesome5 name='question-circle' size={30} color="white" />
                            <Text className="text-lg font-bold text-white">Support</Text>
                        </View>
                        <Entypo name='chevron-right' size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full px-3 flex flex-row h-16 items-center bg-red-200 rounded-lg" onPress={Logout}>
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