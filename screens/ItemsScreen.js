import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { getItems } from "../services/api";

export default function ItemScreen({ navigation }) {

  // Guarda los elementos obtenidos de la API
  const [items, setItems] = useState([]);

  // Indica si la información está cargando
  const [loading, setLoading] = useState(true);

  // Guarda un posible error
  const [error, setError] = useState("");

  // Función para obtener los datos de la API
  async function cargarDatos() {
    try {
      const datos = await getItems();
      setItems(datos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Se ejecuta una sola vez al abrir la pantalla
  useEffect(() => {
    cargarDatos();
  }, []);

  // Mientras carga la información
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando información...</Text>
      </View>
    );
  }

  // Si ocurre un error
  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>Listado</Text>

        {/* Botón para agregar un nuevo elemento */}
        <Pressable
          style={styles.addButton}
          onPress={() => navigation.navigate("AddItem")}
        >
          <Text style={styles.addButtonText}>Nuevo</Text>
        </Pressable>

      </View>

      {/* Lista de elementos obtenidos desde la API */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate("Detail", { item })}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </Pressable>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#f5f7fb",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#16a34a",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
  },
});