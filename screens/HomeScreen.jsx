import { useState, useContext } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Image, Pressable } from 'react-native'
import GlobalStyles from '../Config/GlobalStyles'
import { Ionicons, Entypo } from "@expo/vector-icons"
import Logo from "../assets/icon1.png"
import Pfp from "../assets/avatar3.jpg"
import Post1 from "../assets/post1.jpeg"
import Post3 from "../assets/post3.jpeg"
import Post4 from "../assets/post4.jpeg"
import Post from '../components/Post'
import { GlobalContext } from '../context'
import { baseUrl } from '../utils/endPoints'
import { useEffect } from 'react'
import { Skeleton } from '@rneui/themed';



const HomeScreen = ({ navigation }) => {
  const [feed, setField] = useState(0)
  const [loading, setLoading] = useState(false)
  const { user, setUser, Id } = useContext(GlobalContext)
  // console.log(`${baseUrl}\\${user?.display_pic}`)

  const ProfilePic_test = `${baseUrl}\\${user?.display_pic}`
  let ProfilePic = ProfilePic_test.replace("public\\", "")
  ProfilePic = ProfilePic.replaceAll("\\", "/")
  ProfilePic = ProfilePic.replace("public/", "")
  // console.log(ProfilePic)
  // console.log(ProfilePic)
  
  
  useEffect(() => {
    if(loading){
      setField(20)
    }
    const saa = async() => {
      if(user.length === 0){
      setLoading(true)
      fetch(`${baseUrl}/user/${Id}`, {
        method: 'GET',
        headers: new Headers({
          "Content-Type": "application/json"
        }),
      })
      .then(res => res.json())
      .then(resp => {
        setLoading(false)
        setUser(resp)
        console.log("resp", resp)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
        return alert("Something wen wrong")
      })
  }
}
    saa()
  }, [navigation])

console.log(loading)



  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="h-full bg-white">
      <View className="px-2 h-full">
        <View className="mt-4 border-b border-gray-100 px-1 flex pb-3 mb-1 flex-row">
          <View className="flex-1"><Text className="text-3xl font-bold text-slate-700">SamaNet</Text></View>
          <View className="flex flex-row space-x-2">

            <TouchableOpacity onPress={() => navigation.navigate('Search')} disabled={loading} className="bg-gray-100 p-2 rounded-full">
            <Entypo name="magnifying-glass" size={24} color="rgb(51, 65, 85)" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} disabled={loading} className="bg-gray-100 p-2 rounded-full">
              <Ionicons name="person" size={24} color="rgb(51, 65, 85)" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ChatList')} disabled={loading} className="bg-gray-100 p-2 rounded-full">
              <Ionicons name="chatbubble-ellipses-sharp" size={24} color="rgb(51, 65, 85)" />  
            </TouchableOpacity>  

          </View>
        </View>
      <ScrollView className="h-full" showsVerticalScrollIndicator={false}>
      <View className="mt-5">
        {!loading ? (
        <Text className="text-slate-700 font-semibold text-lg">Stories</Text>
        ): (
          <Skeleton style={{marginLeft: 4}} animation="pulse" width={110} height={25} />
        )}
      </View>
      <ScrollView horizontal={true} className={`mt-3  space-x-2 p-1`} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingRight:20}}>

    {loading? (
      <>
      <View className=" h-44 w-32   rounded-md">
        <Skeleton width={128} height={176} animation="wave" style={{borderRadius: 3}} />
          <View className="self-center absolute left-2 top-4 rounded-full h-12 w-12 items-center justify-center bg-gray-100">
            <Skeleton circle width={45} height={45} />
          </View>
          <View className="items-center absolute bottom-3 right-0 left-0">
            <Skeleton animation="pulse" width={100} height={25} style={{borderRadius: 3}} />
          </View>
      </View>

      <View className=" h-44 w-32 rounded-lg">
      <Skeleton width={128} height={176} animation="wave" style={{borderRadius: 3}} className="rounded-lg" />
        <View className="self-center absolute left-2 top-4 rounded-full h-12 w-12 items-center justify-center bg-gray-100">
          <Skeleton circle width={45} height={45} />
        </View>
        <View className="items-center absolute bottom-3 right-0 left-0">
          <Skeleton animation="pulse" width={100} style={{borderRadius: 3}} height={25} />
        </View>
      </View>

      <View className=" h-44 w-32  rounded-lg">
        <Skeleton width={128} height={176} animation="wave" style={{borderRadius: 3}} className="rounded-lg" />
          <View className="self-center absolute left-2 top-4 rounded-full h-12 w-12 items-center justify-center bg-gray-100">
            <Skeleton circle width={45} height={45} />
          </View>
          <View className="items-center absolute bottom-3 right-0 left-0">
            <Skeleton animation="pulse" width={100} style={{borderRadius: 3}} height={25} />
          </View>
      </View>
    </>





    ): (
      <>
        <TouchableOpacity className=" h-44 w-32 shadow-md  bg-gray-300 rounded-lg">
          <Image 
            source={Logo}
            className="h-28  w-full rounded-lg"
          />
          <View className="self-center -mt-5 rounded-full  h-10 w-10 items-center justify-center bg-[#eeca70]">
            <Image 
              source={{uri: `${ProfilePic}`}}
              className="h-8 w-8 rounded-full"
            />
          </View>
          <View className="items-center">
            <Text className="text-md font-bold text-white mt-3">@{user?.username}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" h-44 w-32 shadow-md bg-red-300 rounded-lg" onPress={() => navigation.navigate('ImgScreen', {img: Post4})}>
          <Image 
            source={Post4}
            className="h-full  w-full rounded-lg"
          />
          <View className="self-center absolute left-1 top-1 rounded-full h-8 w-8 items-center justify-center bg-[#eeca70]">
            <Image 
              source={Pfp}
              className="h-7 w-7 rounded-full"
            />
          </View>
          <View className="items-center absolute bottom-3 left-0 right-0">
            <Text className="text-md font-bold text-white mt-3">@JewelSama</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" h-44 w-32 shadow-md bg-red-300 rounded-lg" onPress={() => navigation.navigate('ImgScreen', {img: Post3})}>
          <Image 
            source={Post3}
            className="h-full  w-full rounded-lg"
          />
          <View className="self-center absolute left-1 top-1 rounded-full h-8 w-8 items-center justify-center bg-[#eeca70]">
            <Image 
              source={Pfp}
              className="h-7 w-7 rounded-full"
            />
          </View>
          <View className="items-center absolute bottom-3 left-0 right-0">
            <Text className="text-md font-bold text-white mt-3">@Username</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" h-44 w-32 shadow-md bg-red-300 rounded-lg" onPress={() => navigation.navigate('ImgScreen', {img: Post1})}>
          <Image 
            source={Post1}
            className="h-full  w-full rounded-lg"
          />
          <View className="self-center absolute left-1 top-1 rounded-full h-8 w-8 items-center justify-center bg-[#eeca70]">
            <Image 
              source={Pfp}
              className="h-7 w-7 rounded-full"
            />
          </View>
          <View className="items-center absolute bottom-3 left-0 right-0">
            <Text className="text-md font-bold text-white mt-3">@Username</Text>
          </View>
        </TouchableOpacity>
      </>
    )}

      </ScrollView>
      {!loading &&
      <TouchableOpacity className="bg-gray-200  items-center justify-center w-10 h-10 self-center mt-2 rounded-full" onPress={() => navigation.navigate('Create')}>
            <Entypo name="plus" size={28}  color="rgb(51, 65, 85)" />
      </TouchableOpacity>
      }

      {!loading ? (
      <View className="flex flex-row h-14 w-full mt-2 rounded-full bg-gray-200 mb-2">
        <Pressable onPress={() => setField(0)} className={`rounded-full h-full w-1/2  items-center justify-center ${feed === 0 &&  'bg-[#eeca70]'}`}>
          <Text className={`text-lg font-bold text-slate-700 ${feed === 0 &&  'text-white'}`}>Explore</Text>
        </Pressable>
        <Pressable onPress={() => setField(1)} className={`rounded-full h-full w-1/2  items-center justify-center ${feed === 1 && 'bg-[#eccb78]'}`}>
          <Text className={`text-lg font-bold text-slate-700 ${feed === 1 &&  'text-white'}`}>Discover</Text>
        </Pressable>
      </View>
      ): (
        <View className="w-full mt-10 mb-10 px-1 items-center">
          <Skeleton style={{marginLeft: 4, borderRadius: 3}} animation="wave"  height={70} />
        </View>
      )}

      {loading &&
      <>
        <View className="w-full mt-3 mb-10 px-1 items-center">
          <Skeleton style={{marginLeft: 4, borderRadius: 3}} animation="wave"  height={300} />
          <View className="self-center absolute left-4 top-4 rounded-full h-12 w-12 items-center justify-center bg-gray-100">
            <Skeleton circle width={45} height={45} />
          </View>
          <View className="self-center absolute left-20 top-4  h-12 w-32 items-center justify-center">
            <Skeleton style={{marginLeft: 4, borderRadius: 3}} animation="pulse"  height={20} />
          </View>
          <View className="self-center absolute left-20 top-20   w-48 items-center justify-center">
            <Skeleton style={{marginLeft: 4, borderRadius: 3}} animation="pulse"  height={40} />
          </View>
        </View>  
      </>
      }
      

    {feed === 0 && (
      <> 
        <Post />
        <Post />        
      </>
    )}
     
    
  {feed === 1 && (
    <View className="items-center justify-center mt-2 h-96">
      <Text className="text-3xl font-semibold text-gray-300">Coming Soon</Text>
    </View>
  )}
  </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen