import { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Image, Pressable } from 'react-native'
import GlobalStyles from '../Config/GlobalStyles'
import { Ionicons, Entypo } from "@expo/vector-icons"
import Logo from "../assets/icon1.png"
import Pfp from "../assets/avatar3.jpg"
import Post1 from "../assets/post1.jpeg"
import Post3 from "../assets/post3.jpeg"
import Post4 from "../assets/post4.jpeg"


const HomeScreen = ({ navigation }) => {
  const [feed, setField] = useState(0)

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="h-full ">
      <View className="px-4">
        <View className="mt-4 flex flex-row">
          <View className="flex-1"><Text className="text-3xl font-bold text-slate-700">SamaNet</Text></View>
          <View className="flex flex-row space-x-2">

            <TouchableOpacity onPress={() => navigation.navigate('Search')} className="bg-gray-300 p-2 rounded-full">
            <Entypo name="magnifying-glass" size={24} color="rgb(51, 65, 85)" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} className="bg-gray-300 p-2 rounded-full">
              <Ionicons name="person" size={24} color="rgb(51, 65, 85)" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ChatList')} className="bg-gray-300 p-2 rounded-full">
              <Ionicons name="chatbubble-ellipses-sharp" size={24} color="rgb(51, 65, 85)" />  
            </TouchableOpacity>  

          </View>
        </View>

      <View className="mt-5">
        <Text className="text-slate-700 font-semibold text-lg">Stories</Text>
      </View>
      <ScrollView horizontal={true} className="mt-3 space-x-2" showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingRight:20}}>
        
        <TouchableOpacity className=" h-44 w-32  bg-gray-300 rounded-lg">
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
            <Text className="text-md font-bold text-white mt-3">@Username</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" h-44 w-32 bg-red-300 rounded-lg" onPress={() => navigation.navigate('ImgScreen', {img: Post4})}>
          <Image 
            source={Post4}
            className="h-full  w-full rounded-lg"
          />
          <View className="self-center absolute left-1 top-1 rounded-full h-8 w-8 items-center justify-center bg-[#eeca70]">
            <Image 
              source={Pfp}
              className="h-7 w-7 rounded-full"
            />
          </View>
          <View className="items-center absolute bottom-3 left-0 right-0">
            <Text className="text-md font-bold text-white mt-3">@JewelSama</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" h-44 w-32 bg-red-300 rounded-lg" onPress={() => navigation.navigate('ImgScreen', {img: Post3})}>
          <Image 
            source={Post3}
            className="h-full  w-full rounded-lg"
          />
          <View className="self-center absolute left-1 top-1 rounded-full h-8 w-8 items-center justify-center bg-[#eeca70]">
            <Image 
              source={Pfp}
              className="h-7 w-7 rounded-full"
            />
          </View>
          <View className="items-center absolute bottom-3 left-0 right-0">
            <Text className="text-md font-bold text-white mt-3">@Username</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" h-44 w-32 bg-red-300 rounded-lg" onPress={() => navigation.navigate('ImgScreen', {img: Post1})}>
          <Image 
            source={Post1}
            className="h-full  w-full rounded-lg"
          />
          <View className="self-center absolute left-1 top-1 rounded-full h-8 w-8 items-center justify-center bg-[#eeca70]">
            <Image 
              source={Pfp}
              className="h-7 w-7 rounded-full"
            />
          </View>
          <View className="items-center absolute bottom-3 left-0 right-0">
            <Text className="text-md font-bold text-white mt-3">@Username</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
      <TouchableOpacity className="bg-gray-300 p-2 w-10 h-10 self-center mt-2 rounded-full" onPress={() => navigation.navigate('Create')}>
            <Entypo name="plus" size={24} color="rgb(51, 65, 85)" />
      </TouchableOpacity>

      <View className="flex flex-row h-14 w-full mt-4 rounded-full bg-gray-200 ">
        <Pressable onPress={() => setField(0)} className={`rounded-full h-full w-1/2  items-center justify-center ${feed === 0 &&  'bg-[#eeca70]'}`}>
          <Text className={`text-lg font-bold text-slate-700 ${feed === 0 &&  'text-white'}`}>Explore</Text>
        </Pressable>
        <Pressable onPress={() => setField(1)} className={`rounded-full h-full w-1/2  items-center justify-center ${feed === 1 && 'bg-[#eccb78]'}`}>
          <Text className={`text-lg font-bold text-slate-700 ${feed === 1 &&  'text-white'}`}>Discover</Text>
        </Pressable>
      </View>

    {feed === 0 && ( 
  <Text>Explore</Text>
    
    
    )}
     
    
  {feed === 1 && (
    <View className="items-center justify-center mt-32">
      <Text className="text-3xl font-semibold text-gray-300">Coming Soon</Text>
    </View>
  )}

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen