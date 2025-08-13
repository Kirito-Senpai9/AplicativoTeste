import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput
       style={styles.input}
       placeholder="Digite seu nome"
       value={nome}
       onChangeText={setNome}
      />
      <Text style={styles.texto}>Olá, {nome || 'visitante'}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'grav',
   
  },
});