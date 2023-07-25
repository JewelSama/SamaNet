import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, TextInput, ActivityIndicator, Platform } from 'react-native'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import Logo from "../assets/logo.png"
import { useContext, useState } from "react"
import * as ImagePicker from "expo-image-picker"
import { baseUrl } from '../utils/endPoints'
import { GlobalContext } from '../context'




const CreatePostScreen = ({ navigation }) => {
  const [ image, setImage ] = useState(null)
  const [ caption, setCaption ] = useState("")
  const [loading, setLoading] = useState(false)
  const {token, setPosts, posts} = useContext(GlobalContext)
  const [res, setRes] = useState([])

  const PickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
      quality: 1,
      selectionLimit: 1
    }) 
    // console.log(result)

    if(!result.canceled){
      setImage(result.assets[0].uri)
      setRes(result.assets[0])
    }
    // console.log(result.assets[0])
  }

  // const formData = {}
  const formData = new FormData();
  // if(caption !== ""){

  // }
  if(res.uri){
  formData.append('img_path', {
    uri:  res?.uri, 
    name: "image.jpg",
    type: "image/jpeg" 
  })}

  if(caption){
    formData.append('caption',caption.trim())
  }
  


// console.log("res", res)
// console.log("formData", formData)




  const Post = async() => {
    if(image === null && !caption){
      alert("Add a caption or an image to post")
    }
    setLoading(true)
    // console.log(image)
    fetch(`${baseUrl}/post`, {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }),
      body: formData 
    })
    .then(res => res.json())
    .then(resp => {
      setPosts([resp, ...posts ])
      setLoading(false)
      // console.log('posts', posts)
      navigation.navigate("Home")
    })
    .catch(err => {
      setLoading(false)
      console.log(err)
      alert("Something went wrong.")
    })
    // console.log(formData.file)
  }


  return (
    <SafeAreaView className="bg-gray-100 h-full">
        <View className="px-4">
            <View className="flex flex-row">
                <TouchableOpacity disabled={loading} className=" h-10 w-10 rounded-full bg-gray-200 items-center justify-center" onPress={() => navigation.goBack()}>
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
              <ScrollView className="h-full mt-2" showsVerticalScrollIndicator={false}   contentContainerStyle={{paddingBottom: 60}}>
                
              <View className="space-y-1">
                <Text className="text-xl ml-1 mb-1 font-bold">Add Caption</Text>
                <TextInput
                  className=" px-3 text-lg border border-gray-200 py-1 pb-2 font-semibold w-full max-h-64 rounded-md"
                  placeholder='Write something...'
                  textAlignVertical='center'
                  multiline={true}
                  autoCapitalize='sentences'
                  value={caption}
                  onChangeText={setCaption}
                  editable={!loading}
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
                {!loading ? (<Text className="font-bold text-white text-xl">Post</Text>) : (
                  <ActivityIndicator color="white" size="large" />
                )}
            </TouchableOpacity>

              </ScrollView>
            </>
        </View>
    </SafeAreaView>    
  )
}
export default CreatePostScreen