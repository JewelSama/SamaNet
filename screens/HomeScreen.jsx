import { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Image, Pressable } from 'react-native'
import GlobalStyles from '../Config/GlobalStyles'
import { Ionicons, Entypo } from "@expo/vector-icons"
import Logo from "../assets/icon1.png"
import Pfp from "../assets/avatar3.jpg"


const HomeScreen = () => {
  const [feed, setField] = useState(0)

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="h-full ">
      <View className="px-4">
        <View className="mt-4 flex flex-row">
          <View className="flex-1"><Text className="text-3xl font-bold text-slate-700">SamaNet</Text></View>
          <View className="flex flex-row space-x-2">

            <TouchableOpacity className="bg-[#eeca70] p-2 rounded-full">
            <Entypo name="plus" size={24} color="rgb(51, 65, 85)" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#eeca70] p-2 rounded-full">
              <Ionicons name="person" size={24} color="rgb(51, 65, 85)" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#eeca70] p-2 rounded-full">
              <Ionicons name="chatbubble-ellipses-sharp" size={24} color="rgb(51, 65, 85)" />  
            </TouchableOpacity>  

          </View>
        </View>

      <View className="mt-5">
        <Text className="text-slate-700 font-semibold text-lg">Stories</Text>
      </View>
      <ScrollView horizontal={true} className="mt-3 space-x-2" showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingRight:20}}>
        
        <TouchableOpacity className=" h-44 w-32 bg-red-300 rounded-lg">
          <Image 
            source={Logo}
            className="h-28  w-full rounded-lg"
          />
          <View className="self-center -mt-5 rounded-full h-10 w-10 items-center justify-center bg-[#eeca70]">
            <Image 
              source={Pfp}
              className="h-8 w-8 rounded-full"
            />
          </View>
          <View className="items-center">
            <Text className="text-md font-bold text-slate-700 mt-3">@Username</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" h-44 w-32 bg-red-300 rounded-lg">
          <Image 
            source={Logo}
            className="h-full  w-full rounded-lg"
          />
          <View className="self-center absolute left-1 top-1 rounded-full h-8 w-8 items-center justify-center bg-[#eeca70]">
            <Image 
              source={Pfp}
              className="h-7 w-7 rounded-full"
            />
          </View>
          <View className="items-center absolute bottom-3 left-0 right-0">
            <Text className="text-md font-bold text-slate-700 mt-3">@Username</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" h-44 w-32 bg-red-300 rounded-lg">
          <Image 
            source={Logo}
            className="h-full  w-full rounded-lg"
          />
          <View className="self-center absolute left-1 top-1 rounded-full h-8 w-8 items-center justify-center bg-[#eeca70]">
            <Image 
              source={Pfp}
              className="h-7 w-7 rounded-full"
            />
          </View>
          <View className="items-center absolute bottom-3 left-0 right-0">
            <Text className="text-md font-bold text-slate-700 mt-3">@Username</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" h-44 w-32 bg-red-300 rounded-lg">
          <Image 
            source={Logo}
            className="h-full  w-full rounded-lg"
          />
          <View className="self-center absolute left-1 top-1 rounded-full h-8 w-8 items-center justify-center bg-[#eeca70]">
            <Image 
              source={Pfp}
              className="h-7 w-7 rounded-full"
            />
          </View>
          <View className="items-center absolute bottom-3 left-0 right-0">
            <Text className="text-md font-bold text-slate-700 mt-3">@Username</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>

      <View className="flex flex-row h-14 w-full mt-6 rounded-full bg-slate-200">
        <Pressable onPress={() => setField(0)} className={`rounded-full h-full w-1/2  items-center justify-center ${feed === 0 &&  'bg-green-400'}`}>
          <Text className={`text-lg font-bold text-slate-700 ${feed === 0 &&  'text-white'}`}>Explore</Text>
        </Pressable>
        <Pressable onPress={() => setField(1)} className={`rounded-full h-full w-1/2  items-center justify-center ${feed === 1 && 'bg-green-400'}`}>
          <Text className={`text-lg font-bold text-slate-700 ${feed === 1 &&  'text-white'}`}>Explore</Text>
        </Pressable>
      </View>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen