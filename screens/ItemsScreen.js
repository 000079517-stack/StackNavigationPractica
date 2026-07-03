import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

// Pantalla que muestra la lista de elementos
export default function ItemsScreen({ navigation, items }) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Listado</Text>

        <Pressable
          style={styles.addButton}
          onPress={() => navigation.navigate("AddItem")}
        >
          <Text style={styles.addButtonText}>Nuevo</Text>
        </Pressable>
      </View>

      {/* Lista de elementos */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate("Detail", { item: item })
            }
          >
            <Text>{item.title}</Text>
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
});