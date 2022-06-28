import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/auth/Login/Login';
import Sign from './src/pages/auth/Sign/Sign';
import Messages from './src/pages/auth/Messages/Messages';
import FlashMessage from "react-native-flash-message";
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createNativeStackNavigator();



const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setUserSession(!!user);
    })
  }, [])

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='SignPage' component={Sign} />
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer  >
      <Stack.Navigator>
        {
          !userSession ?
            (
              <Stack.Screen name='AuthStack' component={AuthStack} 
              options={{headerShown:false}}/>
            ) :
            (
              <Stack.Screen name='MessagesPage' component={Messages}
              options={{title:'dertler',headerTintColor:'#00897b',
              headerRight:()=> <Icon name='logout' size={30} color='#00897b'
              onPress={()=>auth().signOut()}/>}}
              />
            )

        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}
export default App;