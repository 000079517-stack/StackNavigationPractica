// Importo navegación de React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importo mis pantallas
import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemsScreen';
import AddItemScreen from './screens/AddItemScreen';
import DetailScreen from './screens/DetailScreen';
import EditItemScreen from './screens/EditItemScreen';

// Creo el Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Items"
          component={ItemScreen}
        />

        <Stack.Screen
          name="AddItem"
          component={AddItemScreen}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />

        <Stack.Screen
          name="EditItem"
          component={EditItemScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}