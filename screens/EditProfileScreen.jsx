import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Entypo } from "@expo/vector-icons"
import { Switch } from 'react-native-paper';
import { useState } from 'react';
import { ngStates } from "../utils/ngStates"
import {Picker} from '@react-native-picker/picker';


const EditProfileScreen = ({ navigation }) => {
    const [showPhone, setshowPhone] = useState(false)
    const onToggleSwitch = () => setshowPhone(!showPhone)
    const [state, setState] = useState('');
    const [gender, setGender] = useState('');


    const Update = () => {
        // console.log(state)
    }
  return (
    <SafeAreaView className="bg-gray-100 h-full">
        <View className="px-4">
            <View className="flex flex-row">
                <Text className="flex-1 text-3xl font-bold text-slate-700">Edit your details</Text>
                <TouchableOpacity className="h-10 w-10 rounded-full bg-gray-200 items-center justify-center" onPress={() => navigation.goBack()}>
                    <Entypo name='chevron-left' size={34} color="rgb(51, 65, 85)" />
                </TouchableOpacity>
            </View>

            <ScrollView className="mt-7 space-y-3" showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true}  contentContainerStyle={{paddingBottom: 60}}>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Username</Text>
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-14 border rounded-md"
              placeholder='Enter Username'
              textAlignVertical='center'
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Email Address</Text>
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-12 border rounded-md"
              placeholder='Enter your email'
              textAlignVertical='center'
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Bio</Text>
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-32 border rounded-md"
              placeholder=''
              textAlignVertical='center'
              multiline={true}
              autoCapitalize='words'
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Firstname</Text>
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-12 border rounded-md"
              placeholder='Enter your Firstname'
              textAlignVertical='center'
              autoCapitalize='words'
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Lastname</Text>
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-12 border rounded-md"
              placeholder='Enter your Lastname'
              textAlignVertical='center'
              autoCapitalize='words'
            />
          </View>
          
          <View className="space-y-1">
            <Text className="text-lg font-semibold">Phone</Text>
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-12 border rounded-md"
              placeholder='Enter Phone NO.'
              textAlignVertical='center'
              keyboardType='phone-pad'
            />
          </View>

          <View className="">
            <View className="space-x-5 flex flex-row mt-6">
                <Switch value={showPhone} onValueChange={onToggleSwitch} color='#eeca70' />
                <Text className="text-lg font-semibold">Display Phone NO. on profile</Text>
            </View>
          </View>
        <View>

        <View className="mt-6">
            <Text className="text-xl font-semibold">Your Gender🙄</Text>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue, itemIndex) =>
                setGender(itemValue)
              }>
                <Picker.Item label="Male" value="M" />
                <Picker.Item label="Female" value="F" />
            </Picker>
          </View>

        <View className="mt-6">
            <Text className="text-xl font-semibold">Select your State</Text>
            <Picker
              selectedValue={state}
              onValueChange={(itemValue, itemIndex) =>
                setState(itemValue)
              }>
                {
                    ngStates.map((ste, index) => (
                        <Picker.Item key={index} label={ste} value={ste} />
                    ))
                }
            </Picker>
          </View>

            <TouchableOpacity
              className="bg-[#eeca70] h-16 w-full items-center mt-2 justify-center rounded-md" 
              onPress={Update}>
                <Text className="font-bold text-white text-xl">Update</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>


        </View>
    </SafeAreaView>
  )
}

export default EditProfileScreen