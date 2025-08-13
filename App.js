import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function App() {
  const loginScale = useRef(new Animated.Value(1)).current;
  const signupScale = useRef(new Animated.Value(1)).current;

  const bounce = (anim) => {
    Animated.sequence([
      Animated.timing(anim, { toValue: 0.95, duration: 100, useNativeDriver: true }),
      Animated.spring(anim, { toValue: 1, friction: 3, useNativeDriver: true }),
    ]).start();
  };

  return (
    <LinearGradient colors={['#4e0066', '#8a2be2']} style={styles.container}>
      <View style={styles.lightOne} />
      <View style={styles.lightTwo} />

      <View style={styles.form}>
        <Text style={styles.title}>Bem-vindo</Text>
        <TextInput
          style={styles.input}
          placeholder="Gmail"
          placeholderTextColor="#ddd"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ddd"
          secureTextEntry
        />
        <AnimatedTouchable
          activeOpacity={0.8}
          onPress={() => bounce(loginScale)}
          style={{ transform: [{ scale: loginScale }], width: '100%' }}
        >
          <LinearGradient colors={['#8E2DE2', '#4A00E0']} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </AnimatedTouchable>
        <AnimatedTouchable
          activeOpacity={0.8}
          onPress={() => bounce(signupScale)}
          style={{ transform: [{ scale: signupScale }], width: '100%' }}
        >
          <LinearGradient colors={['#4A00E0', '#8E2DE2']} style={[styles.button, styles.buttonSecondary]}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </LinearGradient>
        </AnimatedTouchable>
      </View>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightOne: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(255,255,255,0.15)',
    top: -80,
    left: -80,
  },
  lightTwo: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.1)',
    bottom: -50,
    right: -50,
  },
  form: {
    width: '80%',
    padding: 25,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.25)',
    zIndex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    color: '#fff',
  },
  button: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonSecondary: {
    marginTop: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
