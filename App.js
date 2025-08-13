import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const scaleLogin = useRef(new Animated.Value(1)).current;
  const scaleRegister = useRef(new Animated.Value(1)).current;

  const handlePressIn = (anim) => {
    Animated.spring(anim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (anim) => {
    Animated.spring(anim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <LinearGradient colors={['#8e2de2', '#4a00e0']} style={styles.container}>
      <View style={styles.lightOne} />
      <View style={styles.lightTwo} />
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Gmail"
          placeholderTextColor="#ddd"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#ddd"
          style={styles.input}
          secureTextEntry
        />
        <AnimatedTouchable
          style={[styles.button, { transform: [{ scale: scaleLogin }] }]}
          onPressIn={() => handlePressIn(scaleLogin)}
          onPressOut={() => handlePressOut(scaleLogin)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </AnimatedTouchable>
        <AnimatedTouchable
          style={[styles.button, styles.registerButton, { transform: [{ scale: scaleRegister }] }]}
          onPressIn={() => handlePressIn(scaleRegister)}
          onPressOut={() => handlePressOut(scaleRegister)}
        >
          <Text style={styles.buttonText}>Cadastre-se</Text>
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
    backgroundColor: '#ffffff30',
    top: -50,
    left: -80,
  },
  lightTwo: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#ffffff20',
    bottom: -60,
    right: -80,
  },
  content: {
    width: '80%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#ffffff20',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: '#fff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#6a0dad',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#8e24aa',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

