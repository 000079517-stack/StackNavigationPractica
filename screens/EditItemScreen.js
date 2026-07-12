import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { getItemById, updateItem } from "../services/api";

export default function EditItemScreen({ route, navigation }) {
  const { id } = route.params;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    cargarItem();
  }, []);

  async function cargarItem() {
    try {
      const item = await getItemById(id);
      setTitle(item.title);
      setDescription(item.description);
    } catch (error) {
      Alert.alert("Error", "No se pudo cargar el item");
    }
  }

  async function guardarCambios() {
    if (title === "" || description === "") {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    try {
      await updateItem(id, {
        title,
        description,
      });

      Alert.alert("Éxito", "Item actualizado");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "No se pudo actualizar");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />

      <Button
        title="Guardar cambios"
        onPress={guardarCambios}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});