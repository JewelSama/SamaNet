import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import Logo from "../assets/logo.png"




const CreatePostScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-gray-100 h-full">
        <View className="px-4">
            <View className="flex flex-row">
                <Text className="flex-1 text-3xl font-bold text-slate-700">Create Post</Text>
                <TouchableOpacity className="h-10 w-10 rounded-full bg-gray-200 items-center justify-center" onPress={() => navigation.goBack()}>
                    <Entypo name='chevron-left' size={34} color="rgb(51, 65, 85)" />
                </TouchableOpacity>
            </View>
            <View className="w-full items-left mt-5">
              <Image 
                source={Logo}
                className="h-10 w-10"
                />
            </View>
        </View>
    </SafeAreaView>    
  )
}

export default CreatePostScreen