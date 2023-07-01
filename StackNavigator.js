import { createStackNavigator } from "@react-navigation/stack" 
import HomeScreen from "./screens/HomeScreen"
import SignInScreen from "./screens/SignInScreen"
import SignUpScreen from "./screens/SignUpScreen"
import Welcome from "./screens/Welcome"
import ValidateScreen from "./screens/ValidateScreen"

const StackNavigator = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Validate" component={ValidateScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator