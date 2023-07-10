import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import { Ionicons, Entypo, AntDesign, FontAwesome5 } from "@expo/vector-icons"
import Pfp from "../assets/avatar3.jpg"
import Post1 from "../assets/post3.jpeg"
import { useNavigation } from '@react-navigation/native'






const Post = () => {
    const navigation = useNavigation()
    const [like, setLike] = useState(false)
    const caption = "nisi quae ducimus unde aliquam, labore, dolorum modi architecto. Ullam blanditiis porro perspiciatis itaque quos, repellendus culpa?"

    const Like = () => {
        setLike(!like)
    }




  return (
    <View className={`bg-gray-100 p-4 mt-2 rounded-md`}>
          <View className="flex flex-row mb-1">
            <View className="flex flex-row flex-1 space-x-2">
              <TouchableOpacity>
                <Image
                  source={Pfp} 
                  className="h-10 w-10 rounded-full"
                />
              </TouchableOpacity>
              <View className="space-y-1">
                <TouchableOpacity><Text className="font-semibold text-gray-800">Username</Text></TouchableOpacity>
                <View className="flex flex-row items-center space-x-1">
                  <Text className="font-semibold text-gray-800">4d</Text>
                  <Ionicons name="earth" size={15} color="rgb(31, 41, 55)" />
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={24} color="rgb(31, 41, 55)" />
            </TouchableOpacity>
          </View>
          {caption && (
            <View>
              <Text>{caption}</Text>
            </View>
          )}
          {Pfp && (
            <TouchableOpacity onPress={() => navigation.navigate('ImgScreen', {img: Post1})} className="justify-center items-center self-center h-64 w-64 mt-4">
                <Image 
                    source={Post1}
                    className="h-full w-full"
                />
            </TouchableOpacity>
          )}
          <View className="flex flex-row border-b p-2  mt-4  border-gray-300">
            <TouchableOpacity className="flex flex-1 flex-row space-x-1 items-center">
              <AntDesign name="like2" size={18} color="rgb(31, 41, 55)" />
              <Text className="text-gray-800 font-bold text-md">54</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" items-center">
              <Text className="text-gray-800 font-semibold text-md">24 comments</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row  p-2  mt-2  justify-between">
          <TouchableOpacity onPress={Like} className="flex flex-row space-x-1 items-center">
            <AntDesign name={`${like ? "like1" : "like2"}`} size={22}  color={`${like ? "#eeca70" : "rgb(31, 41, 55)"}`} />
            <Text className={`${like ? "text-[#eccb78]" : "text-gray-800"} font-bold text-md`}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row space-x-1 items-center">
            <FontAwesome5 name="comment-alt" size={22} color="rgb(31, 41, 55)" />
            <Text className="text-gray-800 font-bold text-md">Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row space-x-1 items-center">
            <FontAwesome5 name="share" size={22} color="rgb(31, 41, 55)" />
            <Text className="text-gray-800 font-bold text-md">Share</Text>
          </TouchableOpacity>
          </View>
          
        </View>
  )
}

export default Post