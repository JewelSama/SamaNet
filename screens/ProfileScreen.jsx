import { SafeAreaView, TouchableOpacity, View, Text, Image, ScrollView } from 'react-native'
import { useLayoutEffect } from 'react'
import { Entypo, Feather } from "@expo/vector-icons"
import Pfp from "../assets/avatar3.jpg"


const ProfileScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "PROFILE",
            headerShown: true,
            headerTintColor: 'rgb(51, 65, 85)',
            headerRight: () => (
                <TouchableOpacity className="mr-2" onPress={() => navigation.navigate("Settings")}>
                    <Feather name='settings' size={32} color="rgb(51, 65, 85)" />
                </TouchableOpacity>
            )
        })


    }, [navigation])



  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-4">
        <View className="bg-gray-100 mt-6 h-48 w-full items-center justify-center">
        <View className="items-center relative bg-slate-400 h-36 w-36 rounded-full self-center justify-center">
          <TouchableOpacity>
          <Image 
            source={Pfp}
            className="h-32 w-32 rounded-full"
          />
          </TouchableOpacity>
          <TouchableOpacity className="absolute bottom-2 right-6">
            <Feather name='edit' size={28} color="rgb(51, 65, 85)" />
          </TouchableOpacity>
        </View>
        </View>
        <View className="mt-10 items-center justify-center rounded-sm h-20 bg-gray-100">
          <Text>Bio Datas</Text>
        </View>
        <ScrollView className="h-full">
          <View className="items-center justify-center mt-40">
          <Text className="text-3xl font-semibold text-gray-300">No Posts yet</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen