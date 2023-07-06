import { View, Text, TouchableOpacity, Image } from 'react-native'
import Pfp from "../assets/avatar3.jpg"

const Search = () => {


  return (
        <>
            <TouchableOpacity className="rounded-lg flex-row justify-between items-center bg-white  py-1 px-3 h-20 mb-3">
                <View className="flex flex-row space-x-3">
                    <Image 
                        source={Pfp}
                        className="h-14 w-14"
                    />
                    <View className="flex flex-col">
                        <Text className="font-bold text-lg"></Text>
                        <Text className="font-semibold text-gray-400 text-md">...</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
  )
}

export default Search