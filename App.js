// Importo navegación de React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importo mis pantallas
import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemsScreen';
import AddItemScreen from './screens/AddItemScreen';
import DetailScreen from './screens/DetailScreen';

// Creo el Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        {/* Pantalla principal de la aplicación */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />


        {/* Pantalla donde se muestran los datos de la API */}
        <Stack.Screen
          name="Items"
          component={ItemScreen}
        />


        {/* Pantalla para agregar elementos */}
        <Stack.Screen
          name="AddItem"
          component={AddItemScreen}
        />


        {/* Pantalla donde se muestra el detalle de un elemento */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}