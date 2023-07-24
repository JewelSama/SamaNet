import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useContext, useState } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import GlobalStyles from '../Config/GlobalStyles'
import Logo from "../assets/logo.png"
import { GlobalContext } from '../context'
import { baseUrl } from '../utils/endPoints'



const ValidateScreen = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false)
    const { setUser, setToken, setLoggedIn, setId } = useContext(GlobalContext)

    const {email} = route.params;

    const resendData = {
      email:  email.toLowerCase().trim()
  }


    // console.log(email, resp)
    const Validate = (code) => {
      // console.log(code)
      const formToken = {
        email: email.toLowerCase().trim(),
        emailToken: code.trim()
      }
      // console.log(formToken)
      setLoading(true)
      fetch(`${baseUrl}/user/authenticate`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(formToken)
      })
      .then(res => res.json())
      .then(resp => {
        if(resp?.error){
          return alert(resp?.error)         
        }
        // console.log(resp)
        setUser(resp)
        setId(resp?.id)
        setLoggedIn(true)
        setToken(resp?.authToken)

        AsyncStorage.setItem(
          'Token',
          resp?.authToken,
        )
        AsyncStorage.setItem(
          'UserId', resp?.id.toString());

        setLoading(false)
        navigation.navigate("Home")
      })
      .catch(error => {
        setLoading(false)
        console.log(error.message)
      })
    }

    const Resend = () => {
      setLoading(true)
      // fetch(`${baseUrl}/user/authenticate/resend`, {
      fetch(`${baseUrl}/user/authenticate/resend`, {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(resendData) 
      })
      .then(res => res.json())
      .then(resp =>{
        setLoading(false)
        console.log(resendData)
        console.log("res: ",resp)
      })
      .catch(err => {
        console.log(err.message)
        setLoading(false)
        alert("Something went wrong")
      })
    }


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
            <Text className="font-bold text-lg text-slate-800">{email}</Text>
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
                    Validate(code)
                }}
                className="h-16  text-xl"
            />
        </View>
        <TouchableOpacity className="items-center -mt-10" onPress={Resend}><Text className="font-semibold text-[#b49648] text-lg">Resend Code</Text></TouchableOpacity>
        
        <TouchableOpacity
          className={`bg-orange-100 ${loading && "hidden"} h-16 w-full items-center mt-8  justify-center rounded-lg`} 
          onPress={Validate} disabled={true}>
            <Text className="font-bold text-white text-xl">Confirm</Text>
    </TouchableOpacity>

    <TouchableOpacity className="items-center mt-12" onPress={() => navigation.goBack()}><Text className="font-semibold text-[#b49648] text-lg underline">Change Email</Text></TouchableOpacity>

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