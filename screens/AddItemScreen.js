import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// Pantalla para agregar un nuevo elemento
export default function AddItemScreen({ navigation, onAddItem }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSave() {

    // Validación básica
    if (title.trim() === "" || description.trim() === "") {
      return;
    }

    // Enviar datos al padre (App.js)
    onAddItem({
      title: title,
      description: description,
    });

    // Regresar al listado
    navigation.navigate("Items");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Título</Text>

      <TextInput
        style={styles.input}
        placeholder="Ejemplo: Revisar proyecto"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Descripción</Text>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe el elemento"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f7fb",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});