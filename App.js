import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    setContador((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador de Cliques</Text>
      <Text style={styles.numero}>Você clicou {contador} vezes</Text>

      <Button title="Clique aqui" onPress={incrementar} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5c7d5ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  numero: {
    fontSize: 18,
    marginBottom: 10,
  },
});
