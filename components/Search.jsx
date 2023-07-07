import { View, Text, TouchableOpacity, Image } from 'react-native'
import Pfp from "../assets/avatar3.jpg"
import { AntDesign } from "@expo/vector-icons"

const Search = () => {


  return (
        <>
            <TouchableOpacity className="flex flex-row bg-white rounded-sm p-2 h-16  items-center justify-center mb-2 ">
                <View className="flex flex-row flex-1 space-x-6">
                    <Image 
                        source={Pfp}
                        className="h-12 w-12 rounded-full"
                    />
                <View className="">
                    <Text className="font-bold text-lg">Sama Billions</Text>
                    <Text className="font-semibold text-sm">Friend~ish</Text>
                </View>
                </View>
                <View>
                    <AntDesign name="right" size={30} color="rgb(51, 65, 85)" />
                </View>
            </TouchableOpacity>

        </>
  )
}

export default Search