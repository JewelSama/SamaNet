import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import { Entypo, FontAwesome } from "@expo/vector-icons"
import Logo from "../assets/logo.png"
import { useState } from "react"
import Search from '../components/Search'


const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState('')



  return (
    <SafeAreaView className="bg-white h-full">
        <View className="px-4">
            <View className="flex flex-row justify-between">
                <TouchableOpacity className=" h-10 w-10 rounded-full  bg-gray-200 items-center justify-center" onPress={() => navigation.goBack()}>
                    <Entypo name='chevron-left' size={34} color="rgb(51, 65, 85)" />
                </TouchableOpacity>
                <View className=" mt-1">
                  <Image 
                    source={Logo}
                    className="h-10 w-10 self-end"
                    />
                </View>
            </View>
            
            <View className="flex flex-row  justify-between space-x-4 px-5 mt-4">
              <View className="flex flex-row items-center justify-center bg-white  h-14 pb-2 px-5  border border-gray-200 rounded-lg">
                <TextInput 
                  // style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
                  className="w-full h-full font-semibold text-gray-600 text-lg"
                  placeholder="Search..."
                  value={search}
                  onChangeText={setSearch}
                  autoFocus={true}
                  // caretHidden={loading}
                  selectionColor="#eeca70"
                />
              {search && (
                <TouchableOpacity className="bg-gray-200 absolute h-7 w-7 right-2 items-center justify-center rounded-md" onPress={() => setSearch("")}>  
                  <FontAwesome name="times" size={24} color="rgb(107, 114, 128)" />
                </TouchableOpacity>
              )}
              </View>
        </View>
        <ScrollView className="mt-4" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:20}}>
          <Search />
          <Search />
          <Search />
          <Search />
          <Search />
          <Search />
        </ScrollView>

         </View>
    </SafeAreaView>        
  )
}

export default SearchScreen