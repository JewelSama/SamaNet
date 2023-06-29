import { createStackNavigator } from "@react-navigation/stack" 
import HomeScreen from "./screens/HomeScreen"
import SignInScreen from "./screens/SignInScreen"
import SignUpScreen from "./screens/SignUpScreen"
import Welcome from "./screens/Welcome"

const StackNavigator = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator