import { View, Text, TouchableOpacity, Image } from 'react-native'
import Pfp from "../assets/avatar3.jpg"
import { useNavigation } from '@react-navigation/native'

const Chat = () => {
    const navigation = useNavigation()
    const name = "Kahz Sama" 
    const msg = 'Besok temui saya di ruang dosen....'
  return (
    <TouchableOpacity className="mb-1 h-16 p-2 flex flex-row" onPress={() => navigation.navigate('ChatScreen', {name: name, msg: msg, Pfp:Pfp})}>
      <View className="space-x-3 flex flex-row items-center h-full">
        <Image 
            source={Pfp}
            className="h-12 w-12 rounded-full"
        />
        <View className="space-y-1">
            <Text className="font-semibold text-xl text-gray-700">{ name }</Text>
            <Text className="font-semibold text-gray-500">{ msg }</Text>
        </View>
      </View>
      <View className="items-center justify-center">
        <Text className="text-gray-600 font-semibold">20:30</Text>
        {/* <Text></Text> */}
      </View>
    </TouchableOpacity>
  )
}

export default Chat