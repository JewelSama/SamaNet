import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native'
import { Entypo } from "@expo/vector-icons"

const ImgScreen = ({ navigation, route }) => {
    const { img } = route.params;
  return (
    <View className="bg-white h-full relative">
        <Image 
            source={img}
            className="h-full w-full"
        />

        <View className="top-14 items-center  left-0 right-0  absolute">
            <Text className="text-xl font-bold text-gray-100">Jewel Sama</Text>
        </View>
        <TouchableOpacity className=" h-10 w-10 top-12 left-2 absolute rounded-full  bg-gray-100 items-center justify-center" onPress={() => navigation.goBack()}>
            <Entypo name='chevron-left' size={34} color="rgb(51, 65, 85)" />
        </TouchableOpacity>
    </View>    
  )
}

export default ImgScreen