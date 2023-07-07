import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import Logo from "../assets/logo.png"
import { useState } from "react"
import * as ImagePicker from "expo-image-picker"




const CreatePostScreen = ({ navigation }) => {
  const [ image, setImage ] = useState(null)

  const PickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      selectionLimit: 1
    }) 
    console.log(result)

    if(!result.canceled){
      setImage(result.assets[0].uri)
    }
    console.log(image)
  }





  const Post = () => {

  }


  return (
    <SafeAreaView className="bg-gray-100 h-full">
        <View className="px-4">
            <View className="flex flex-row">
                <TouchableOpacity className=" h-10 w-10 rounded-full bg-gray-200 items-center justify-center" onPress={() => navigation.goBack()}>
                    <Entypo name='chevron-left' size={34} color="rgb(51, 65, 85)" />
                </TouchableOpacity>
                <Text className=" text-3xl font-bold text-slate-700"></Text>
            </View>
            <View className="w-full items-center mt-1">
              <Image 
                source={Logo}
                className="h-10 w-10"
                />
            </View>
            <>
              <ScrollView className="h-full mt-2" showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true}  contentContainerStyle={{paddingBottom: 60}}>
                
              <View className="space-y-1">
                <Text className="text-xl mr-1 font-bold">Caption</Text>
                <TextInput
                  className=" px-3 text-lg border border-gray-200 py-1 pb-2 font-semibold w-full max-h-64 rounded-md"
                  placeholder='Write something...'
                  textAlignVertical='center'
                  multiline={true}
                  autoCapitalize='words'
                />
              </View>

              {!image ? <TouchableOpacity className="flex flex-row justify-center h-48 space-x-2 mt-16 bg-gray-200  items-center rounded-md" onPress={PickImage}>
                <MaterialIcons name='photo-library' size={34} color="rgb(51, 65, 85)" />
                <Text className="font-bold text-lg text-slate-700">Select Photo</Text>
              </TouchableOpacity>
                : (
                    <>
                      <View className="mt-5 rounded-sm">
                        <Image 
                          source={{ uri: image }}
                          className="h-96 rounded-sm"
                        />
                      </View>
                      <TouchableOpacity className="items-center mt-4 bg-gray-200 p-2 rounded-md" onPress={PickImage}><Text className="text-lg font-bold text-slate-700">Change Image</Text></TouchableOpacity>
                    </>
                )
              }

            <TouchableOpacity
              className="bg-[#eeca70] h-16 w-full items-center mt-14  justify-center rounded-md" 
              onPress={Post}>
                <Text className="font-bold text-white text-xl">Post</Text>
            </TouchableOpacity>

              </ScrollView>
            </>
        </View>
    </SafeAreaView>    
  )
}

export default CreatePostScreen