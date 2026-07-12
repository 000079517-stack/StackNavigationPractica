import React from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View
} from "react-native";

import { deleteItem } from "../services/api";

export default function DetailScreen({ route, navigation }) {

  // Recibo el elemento seleccionado desde ItemsScreen
  const { item } = route.params;

  // Función para eliminar
  async function eliminar() {

    try {

      await deleteItem(item.id);

      Alert.alert(
        "Eliminado",
        "El elemento fue eliminado correctamente"
      );

      navigation.goBack();

    } catch (error) {

      Alert.alert(
        "Error",
        "No se pudo eliminar el elemento"
      );

    }

  }

  // Confirmación antes de eliminar
  function confirmarEliminar() {

    Alert.alert(
      "Eliminar elemento",
      "¿Seguro que deseas eliminar este elemento?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Eliminar",
          onPress: eliminar,
          style: "destructive"
        }
      ]
    );

  }

  return (

    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.label}>
        Título
      </Text>

      <Text style={styles.title}>
        {item.title}
      </Text>

      {/* Descripción */}
      <Text style={styles.label}>
        Descripción
      </Text>

      <Text style={styles.description}>
        {item.description}
      </Text>

      {/* Botón Editar */}
      <View style={styles.button}>
        <Button
          title="Editar"
          onPress={() =>
            navigation.navigate("EditItem", {
              id: item.id
            })
          }
        />
      </View>

      {/* Botón Eliminar */}
      <View style={styles.button}>
        <Button
          title="Eliminar"
          color="red"
          onPress={confirmarEliminar}
        />
      </View>

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
    color: "#666",
    marginTop: 12,
    marginBottom: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },

  button: {
    marginTop: 20,
  },

});