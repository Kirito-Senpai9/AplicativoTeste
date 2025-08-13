import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native';
import { useRef } from 'react';

/**
 * Componente principal do aplicativo.
 * Exibe um botão animado com o nome do usuário e a barra de status.
 */
export default function App() {
  // Valor animado responsável pela escala do botão
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Reduz levemente o botão quando pressionado
  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  // Retorna o botão ao tamanho original ao soltar
  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Botão animado que envolve o nome "Eduardo Kaic" */}
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View
          style={[styles.button, { transform: [{ scale: scaleAnim }] }]}
        >
          <Text style={styles.buttonText}>Eduardo Kaic</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos usados em todo o aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#220549ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Estilo do botão animado
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 3,
  },
  // Estilo do texto dentro do botão
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
