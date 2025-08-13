import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useEffect } from 'react';

/**
 * Componente principal do aplicativo.
 * Exibe um botão animado com o nome do usuário e a barra de status.
 */
export default function App() {
  // Valor animado responsável pela escala do botão
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Valor animado usado para a aparição do formulário
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Anima o formulário quando o componente é montado
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // Reduz levemente o botão quando pressionado
  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
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
    <LinearGradient colors={['#8E2DE2', '#4A00E0']} style={styles.container}>
      <Animated.View
        style={[
          styles.form,
          {
            opacity: fadeAnim,
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#f0e6ff"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#f0e6ff"
          secureTextEntry
        />
        <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View
            style={[styles.button, { transform: [{ scale: scaleAnim }] }]}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Animated.View>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

// Estilos usados em todo o aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    color: '#fff',
  },
  // Estilo do botão animado
  button: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  // Estilo do texto dentro do botão
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
