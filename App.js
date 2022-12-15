import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Index'>
          <Stack.Screen name="Index" component={IndexScreen} options={{ title: 'Index Page' }} />
          <Stack.Screen name="Show" component={ShowScreen} options={{ title: 'Detail Page' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;