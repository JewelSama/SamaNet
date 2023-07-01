import { SafeAreaView, ScrollView, View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
// import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import GlobalStyles from '../Config/GlobalStyles'
import Logo from "../assets/logo.png"
import { useNavigation } from '@react-navigation/native'



const ValidateScreen = () => {
    const navigation = useNavigation()
  
    return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="h-full bg-white">
      <ScrollView className="px-7" contentContainerStyle={{paddingBottom: 30}} automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false}>
        <View className="items-center mt-8">
            <Image 
                source={Logo}
                className="h-20 w-20"
            />
        </View>

        <View className="items-center mt-16">
            <Text className="text-3xl font-bold">Email Verification</Text>
            <Text className="text-md font-bold mt-4 text-slate-600">Please enter the 6 digit code sent to your email </Text>
            <Text className="font-bold text-lg text-slate-800">mail@sama.com</Text>
        </View>
        <View className="items-center">
            <OTPInputView
                style={{width: '80%', height: 200, marginHorizontal: 24}}
                pinCount={6}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code) => {
                    console.log(`Code is ${code}, you are good to go!`)
                }}
                className="h-16  text-xl"
            />
        </View>
        <TouchableOpacity className="items-center -mt-10"><Text className="font-semibold text-[#b49648] text-lg">Resend Code</Text></TouchableOpacity>
        
        <TouchableOpacity
          className="bg-[#eeca70] h-16 w-full items-center mt-8  justify-center rounded-lg" 
          onPress={()=> navigation.navigate("Home")}>
            <Text className="font-bold text-white text-xl">Confirm</Text>
    </TouchableOpacity>

    <TouchableOpacity className="items-center mt-12"><Text className="font-semibold text-[#b49648] text-lg underline">Change Email</Text></TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}








const styles = StyleSheet.create({
    borderStyleBase: {
    //   width: 30,
    //   height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  
    underlineStyleBase: {
    //   width: 48,
      height: 64,
        borderWidth: 2,
        borderColor: "#ccc",
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
        // marginLeft: 10
    //   borderWidth: 1,
    },
  
    underlineStyleHighLighted: {
      borderColor: "#eeca70",
    },
  });


export default ValidateScreen