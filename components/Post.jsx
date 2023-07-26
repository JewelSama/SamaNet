import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { useState, useCallback } from 'react'
import { Ionicons, Entypo, AntDesign, FontAwesome5 } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import { baseUrl } from '../utils/endPoints'
import { Audio } from 'expo-av';


const Post = ({ post }) => {
    const navigation = useNavigation()
    const [like, setLike] = useState(false)
    const [imgLoading, setImgLoading] = useState(true)
    const [pfpLoading, setPfpLoading] = useState(true)
    const [sound, setSound] = useState()



    const onLoad = useCallback(() => {
      setImgLoading((state) => !state)
    })

    const onPfpLoad = useCallback(() => {
      setPfpLoading((state) => !state)
    })



    
    let feedImg
    if(post?.img_path === null){
      feedImg = ""
    }else {
      let postImg = `${baseUrl}\\${post?.img_path}`
      postImg = postImg?.replace("public\\", "")
      postImg = postImg?.replaceAll("\\", "/")
      postImg = postImg?.replace("public/", "")
      feedImg = postImg
    }
    //Profile Pic
    let profileImg
    if(post?.user?.display_pic === null){
      profileImg = ""
    }else {
      let postImg1 = `${baseUrl}\\${post?.user?.display_pic}`
      postImg1 = postImg1?.replace("public\\", "")
      postImg1 = postImg1?.replaceAll("\\", "/")
      postImg1 = postImg1?.replace("public/", "")
      profileImg = postImg1
    }

    //Profile PPic
    let profilePImg = ""
    if(!post?.display_pic){
      profilePImg = ""
    }else {
      let postImg2 = `${baseUrl}\\${post?.display_pic}`
      postImg2 = postImg2?.replace("public\\", "")
      postImg2 = postImg2?.replaceAll("\\", "/")
      postImg2 = postImg2?.replace("public/", "")
      profilePImg = postImg2
    }
  

    async function playSound() {
      // console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/Like.mp3')
      );
      setSound(sound);
  
      // console.log('Playing Sound');
      await sound.playAsync();
    }

    const Like = () => {
        playSound()
        setLike(!like)
    }
// console.log("pooosssttt", feedImg)
  let pusername = "" 
  let pUsername = ""
  if(!post?.username){
     pusername = ""
  } else {
    pusername = post?.username
     pUsername = pusername[0].toUpperCase() + pusername.slice(1)
  } 
    


  return (
    <View className={`bg-white shadow-sm p-4 mt-2 mb-2 rounded-md`}>
          <View className="flex flex-row mb-1">
            <View className="flex flex-row flex-1 space-x-2">
              <TouchableOpacity>
                {
                  profilePImg ? (
                    <Image
                    source={{uri: profilePImg}} 
                    className="h-10 w-10 rounded-full"
                    onLoad={onPfpLoad}
                  />
                  ) : (
                  <Image
                    source={{uri: profileImg}} 
                    className="h-10 w-10 rounded-full"
                    onLoad={onPfpLoad}
                  />
                )} 
              </TouchableOpacity>
              {pfpLoading && (
                    <ActivityIndicator color="#eeca70" size="small" className="absolute self-center top-0 bottom-0" />
                )
              }
              <View className="space-y-1">
              {!pUsername
                ? ( 
                    <TouchableOpacity><Text className="font-semibold text-gray-800 text-md">{post?.user?.username}</Text></TouchableOpacity>
                 ) : ( 
                    <TouchableOpacity><Text className="font-semibold text-gray-800 text-md">{pUsername}</Text></TouchableOpacity> 
                )}
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
          {post?.caption && (
            <View>
              <Text className="text-gray-700 font-semibold">{post?.caption}</Text>
            </View>
          )}
          {feedImg && (
            <>
              <TouchableOpacity onPress={() => navigation.navigate('ImgScreen', {imgUri: feedImg, username: post?.username})} className="justify-center items-center self-center h-80 w-80 mt-4">
                    <Image 
                      source={{ uri:  feedImg}}
                      className="h-full w-full rounded-md"
                      onLoad={onLoad}
                  />

              </TouchableOpacity>
              {imgLoading && (
                <ActivityIndicator color="#eeca70" size="large" className="absolute self-center top-0 bottom-0" />
              )}
            </>
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