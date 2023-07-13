import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, TextInput, Vibration, ActivityIndicator} from 'react-native'
import { useState } from 'react'
import GlobalStyles from '../Config/GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import { baseUrl } from '../utils/endPoints'
// import GlobalProvider from '../context'



const SignUpScreen = () => {
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [fName, setFname] = useState("")
  const [lName, setLName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmed, setConfirmed] = useState("")


  // const { setEmailToken } = useContext(GlobalProvider)



  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const Register = () => {
    // setLoading(true)

    if(!username || !email  || !fName  || !lName  || !password || !confirmed){
      return alert("Please fill in all fields!")
    }

    if(!email.match(mailFormat)){
      return alert("Email is not valid!")
    }

    if(password !== confirmed){
      return alert("Passwords do not match!")
    }

    const formData = {
      username: username.trim(),       
      email: email.toLowerCase().trim(),
      firstname: fName.trim(),
      lastname: lName.trim(),
      password: password.trim()
    }

    setLoading(true)
    
      fetch(`${baseUrl}/user/register`, {
        method: 'POST',
        headers: new Headers({
          "Accept": "application/json",
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(resp => {
        setLoading(false)
        if(resp?.error){
          return alert(resp?.error)
        }
        if(resp?.validate){
          alert("Account already created. Resend email token in the next screen")
          navigation.navigate('Validate', {email: email, resp})
        }
        navigation.navigate("Validate", {email: email})
      })
    .catch(err => {
      setLoading(false)
      alert("Something went wrong")
      console.log(err)
    })

  } 
  

  const navigation = useNavigation()
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="h-full bg-white">
      <View className="px-7">
        <View className="mt-4 space-y-2">
          <Text className="text-3xl font-bold">Create Account</Text>
          <Text className="text-md font-bold text-slate-400">Connect with your friends today!</Text>
        </View>

        
        <ScrollView className="mt-7 space-y-3" showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true}  contentContainerStyle={{paddingBottom: 60}}>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Username<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-14 border rounded-md"
              placeholder='Enter Username'
              textAlignVertical='center'
              caretHidden={loading}
              editable={!loading}
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Email Address<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-12 border rounded-md"
              placeholder='Enter your email'
              textAlignVertical='center'
              caretHidden={loading}
              editable={!loading}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Firstname<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-12 border rounded-md"
              placeholder='Enter your Firstname'
              textAlignVertical='center'
              autoCapitalize='words'
              caretHidden={loading}
              editable={!loading}
              value={fName}
              onChangeText={setFname}
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Lastname<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-12 border rounded-md"
              placeholder='Enter your Lastname'
              textAlignVertical='center'
              autoCapitalize='words'
              caretHidden={loading}
              editable={!loading}
              value={lName}
              onChangeText={setLName}
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Password<Text className="text-red-400">*</Text></Text>
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-12 border rounded-md"
              placeholder='Enter Password'
              textAlignVertical='center'
              secureTextEntry={true}
              caretHidden={loading}
              editable={!loading}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View className="space-y-1">
            <Text className="text-lg font-semibold">Confirm Password<Text className="text-red-400">*</Text></Text>
            
            <TextInput
              className="border-zinc-300 px-3 font-semibold w-full h-12 border rounded-md mb-6"
              placeholder='Confirm Password'
              textAlignVertical='center'
              secureTextEntry={true}
              caretHidden={loading}
              editable={!loading}
              value={confirmed}
              onChangeText={setConfirmed}
            />
            
          </View>

        <TouchableOpacity
          className="bg-[#eeca70] h-16 w-full items-center justify-center rounded-md" 
          disabled={loading} onPress={Register}>
            {!loading ? (<Text className="font-bold text-white text-xl">Sign Up</Text> ) : (
              <ActivityIndicator color="white" size="large" />
            )}
        </TouchableOpacity>
        <View className="flex flex-row items-center justify-center">
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}><Text className="font-bold text-lg text-[#eeca70]">Sign In</Text></TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
  
}

export default SignUpScreen