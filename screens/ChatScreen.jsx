import { SafeAreaView, View, Text,TouchableOpacity, Image, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { Entypo, MaterialIcons } from "@expo/vector-icons"
import { useState } from 'react';


const ChatScreen = ({ navigation, route }) => {
  const { name, Pfp} = route.params;
  const [message, setMessage] = useState('')


  return (
    <SafeAreaView className="h-full bg-white">
        <KeyboardAvoidingView className="px-4 h-full" behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={20}>
          <View className="flex items-center flex-row justify-between border-b border-gray-100 pb-2">
            <TouchableOpacity className=" h-10 w-10 rounded-full bg-gray-300 items-center justify-center" onPress={() => navigation.goBack()}>
              <Entypo name='chevron-left' size={34} color="rgb(51, 65, 85)" />
            </TouchableOpacity>
              <Text className="text-xl font-bold text-gray-600">{ name }</Text>
            <View className=" flex-row">
              <View>
                <Image 
                  source={ Pfp }
                  className="h-10 w-10 rounded-full"
                />
              </View>
            </View>
        </View>
        <>
          <ScrollView automaticallyAdjustKeyboardInsets={true} className="h-full" showsVerticalScrollIndicator={false}>
          
          </ScrollView>
          
        <View className="flex flex-row items-center  justify-center bg-white  h-14 pb-2 px-5  border border-gray-200 rounded-lg">
                <TextInput 
                  // style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
                  className="w-full h-full font-semibold bottom-0 text-gray-500 text-lg"
                  placeholder="Send a message"
                  value={message}
                  onChangeText={setMessage}
                  autoFocus={true}
                  // caretHidden={loading}
                  selectionColor="#eeca70"
                  />
                <TouchableOpacity disabled={!message} className={`bg-blue-400 ${!message && "hidden"} absolute h-10 w-10 right-2 items-center justify-center rounded-md`}>
                  <MaterialIcons  name="send" size={24} color="white" />
                </TouchableOpacity>
              </View>
         </>
        </KeyboardAvoidingView>
    </SafeAreaView>    
  )
}

export default ChatScreen