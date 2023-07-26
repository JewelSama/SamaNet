import { SafeAreaView, View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { FontAwesome } from "@expo/vector-icons"
import { useCallback, useState } from 'react';

const ImgScreen = ({ navigation, route }) => {
    const { img, imgUri, username } = route.params;
    const [imgLoading, setImgLoading] = useState(true)

    const onLoad = useCallback(() => {
        setImgLoading((state) => !state)
    })

  return (
    <View className="bg-gray-900 h-full relative justify-center">
        <View className="h-1/2 items-center justify-center">
            {img && (
                <Image
                    source={ img }
                    className="h-full w-full"
                    onLoad={onLoad}
                />
            )}

            {imgUri && (
                <Image
                    source={{ uri: imgUri }}
                    className="h-full w-full"
                    onLoad={onLoad}
                /> 
            )}
            {
                imgLoading && (
                    <ActivityIndicator color="white" size="large" className="absolute self-center top-0 bottom-0" />
                )
            }
        </View>

        <View className="top-14 items-center  left-0 right-0  absolute">
            <Text className="text-xl font-bold text-gray-100">{username}</Text>
        </View>
        <TouchableOpacity className=" h-8 w-8 top-14 left-3 absolute rounded-full  bg-gray-100 items-center justify-center" onPress={() => navigation.goBack()}>
            <FontAwesome name='times' size={22} color="rgb(51, 65, 85)" />
        </TouchableOpacity>
    </View>    
  )
}

export default ImgScreen