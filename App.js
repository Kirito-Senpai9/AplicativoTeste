import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function App() {
  const loginScale = useRef(new Animated.Value(1)).current;
  const signupScale = useRef(new Animated.Value(1)).current;
  const lightOneAnim = useRef(new Animated.Value(0)).current;
  const lightTwoAnim = useRef(new Animated.Value(0)).current;

  const bounce = (anim) => {
    Animated.sequence([
      Animated.timing(anim, { toValue: 0.95, duration: 100, useNativeDriver: true }),
      Animated.spring(anim, { toValue: 1, friction: 3, useNativeDriver: true }),
    ]).start();
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(lightOneAnim, { toValue: 1, duration: 4000, useNativeDriver: true }),
        Animated.timing(lightOneAnim, { toValue: 0, duration: 4000, useNativeDriver: true }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(lightTwoAnim, { toValue: 1, duration: 5000, useNativeDriver: true }),
        Animated.timing(lightTwoAnim, { toValue: 0, duration: 5000, useNativeDriver: true }),
      ])
    ).start();
  }, [lightOneAnim, lightTwoAnim]);

  const lightOneStyle = {
    ...styles.lightOne,
    transform: [
      { translateX: lightOneAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 40] }) },
      { translateY: lightOneAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 40] }) },
    ],
  };

  const lightTwoStyle = {
    ...styles.lightTwo,
    transform: [
      { translateX: lightTwoAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -40] }) },
      { translateY: lightTwoAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -40] }) },
    ],
  };

  return (
    <LinearGradient colors={['#4e0066', '#8a2be2']} style={styles.container}>
      <Animated.View pointerEvents="none" style={lightOneStyle} />
      <Animated.View pointerEvents="none" style={lightTwoStyle} />

      <TextInput
        style={styles.input}
        placeholder="Gmail"
        placeholderTextColor="#ddd"
        keyboardType="email-address"
        autoCapitalize="none"
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
        style={{ transform: [{ scale: loginScale }], width: '80%' }}
      >
        <LinearGradient colors={['#8E2DE2', '#4A00E0']} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </AnimatedTouchable>

      <AnimatedTouchable
        activeOpacity={0.8}
        onPress={() => bounce(signupScale)}
        style={{ transform: [{ scale: signupScale }], width: '80%' }}
      >
        <LinearGradient colors={['#4A00E0', '#8E2DE2']} style={[styles.button, styles.buttonSecondary]}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </LinearGradient>
      </AnimatedTouchable>

      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  lightOne: {
    position: 'absolute', width: 300, height: 300, borderRadius: 150,
    backgroundColor: 'rgba(255,255,255,0.15)', top: -80, left: -80,
  },
  lightTwo: {
    position: 'absolute', width: 200, height: 200, borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.1)', bottom: -50, right: -50,
  },
  input: {
    width: '80%', backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10, padding: 12, marginBottom: 15, color: '#fff',
  },
  button: { paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginBottom: 15 },
  buttonSecondary: { marginTop: 0 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
