import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Button from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

function userIdentification() {
  const {
    container,
    content,
    form,
    emoji,
    input,
    title,
    footer,
    header,
  } = styles;

  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const handleBlur = () => {
    setIsFocused(false);
    setIsFilled(!!name);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  };

  const handlePress = () => {
    navigation.navigate('Confirmation');
  };

  return (
    <SafeAreaView style={container}>
      <KeyboardAvoidingView
        style={container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={content}>
            <View style={form}>
              <View style={header}>
                <Text style={emoji}>{isFilled ? '😀' : '🙂'}</Text>

                <Text style={title}>Como podemos{'\n'} chamar você?</Text>
              </View>

              <TextInput
                style={[
                  input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder="Digite um nome"
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChangeText={handleChange}
              ></TextInput>

              <View style={footer}>
                <Button title="Confirmar" onPress={handlePress} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20,
  },
});

export default userIdentification;
