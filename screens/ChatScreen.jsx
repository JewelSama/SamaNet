import { SafeAreaView, View, Text,TouchableOpacity, Image, ScrollView, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Entypo, MaterialIcons } from "@expo/vector-icons"
import { useState, useLayoutEffect } from 'react';


const ChatScreen = ({ navigation, route }) => {
  const { name, Pfp} = route.params;
  const [message, setMessage] = useState('')

  // useLayoutEffect(() => {
  //   const azz = async() => { await Keyboard.dismiss()}
  //   azz()
  // }, [])


  const SendMessage = () => {
    Keyboard.dismiss()
    setMessage('')
  }


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
        {/* <> */}
          {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss()}> */}
            <ScrollView automaticallyAdjustKeyboardInsets={true} className="h-full mt-4" showsVerticalScrollIndicator={false}>

              <View className="p-4 bg-orange-100 self-end rounded-md mr-4 mb-5 rounded-br-2xl" style={{maxWidth: "80%", position: 'relative'}}>
                <Text className="font-semibold text-md text-gray-600">dtcfyvgkuhblnjmkl,tjbjkbancna assubwionqw qfoibqoinwfo wiohwnqoc  cuygvkhubjnkml,</Text>
              </View>

              <View className="p-4 bg-gray-100 self-start rounded-md mr-4 mb-5 rounded-bl-2xl" style={{maxWidth: "80%", position: 'relative'}}>
                <Text className="font-semibold text-md text-gray-600">dtcfyvgkuhblnjmkl,tcuygvkhubjnkml,</Text>
              </View>
              
            
            </ScrollView>
          {/* </TouchableWithoutFeedback> */}
            <View className="flex flex-row items-center  justify-center bg-white  h-14 pb-2 px-5  border border-gray-200 rounded-lg">
              <TextInput 
                // style={{ width: '100%', height: 50, borderBottomWidth: 1 }}
                className="w-full h-full font-semibold bottom-0 text-gray-700 text-lg"
                placeholder="Send a message..."
                value={message}
                onChangeText={setMessage}
                // autoFocus={true}
                // caretHidden={loading}
                selectionColor="#eeca70"
                />
              <TouchableOpacity onPress={SendMessage} disabled={!message} className={`bg-transparent ${!message && "hidden"} absolute h-10 w-10 right-2 items-center justify-center rounded-md`}>
                <MaterialIcons  name="send" size={30} color="#eeca70" />
              </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>    
  )
}

export default ChatScreen