
import HomeScreen from "./screens/HomeScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import UserScreen from "./screens/UserScreen.js"; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./screens/Login&Register/Login.js";
import Register from "./screens/Login&Register/Register.js";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNav = () => {
  return(
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="User" component={UserScreen}/>
      </Stack.Navigator>
  )
}

const DrawerNav = () => {
  return(
    <Drawer.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen name="Home" component={StackNav}/>
    </Drawer.Navigator>
  )
}
const Tab = createBottomTabNavigator();
const TabNav = () => {
  return(
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen name="Home" component={StackNav}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
      <Tab.Screen name="User" component={UserScreen}/>
    </Tab.Navigator>
  )
}
function App(){
  const stack = createNativeStackNavigator()
  return(
  <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
)
}




export default App;