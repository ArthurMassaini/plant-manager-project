import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

import Button from '../components/Button';
import colors from '../styles/colors';
import wateringImg from '../assets/watering.png';

function Welcome() {
  const { container, title, subtitle, image } = styles;

  return (
    <SafeAreaView style={container}>
      <Text style={title}>
        Gerencie {'\n'}suas plantas{'\n'} de forma fácil
      </Text>

      <Image source={wateringImg} style={image} />

      <Text style={subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Button title=">" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },

  image: {
    width: 292,
    height: 284,
  },
});

export default Welcome;
