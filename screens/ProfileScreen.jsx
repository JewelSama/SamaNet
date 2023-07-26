import { SafeAreaView, TouchableOpacity, View, Text, Image, ScrollView } from 'react-native'
import { useContext, useLayoutEffect } from 'react'
import { Feather } from "@expo/vector-icons"
import Pfp from "../assets/avatar3.jpg"
import { GlobalContext } from '../context'
import { baseUrl } from '../utils/endPoints'
import Post from '../components/Post'


const ProfileScreen = ({ navigation }) => {
  const { user, posts } = useContext(GlobalContext)

  const ProfilePic_test = `${baseUrl}\\${user?.display_pic}`
  let ProfilePic = ProfilePic_test.replace("public\\", "")
  ProfilePic = ProfilePic.replaceAll("\\", "/")
  ProfilePic = ProfilePic.replace("public/", "")

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "PROFILE",
            headerShown: true,
            headerTintColor: 'rgb(51, 65, 85)',
            headerRight: () => (
                <TouchableOpacity className="mr-2" onPress={() => navigation.navigate("Settings")}>
                    <Feather name='settings' size={32} color="rgb(51, 65, 85)" />
                </TouchableOpacity>
            )
        })


    }, [navigation])

    // console.log("posts", posts[0].user.id)
    // const myPosts = posts.userId
    const myPosts = []
    // console.log('currUser', user?.id)
    const userPosts = posts.map(p => {
      if(p?.userId === user?.id){
        // console.log(p)
        myPosts.push(p)
      }
    })
    console.log("p", myPosts)



    // let userPosts = posts.map((post) => post.userId === user?.id )



  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-2">
        <ScrollView className="h-full" showsVerticalScrollIndicator={false}>
          <>
          <View className="px-2">
            <View className="bg-gray-100  rounded-md mt-6 h-48 w-full items-center justify-center">
        <View className="items-center relative bg-slate-400 h-32 w-32 rounded-full self-center justify-center">
          <TouchableOpacity>
          <Image 
            source={{uri: ProfilePic}}
            className="h-28 w-28 rounded-full"
          />
          </TouchableOpacity>
          <TouchableOpacity className="absolute bottom-2 right-6">
            <Feather name='edit' size={28} color="rgb(51, 65, 85)" />
          </TouchableOpacity>
        </View>
            </View>
          </View>

          <View className="px-2">
            <View className="mt-10 items-center mb-6 justify-center rounded-md h-20 bg-gray-100">
          <Text>Bio Datas</Text>
            </View>
          </View>
        {/* <ScrollView className="h-full"> */}
        
        <Text className="text-gray-700 text-xl mb-2 text-center font-bold">{user?.username}'s Posts</Text>
          {myPosts.length < 1 ? (

            <View className="items-center justify-center mt-40">
            <Text className="text-3xl font-semibold text-gray-300">No Posts yet</Text>
          </View>
            ) : (
                  myPosts.map((post, index) => ( 
                    <Post key={index} post={post} /> 
                  )) 
             )}
             </>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen