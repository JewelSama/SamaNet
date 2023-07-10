import {SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Entypo } from "@expo/vector-icons"
import Chat from '../components/Chat'

const ChatListScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="h-full bg-white">
        <View className="px-4">
            <View className="flex flex-row">
                <Text className="flex-1 text-3xl font-bold text-slate-700">Chat</Text>
                <TouchableOpacity className="h-10 w-10 rounded-full bg-gray-300 items-center justify-center" onPress={() => navigation.goBack()}>
                    <Entypo name='chevron-left' size={34} color="rgb(51, 65, 85)" />
                </TouchableOpacity>
            </View>
          <>
            <ScrollView className="mt-6" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
              <Chat />
              <Chat />
              <Chat />
            </ScrollView>
          </>

          </View>
     </SafeAreaView>       
  )
}

export default ChatListScreen