import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native";  
import StackNavigator from "./StackNavigator";
import GlobalProvider from "./context"



export default function App() {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <StatusBar style="dark" />
        <StackNavigator /> 
      </GlobalProvider>
    </NavigationContainer>
  )
}


