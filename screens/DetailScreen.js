import { StyleSheet, Text, View } from "react-native";

export default function DetailScreen({ route }) {

  // Recibo el elemento seleccionado desde la pantalla anterior
  const { item } = route.params;

  return (
    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.label}>Título</Text>
      <Text style={styles.title}>{item.title}</Text>

      {/* Descripción */}
      <Text style={styles.label}>Descripción</Text>
      <Text style={styles.description}>{item.description}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f7fb',
  },
  label: {
    fontWeight: 'bold',
    color: '#666',
    marginTop: 12,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});